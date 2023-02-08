<?php

    # error_reporting(E_ALL); ini_set('display_errors', '1');

    session_start();

    function redirect($location) {
        header('Location: ' . $location);
    }

    require_once 'Mustache/Autoloader.php';
    Mustache_Autoloader::register();

    $vars = [];

    function render($page, $message = null) {
        $page = 'views/' . $page;
        render_page($page, $message);
    }

    function render_page($page, $message = null) {
        $mustache = new Mustache_Engine([
            'loader' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__))
        ]);
        global $vars;
        
        if (empty($message)) {
            echo $mustache->render($page, $vars);
            return;
        }
        if (is_string($message)) {
            $vars = array_merge($vars, ['message' => $message]);
            echo $mustache->render($page, $vars);
            return;
        }
        if (is_array($message)) {
            $vars = array_merge($vars, $message);
            echo $mustache->render($page, $vars);
            return;
        }
    }

    function resolve($key, $value) {
        global $vars;
        if (isset($vars[$key])) {
            $vars[$key] = $value;
        } else {
            $vars = array_merge($vars, [$key => $value]);
        }
    }

    /*function resolve($key, $value = null) {
        global $vars;
        $k = array_keys($key)[0];
        if (isset($vars[$k])) {
            $vars[$k] = array_values($key)[0];
            return;
        }
        if (empty($value)) {
            $vars = array_merge($vars, $key);
        } else {
            $vars = array_merge($vars, [$key => $value]);
        }
    }*/

    function validate_date($date, $format = 'Y-m-d'){
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) === $date;
    }