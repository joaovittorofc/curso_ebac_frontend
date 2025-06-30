// Exibe alerta de boas-vindas ao carregar a página
function mostrarBoasVindas() {
    alert("Bem-vindo à loja TurboKids! Divirta-se!");
}

window.addEventListener('load', mostrarBoasVindas);

// Validação simples do formulário
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const nome = document.querySelector('#nome');
            const email = document.querySelector('#email');
            const mensagem = document.querySelector('#mensagem');

            if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
                alert("Por favor, preencha todos os campos antes de enviar.");
                e.preventDefault();
            } else {
                alert("Mensagem enviada com sucesso!");
            }
        });
    }
});

// Efeito de destaque nos produtos
const produtos = document.querySelectorAll('.produto');

produtos.forEach(produto => {
    produto.addEventListener('mouseenter', () => {
        produto.style.transform = "scale(1.05)";
        produto.style.transition = "transform 0.3s ease";
    });

    produto.addEventListener('mouseleave', () => {
        produto.style.transform = "scale(1)";
    });
});
