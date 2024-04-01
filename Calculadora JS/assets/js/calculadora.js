// INSERIR NUMERO
function inserir(num) {
    let numero = document.getElementById('resultado');
    let conteudo = numero.innerHTML
    let limite = 12

    if(conteudo.length <limite){
        numero.innerHTML += num
    } else{
        alert('Máximo 12 caracteres!!')
    }
}

// LIMPAR
function limpar() {
    document.getElementById('resultado').innerHTML = '';
}

// APAGAR ÚLTIMO CARACTERE
function apagar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// CALCULAR
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    let limite = 15; 

    if (resultado && resultado.length <= limite) {
        let expressao = eval(resultado);
        if (String(expressao).length <= limite) {
            document.getElementById('resultado').innerHTML = expressao;
        } else {
            alert('Máximo de caracteres excedido! Limite definido: 15');
        }
    }
}


// CAPTAR TECLA APERTADA
document.addEventListener('keydown', function (event) {
    let key = event.key;
    let teclasNumericas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let operadores = ['+', '-', '*', '/'];

    if (teclasNumericas.includes(key)) {
        // Chama a função inserir() com o número correspondente
        inserir(key);
    } else if (operadores.includes(key)) {
        // Chama a função inserir() com o operador correspondente
        inserir(key);
    } else if (key === 'Enter') {
        // Se pressionar Enter, chama a função calcular()
        calcular();
        document.getElementById('igual-btn').classList.add('btn-pressed');
    } else if (key === 'Backspace') {
        // Se pressionar Backspace, chama a função apagar()
        apagar();
        document.getElementById('apagar-btn').classList.add('btn-pressed');
    } else if (key === 'Escape') {
        // Se pressionar Escape, chama a função limpar()
        limpar();
        document.getElementById('limpar-btn').classList.add('btn-pressed');
    }

    // Adiciona a classe de efeito de escala quando uma tecla é pressionada
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.innerText === key) {
            btn.classList.add('btn-pressed');
        }
    });
});

// CAPTAR APOS APERTA TECLA
document.addEventListener('keyup', function (event) {
    let key = event.key;

    // Remove a classe de efeito de escala quando uma tecla é solta
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.innerText === key) {
            btn.classList.remove('btn-pressed');
        }
    });

    // Remove a classe de efeito de escala do botão 'C' (limpar)
    if (key === 'Escape') {
        document.getElementById('limpar-btn').classList.remove('btn-pressed');
    }

    // Remove a classe de efeito de escala do botão '<' (apagar)
    if (key === 'Backspace') {
        document.getElementById('apagar-btn').classList.remove('btn-pressed');
    }

    // Remove a classe de efeito de escala do botão '=' (igual)
    if (key === 'Enter') {
        document.getElementById('igual-btn').classList.remove('btn-pressed');
    }
});
