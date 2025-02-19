## 🏋️‍♂️ Desafio: Cálculo Assíncrono do IMC  

Crie uma **função assíncrona** que recebe dois parâmetros: **peso** e **altura** de uma pessoa. Essa função deve calcular o **Índice de Massa Corporal (IMC)** e retornar uma **Promise** com o resultado.  

### 📌 Regras  

- Se algum dos parâmetros **não for um número**, a **Promise deve ser rejeitada**.  
- Caso contrário, a função deve calcular o IMC utilizando a seguinte fórmula:  

IMC = peso / (altura * altura)

Além disso, desenvolva uma **segunda função** que recebe os mesmos parâmetros (**peso e altura**), chama a função do cálculo do IMC e exibe o resultado no **console**.  

### 📊 Classificação do IMC  

Após obter o resultado, classifique a pessoa de acordo com a tabela abaixo:  

| IMC | Classificação |
|------|----------------|
| **Menos de 18,5** | Magreza |
| **Entre 18,5 e 24,9** | Normal |
| **Entre 25 e 29,9** | Sobrepeso |
| **Entre 30 e 39,9** | Obesidade |
| **Acima de 40** | Obesidade grave |

### 🛠 Dica Extra  

Após chamar a função que calcula o IMC, insira um `console.log()` com uma mensagem qualquer para demonstrar o funcionamento **assíncrono** do código. 🚀

