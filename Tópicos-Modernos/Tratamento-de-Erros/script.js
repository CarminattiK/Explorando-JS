// 1- Função para validar o formato do e-mail
function validarEmail(email) {
    // Verifica se o e-mail corresponde ao padrão: texto@texto.texto
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido.') // Cria um novo erro com uma mensagem personalizada
        err.input = 'email' // Atribui a propriedade 'input' ao erro para identificar o campo inválido
        throw err // Lança o erro para ser tratado 
    }
}

// 2- Função para validar a segurança da senha
function validarSenha(senha) {
    // A senha é considerada válida se:
    // - Tiver pelo menos 8 caracteres
    // - Contiver letras minúsculas, maiúsculas, números e caracteres especiais
    if (
        senha.length < 8 || 
        !senha.match(/[a-z]/) || 
        !senha.match(/[A-Z]/) || 
        !senha.match(/[0-9]/) ||
        !senha.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error('Senha inválida.') // Tambem cria um novo erro com uma mensagem personalizada da mesma maneira que a primeira função
        err.input = 'senha' 
        throw err 
    }
}

// 3- Função para redefinir os estilos do formulário antes de uma nova validação
function resetarEstilosdoForm() {
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('sucesso', 'erro') // Remove as classes de sucesso ou erro
        document.querySelector(`#${key}-erro`).textContent = '' // Limpa as mensagens de erro
    })
}

// 4- Objeto para armazenar as referências aos campos do form
const userInputs = {}

// 5- Seleciona os campos do formulário e armazena no objeto userInputs
userInputs.nome = document.querySelector('#nome')
userInputs.email = document.querySelector('#email')
userInputs.senha = document.querySelector('#senha')

// 6- Seleciona o formulário da página
const form = document.querySelector('form')

// 7- Adiciona um listener para o evento de envio do formulário
form.addEventListener('submit', (ev) => {
    ev.preventDefault() // Impede o envio padrão do formulário para manipulação personalizada
    resetarEstilosdoForm() // Limpa os estilos anteriores antes de validar
    try {
        // Validação do campo nome (apenas aplica o estilo de sucesso, sem validação específica)
        userInputs.nome.classList.add('sucesso')
        
        // Validação do e-mail
        validarEmail(userInputs.email.value)
        userInputs.email.classList.add('sucesso')

        // Validação da senha
        validarSenha(userInputs.senha.value)
        userInputs.senha.classList.add('sucesso')

    } catch (err) {
        // Se ocorrer um erro durante a validação, aplica a classe de erro no campo
        userInputs[err.input].classList.add('erro')
        // Exibe a mensagem de erro abaixo do campo inválido
        document.querySelector(`#${err.input}-erro`).textContent = err.message
    }
})
