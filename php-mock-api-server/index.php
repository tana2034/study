<?php
if (!preg_match('#\A/memo/(?P<id>\d+)\z#', $_SERVER['PATH_INFO'], $matches)) {
    header('HTTP/1.1 404 Not Found');
    exit;
}

$response = [
    'id' => (int)$matches['id'],
    'memo' => 'mock api memo' . $matches['id']
];
header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);
