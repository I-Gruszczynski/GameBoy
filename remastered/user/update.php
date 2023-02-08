<?php

    require_once '../credentials.php';
    require_once '../application.php';
    require_once '../user.php';

    if (empty($_SESSION['user_id'])) {
        redirect('../user/login.php');
        return;
    }

    if (empty($_POST)) {
        render('update');
        return;
    }

    if (empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['birthday'])) {
        render('update', 'Nie podano danych do aktualizacji!');
        return;
    }

    if (empty($_POST['verification'])) {
        render('update', 'Nie podano aktualnego hasła!');
        return;
    }

    $user_id = $_SESSION['user_id'];

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $birthday = $_POST['birthday'];
    $verification = $_POST['verification'];

    if (strlen($name) < 3 || strlen($name) > 64) {
        render('update', 'Nazwa użytkownika musi posiadać od 3 do 64 znaków!');
        return;
    }

    if (strlen($email) < 6 || strlen($email) > 64) {
        render('update', 'Adres email musi posiadać od 6 do 64 znaków!');
        return;
    }

    if (strlen($phone) < 9 || strlen($phone) > 16) {
        render('update', 'Numer telefonu musi posiadać od 9 do 16 znaków!');
        return;
    }

    if (!ctype_alnum($name)) {
        render('update', 'Nazwa użytkonika może zawierać tylko litery i cyfry!');
        return;
    }

    if (isset($phone) && (!ctype_digit($phone))) {
        render('update', 'Numer telefonu może zawierać tylko cyfry!');
        return;
    }

    if (isset($birthday) && (!validate_date($birthday))) {
        render('update', 'Podana data urodzenia jest nieprawidłowa!');
        return;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        render('update', 'Podany adres email jest nieprawidłowy!');
        return;
    }

    $fetched_user_id;
    $fetched_password;

    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'SELECT user_id FROM users WHERE user_id != ? AND email = ?');

    mysqli_stmt_bind_param($statement, 'is', $user_id, $email);
    mysqli_stmt_execute($statement);
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $fetched_user_id);
    mysqli_stmt_fetch($statement);
    mysqli_stmt_close($statement);

    if (isset($fetched_user_id)) {
        mysqli_close($connection);

        render('update', 'Podany adres email jest już zajęty!');
        return;
    }

    $statement = mysqli_prepare($connection, 'SELECT password FROM users WHERE user_id = ?');

    mysqli_stmt_bind_param($statement, 'i', $user_id);
    mysqli_stmt_execute($statement);
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $fetched_password);
    mysqli_stmt_fetch($statement);
    mysqli_stmt_close($statement);

    if (!password_verify($verification, $fetched_password)) {
        mysqli_close($connection);

        render('update', 'Podane akutalne hasło jest niepoprawne!');
        return;
    }

    $statement = mysqli_prepare($connection, 'UPDATE users SET name = ?, email = ?, phone = ?, birthday = ? WHERE user_id = ?');

    mysqli_stmt_bind_param($statement, 'ssssi', $name, $email, $phone, $birthday, $user_id);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    mysqli_close($connection);

    resolve('user', [
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'birthday' => $birthday
    ]);

    render('update', 'Dane użytkownika zostały zaktualizowane!');