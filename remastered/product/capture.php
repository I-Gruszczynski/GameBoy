<?php

    require_once '../credentials.php';
    require_once '../application.php';
    require_once '../paypal.php';

    if (empty($_SESSION['user_id'])) {
        redirect('../user/login.php');
        return;
    }

    if (empty($_GET['token'])) {
        redirect('../index.php');
        return;
    }

    $token = $_GET['token'];

    if (!ctype_alnum($token)) {
        redirect('../index.php');
        return;
    }

    $status = paypal_fetch_paynament_status($token);

    if (empty($status)) {
        render('failed');
        return;
    }

    if ($status != 'COMPLETED') {
        render('failed');
        return;
    }

    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'UPDATE purchase SET completed = 1, date = CURRENT_TIMESTAMP() WHERE token = ?');

    mysqli_stmt_bind_param($statement, 's', $token);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    mysqli_close($connection);

    render('success');