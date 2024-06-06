<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

// Dummy data for example
$valid_username = 'admin';
$valid_password = 'password';

if ($username === $valid_username && $password === $valid_password) {
    $_SESSION['loggedin'] = true;
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>