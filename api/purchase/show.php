<?php

    require_once '../credentials.php';
    require_once '../application.php';

    if (!is_get()) {
        error('Użyto złej metody HTTP! Użyj metody GET!');
        return;
    }

    if (empty($_SESSION['user_id'])) {
        error('Nie jesteś zalogowany!');
        return;
    }

    $user_id = $_SESSION['user_id'];

    $products = [];

    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'SELECT purchase.purchase_id, purchase.product_id, products.title, products.subtitle, products.publisher, products.released, products.icon, purchase.key, purchase.price as purchase_price, purchase.date as purchase_date FROM purchase INNER JOIN products ON purchase.product_id = products.product_id WHERE completed = 1 AND user_id = ?');

    mysqli_stmt_bind_param($statement, 'i', $user_id);
    mysqli_stmt_execute($statement);

    $result = mysqli_stmt_get_result($statement);

    while ($product = mysqli_fetch_assoc($result)) {
        array_push($products, $product);
    }

    mysqli_stmt_close($statement);
    mysqli_close($connection);

    success('Lista zakupionych produktów została zwrócona pomyślnie!', ['products' => $products]);