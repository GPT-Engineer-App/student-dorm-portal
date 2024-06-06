<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

// Dummy data for example
$data = [
    'students' => [
        ['id' => 1, 'name' => 'John Doe'],
        ['id' => 2, 'name' => 'Jane Smith']
    ],
    'dorms' => [
        ['id' => 1, 'name' => 'Dorm A'],
        ['id' => 2, 'name' => 'Dorm B']
    ],
    'rooms' => [
        ['id' => 1, 'number' => '101'],
        ['id' => 2, 'number' => '102']
    ],
    'users' => [
        ['id' => 1, 'username' => 'admin'],
        ['id' => 2, 'username' => 'user1']
    ]
];

echo json_encode(['status' => 'success', 'data' => $data]);
?>