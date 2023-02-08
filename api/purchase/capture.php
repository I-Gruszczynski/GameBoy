<?php

    require_once '../credentials.php';
    require_once '../application.php';
    require_once 'paypal.php';

    if (!is_get()) {
        error('Użyto złej metody HTTP! Użyj metody GET!');
        return;
    }

    if (empty($_SESSION['user_id'])) {
        error('Nie jesteś zalogowany!');
        return;
    }

    if (empty($_GET['token'])) {
        error('Nie podano tokena płatności!');
        return;
    }

    $token = $_GET['token'];

    if (!ctype_alnum($token)) {
        error('Podany token płatności jest nieprawidłowy!');
        return;
    }

    $status = paypal_fetch_paynament_status($token);

    if (empty($status)) {
        error('Nie można zatwierdzić płatność!');
        return;
    }

    if ($status != 'COMPLETED') {
        error('Płatność nie posiada statusu zrealizowanej!');
        return;
    }

    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'UPDATE purchase SET completed = 1, date = CURRENT_TIMESTAMP() WHERE token = ?');

    mysqli_stmt_bind_param($statement, 's', $token);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    mysqli_close($connection);

    success('Płatność został zatwierdzona pomślnie!');
