<?php

    require_once '../credentials.php';
    require_once '../application.php';

    if (empty($_SESSION['user_id'])) {
        redirect('../index.php');
        return;
    }

    unset($_SESSION['user_id']);
    
    redirect('../index.php');