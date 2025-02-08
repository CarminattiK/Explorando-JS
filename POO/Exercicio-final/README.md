# 🚀 Desafio de Programação: Praticando a criação de classes para um banco digital

## 🎯 Objetivo  
Desenvolver uma aplicação em **JavaScript** que simula o funcionamento de um banco digital, com funcionalidades de **depósito**, **transferência** e **empréstimos** em contas bancárias. Para isso, você deverá criar as seguintes classes:  

---

## 📦 Classes e Estruturas Necessárias  

### 1️⃣ **Classe `Deposito`**  
- Representa um depósito realizado em uma conta.  
- **Atributos:**  
  - `valor`: o valor do depósito.  
  - `dataDeCriacao`: a data em que o depósito foi efetuado.  

---

### 2️⃣ **Classe `Transferencia`**  
- Responsável por gerenciar as transferências entre usuários.  
- **Atributos:**  
  - `doUsuario`: referência ao usuário que enviou o valor.  
  - `paraUsuario`: referência ao usuário que recebeu o valor.  
  - `valor`: o montante transferido.  
  - `dataDeCriacao`: a data em que a transferência ocorreu.  

---

### 3️⃣ **Classe `Emprestimo`**  
- Controla informações sobre empréstimos realizados.  
- **Atributos Estáticos Privados:**  
  - `#taxa`: taxa de juros aplicada ao empréstimo.  

- **Getters e Setters:**  
  - `get taxa()`: recupera o valor da taxa de juros atual.  
  - `set taxa(porcentagem)`: atualiza a taxa de juros com base em uma nova porcentagem.  

- **Atributos da Instância:**  
  - `valor`: valor total do empréstimo.  
  - `dataDeCriacao`: data em que o empréstimo foi solicitado.  
  - `parcelas`: lista de parcelas geradas para o pagamento do empréstimo.  

- **Observação:**  
  O construtor deve receber o número de parcelas e calcular automaticamente o valor de cada uma, criando instâncias da classe `Parcelas`.  

---

### 4️⃣ **Classe `Parcelas`**  
- Representa uma parcela de um empréstimo.  
- **Atributos:**  
  - `valor`: o valor da parcela.  
  - `numero`: número da parcela (ex: 1, 2, 3, ...).  
  - `status`: indica se a parcela está `"paga"` ou `"pendente"`.  

---

### 5️⃣ **Classe `Conta`**  
- Gerencia todas as operações financeiras de um usuário.  
- **Atributos:**  
  - `#saldo` (privado): representa o saldo da conta, que só pode ser modificado através de operações como depósitos, empréstimos e transferências.  
  - `depositos`: lista de todos os depósitos realizados.  
  - `emprestimos`: lista de todos os empréstimos tomados.  
  - `transferencias`: lista de todas as transferências realizadas ou recebidas.  
  - `dono`: o proprietário da conta (usuário).  

- **Métodos:**  
  - `adicionarDeposito(deposito)`: adiciona um novo depósito e atualiza o saldo.  
  - `adicionarEmprestimo(emprestimo)`: registra um novo empréstimo e atualiza o saldo.  
  - `adicionarTransferencia(transferencia)`: registra uma transferência. O saldo é atualizado dependendo se o valor foi enviado ou recebido.  

---

### 6️⃣ **Classe `Usuario`**  
- Representa um cliente do banco.  
- **Atributos:**  
  - `nomeCompleto`: o nome completo do usuário.  
  - `email`: o e-mail do usuário (único para cada usuário).  
  - `conta`: instância da classe `Conta` associada ao usuário.  

---

### 7️⃣ **Classe `App`**  
- Responsável por orquestrar as operações bancárias e gerenciar os usuários do sistema.  
- **Atributos Estáticos:**  
  - `#usuarios`: lista privada que armazena todos os usuários cadastrados no app.  

- **Métodos Estáticos:**  
  - `criarUsuario(email, nomeCompleto)`: cria um novo usuário, garantindo que o e-mail seja único.  
  - `encontrarUsuario(email)`: busca um usuário pelo e-mail.  
  - `deposito(email, valor)`: realiza um depósito para o usuário informado.  
  - `transferencia(deEmail, paraEmail, valor)`: realiza uma transferência entre dois usuários.  
  - `pegarEmprestimo(email, valor, numeroDeParcelas)`: solicita um empréstimo para um usuário específico.  
  - `alterarTaxasDeEmprestimo(novaPorcentagem)`: atualiza a taxa de juros dos empréstimos.  

---

## 📝 Regras de Implementação  

- O **saldo da conta** deve ser um atributo privado e não pode ser modificado diretamente.  
- **Cada usuário só pode ter um e-mail cadastrado**. O sistema deve impedir duplicatas.  
- Os **empréstimos** devem considerar a taxa de juros ao calcular o valor das parcelas.  
- A **transferência** de valores deve considerar se o valor está sendo enviado ou recebido, ajustando o saldo adequadamente.  

---

## ⚡ Exemplos de Operações  

1. Criar usuários.  
2. Realizar depósitos e visualizar o saldo atualizado.  
3. Fazer transferências entre usuários.  
4. Solicitar empréstimos e visualizar as parcelas geradas.  
5. Alterar a taxa de juros dos empréstimos e verificar o impacto em novos empréstimos.  

---

## 🎯 Dica Final  
Mantenha o código organizado utilizando o conceito de **Programação Orientada a Objetos (POO)**. Utilize métodos privados e públicos de forma apropriada, e explore o uso de **atributos estáticos** para gerenciar estados globais do sistema.  
