<?php

    require_once '../credentials.php';
    require_once '../application.php';
    require_once 'paypal.php';
    
    if (!is_post()) {
        error('Użyto złej metody HTTP! Użyj metody POST!');
        return;
    }

    if (empty($_SESSION['user_id'])) {
        error('Nie jesteś zalogowany!');
        return;
    }

    if (empty($_POST['product_id'])) {
        error('Nie podno identyfikatora produktu!');
        return;
    }

    $user_id = $_SESSION['user_id'];
    $product_id = $_POST['product_id'];

    if (!ctype_digit($product_id)) {
        error('Podany identyfikator produktu jest nieprawidłowy!');
        return;
    }

    $fetched_price;

    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'SELECT (price - discount) FROM products WHERE product_id = ?');

    mysqli_stmt_bind_param($statement, 'i', $product_id);
    mysqli_stmt_execute($statement);
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $fetched_price);
    mysqli_stmt_fetch($statement);

    if (empty($fetched_price)) {
        mysqli_close($connection);

        error('Podany identyfikatora produkt jest nieprawidłowy!');
        return;
    }

    $token = paypal_fetch_paynament_token($fetched_price);
    $link = paypal_get_paynement_link($token);

    if (empty($token)) {
        mysqli_close($connection);
    
        error('Nie można wygenerować odnośnika do płatności!');
        return;
    }

    $statement = mysqli_prepare($connection, 'INSERT INTO purchase VALUES (NULL, ?, ?, ?, ?, 0, NULL)');

    mysqli_stmt_bind_param($statement, 'iisi', $user_id, $product_id, $token, $fetched_price);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    mysqli_close($connection);

    success('Odnośnik do płatności został wygenerowany pomyślnie!', ['link' => $link]);

