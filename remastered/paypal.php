<?php

    require_once 'credentials.php';

    function paypal_fetch_bearer() {
        $fetched_bearer;

        $connection = mysqli_connect(MYSQL_ADDRESS, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);
        $statement = mysqli_prepare($connection, 'SELECT token FROM paypal_cache WHERE expiration > CURRENT_TIMESTAMP()');
    
        mysqli_stmt_execute($statement);
        mysqli_stmt_store_result($statement);
        mysqli_stmt_bind_result($statement, $fetched_bearer);
        mysqli_stmt_fetch($statement);
        mysqli_stmt_close($statement);
    
        if (isset($fetched_bearer)) {
            mysqli_close($connection);

            return $fetched_bearer;
        }
    
        $request = curl_init();
    
        curl_setopt($request, CURLOPT_URL,'https://api-m.sandbox.paypal.com/v1/oauth2/token');
        curl_setopt($request, CURLOPT_POSTFIELDS, 'grant_type=client_credentials');
        curl_setopt($request, CURLOPT_USERPWD, PAYPAL_CLIENT_ID . ':' . PAYPAL_CLIENT_SECRET);
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_POST, true);
    
        $response = curl_exec($request);
        $parsed = json_decode($response);
    
        curl_close($request);
    
        $fetched_bearer = $parsed->access_token;
        $fetched_expiration = $parsed->expires_in;

        if (empty($fetched_bearer)) {
            mysqli_close($connection);
            
            return null;
        }

        $statement = mysqli_prepare($connection, 'INSERT INTO paypal_cache VALUES (?, DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL ? SECOND))');
    
        mysqli_stmt_bind_param($statement, 'si', $fetched_bearer, $fetched_expiration);
        mysqli_stmt_execute($statement);
        mysqli_stmt_close($statement);
        mysqli_close($connection);
    
        return $fetched_bearer;
    }

    function paypal_fetch_paynament_token($price) {
        $request = curl_init();
        $bearer = paypal_fetch_bearer();

        $headers = [
            'Content-Type: application/json', 
            'Authorization: Bearer ' . $bearer
        ];

        $data = [
            'intent' => 'CAPTURE',
            'purchase_units' => [
                [
                    'amount' => [
                        'currency_code' => 'PLN',
                        'value' => $price
                    ],
                    'payee' => [
                        'email_address' => PAYPAL_EMAIL_ADDRESS
                    ]
                ]
            ],
            'application_context' => [
                'brand_name' => 'Projekt stundetów UKW',
                'landing_page' => 'NO_PREFERENCE',
                'user_action' => 'PAY_NOW',
                'return_url' => 'http://146.59.44.209/transaction_successful.html',
                'cancel_url' => 'http://146.59.44.209/transaction_failed.html'
            ]
        ];

        curl_setopt($request, CURLOPT_URL,'https://api-m.sandbox.paypal.com/v2/checkout/orders');
        curl_setopt($request, CURLOPT_POST, true);
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($request, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($request);
        $parsed = json_decode($response);

        curl_close($request);

        return $parsed->id;
    }

    function paypal_fetch_paynament_status($token) {
        $request = curl_init();
        $bearer = paypal_fetch_bearer();

        $headers = [
            'Content-Type: application/json', 
            'Authorization: Bearer ' . $bearer
        ];

        curl_setopt($request, CURLOPT_URL, 'https://api.sandbox.paypal.com/v2/checkout/orders/' . $token . '/capture');
        curl_setopt($request, CURLOPT_POST, true);
        curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($request, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($request);
        $parsed = json_decode($response);

        curl_close($request);

        return $parsed->status;
    }

    function paypal_get_paynement_link($token) {
        return 'https://www.sandbox.paypal.com/checkoutnow?token=' . $token;
    }