<?php

    require_once '../credentials.php';
    require_once '../application.php';

    if (isset($_SESSION['user_id'])) {
        redirect('../index.php');
        return;
    }

    if (empty($_POST)) {
        render('register');
        return;
    }

    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['password'])) {
        render('register', 'Nie podano danych do rejestracji!');
        return;
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (strlen($name) < 3 || strlen($name) > 64) {
        render('register', 'Nazwa użytkownika musi posiadać od 3 do 64 znaków!');
        return;
    }

    if (strlen($email) < 6 || strlen($email) > 64) {
        render('register', 'Adres email musi posiadać od 6 do 64 znaków!');
        return;
    }

    if (strlen($password) < 8 || strlen($password) > 128) {
        render('register', 'Hasło musi posiadać od 8 do 128 znaków!');
        return;
    }

    if (!ctype_alnum($name)) {
        render('register', 'Nazwa użytkonika może zawierać tylko litery i cyfry!');
        return;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        render('register', 'Podany adres email jest nieprawidłowy!');
        return;
    }

    $fetched_user_id;
    
    $password = password_hash($password, PASSWORD_BCRYPT);
    $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
    $statement = mysqli_prepare($connection, 'SELECT user_id FROM users WHERE email = ?');

    mysqli_stmt_bind_param($statement, 's', $email);
    mysqli_stmt_execute($statement);
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $fetched_user_id);
    mysqli_stmt_fetch($statement);
    mysqli_stmt_close($statement);

    if (isset($fetched_user_id)) {
        mysqli_close($connection);

        render('register', 'Podany adres email jest już zajęty!');
        return;
    }

    $statement = mysqli_prepare($connection, 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)');

    mysqli_stmt_bind_param($statement, 'sss', $name, $email, $password);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    mysqli_close($connection);

    redirect('login.php');