<?php

    require_once '../credentials.php';
    require_once '../application.php';
    require_once '../user.php';

    if (empty($_GET['product_id'])) {
        redirect('../index.php');
        return;
    }

    $product_id = $_GET['product_id'];

    if (!ctype_digit($product_id)) {
        redirect('../index.php');
        return;
    }

    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'SELECT * FROM products WHERE product_id = ?');

    mysqli_stmt_bind_param($statement, 'i', $product_id);
    mysqli_stmt_execute($statement);

    $result = mysqli_stmt_get_result($statement);
    $product = mysqli_fetch_assoc($result);

    mysqli_stmt_close($statement);
    mysqli_close($connection);

    if (empty($product)) {
        redirect('../index.php');
        return;
    }

    $product['pictures'] = explode(';', $product['pictures']);

    render('show', ['product' => $product]);