<?php

$re_name = '/[\w\d_]{6,12}/i';
$re_email = '/[\w\d_-]+@[\w\d]+.[\w]{2,3}/i';
$re_tel = '/380\([\d]{2}\)[\d]{3}-[\d]{2}-[\d]{2}/i';
$error = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    preg_match($re_name, $_POST['name'], $error['name']);
    preg_match($re_email, $_POST['email'], $error['email']);
    preg_match($re_tel, $_POST['tel'], $error['tel']);
    $error['success'] = "Отправка данных прошла успешно.";
    foreach ($error as $key => $value) {
        //echo $value;
        if (empty($value)) {
            unset($error['success']);
        }
    }
    echo json_encode($error);
}