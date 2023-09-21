<?php
$directory = './oppgaver/';
$files = scandir($directory);
$files = array_diff($files, ['.', '..']);

echo json_encode($files);
?>