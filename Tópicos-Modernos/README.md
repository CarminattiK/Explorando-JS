# 🚀 Desafio de Programação: Formulário de Registro com Validação

O objetivo deste exercício é desenvolver uma página **HTML** com um formulário de registro que inclua os seguintes campos:  
- **Nome**  
- **E-mail**  
- **Senha**  

Ao enviar o formulário, o sistema deverá realizar verificações para garantir que o e-mail e a senha estejam em conformidade com critérios pré-definidos de validação.

## ✅ Regras de Validação

### 📧 Critérios para um E-mail Válido
O e-mail informado será considerado válido se cumprir as seguintes condições:
- Conter o caractere **"@"**.
- Ter pelo menos **2 caracteres** antes do **"@"**, podendo ser letras, números ou o caractere `_` (underscore).
- Conter no mínimo **2 caracteres** após o **"@"**.
- Incluir um **"." (ponto)** seguido de pelo menos **2 caracteres** após o domínio.
- **Exemplo de e-mail válido:** `exemplo@dominio.com`

### 🔐 Critérios para uma Senha Segura
A senha será considerada forte e válida se atender aos seguintes requisitos:
- Possuir pelo menos **uma letra minúscula** (`a-z`).
- Conter pelo menos **uma letra maiúscula** (`A-Z`).
- Incluir pelo menos **um número** (`0-9`).
- Ter pelo menos **um caractere especial** (ex: `!@#$%^&*()` etc).
- Ter no mínimo **8 caracteres** no total.

## ⚙️ Instruções para Implementação
- Crie **funções separadas** para realizar a validação do e-mail e da senha.
- Em caso de falha na validação, cada função deve **lançar um erro** com uma mensagem descritiva informando o motivo da invalidação.
- Utilize um bloco **`try...catch`** para tratar os erros gerados, evitando que mensagens de erro sejam exibidas diretamente no console do navegador.
- As mensagens de erro devem ser apresentadas de forma clara e intuitiva para o usuário, indicando o que precisa ser corrigido.

💡 **Dica:** Capriche na interface para deixar o feedback visual mais amigável e intuitivo! 🚀
