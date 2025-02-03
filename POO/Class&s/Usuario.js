// Praticando a criação de Classes
/* Desenvolva uma classe chamada Usuario, que deverá conter:

Um atributo nomeCompleto, definido no momento da criação do objeto.
Um atributo email, também atribuído na instanciação.
Um atributo senha, configurado no momento da criação.
Um método login, que recebe um email e uma senha como parâmetros e verifica se correspondem aos dados do usuário. Caso sejam corretos, exiba uma mensagem informando que o login foi bem-sucedido; caso contrário, informe que as credenciais estão incorretas. */

// 1- Definição da classe Usuario, representando um usuário com nome, e-mail e senha de acordo com o que foi pedido.
class Usuario {
    constructor(nomeCompleto, email, senha) {
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.senha = senha
    }

    // 2- Método de autenticação que verifica se o e-mail e a senha fornecidos correspondem aos do usuário. com o auxilio da estrutura IF e ELSE
    login(email, senha) {
        if (email === this.email && senha === this.senha) {
            console.log(`Login realizado com sucesso!`)
        } else {
            console.log(`Falha ao fazer login! Confira seu email ou senha.`)
        }
        
    }
}

// 3- Criação da instância da classe 
const bruno = new Usuario(`Bruno Felipe Carminatti`, `brun03dev@gmail.com`, 1234)

// Testando o método login com credenciais corretas (deve exibir "Login realizado com sucesso!")
bruno.login(`brun03dev@gmail.com`, 1234)

// Testando o método login com senha incorreta (deve exibir "Falha ao fazer login! Confira seu e-mail ou senha.")
bruno.login(`brun03dev@gmail.com`, 4321) 


