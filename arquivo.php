<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    echo "<h2>Olá, $nome! Seja bem-vindo(a)!</h2>";
}
?>