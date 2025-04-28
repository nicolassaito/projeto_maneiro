// Espera até que o HTML esteja carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão
    const botao = document.getElementById('meuBotao');
    
    // Adiciona um evento de clique
    botao.addEventListener('click', function() {
      alert('Você clicou no botão!');
    });
  });
  