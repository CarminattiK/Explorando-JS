# 🗡️ Exercício: Criação de Peronsagens para Jogo

## Objetivo  
Crie classes em JavaScript para representar personagens de um jogo, aplicando conceitos de herança e polimorfismo.

---

## Classe `Personagem`  
Crie a classe `Personagem` com:  
- **Atributos:** `nome`, `pontosDeVida`, `pontosDeAtaque`, `pontosDeDefesa`.  
- **Método:** `atacar(alvo)` — Reduz os pontos de vida do alvo com base na diferença entre o ataque do personagem e a defesa do alvo.

---

## Classe `Gatuno`  
Crie a classe `Gatuno`, que herda de `Personagem`:  
- **Método sobrescrito:** `atacar(alvo)` — O dano causado é o dobro da diferença entre o ataque do ladrão e a defesa do alvo.

---

## Classe `Mago`  
Crie a classe `Mago`, que herda de `Personagem`:  
- **Atributo extra:** `pontosMagicos`.  
- **Método sobrescrito:** `atacar(alvo)` — O dano é a soma do ataque e dos pontos de magia, subtraindo a defesa do alvo.  
- **Novo método:** `restaurarVida(alvo)` — Aumenta os pontos de vida do alvo em duas vezes os pontos de magia do mago.

---

## Classe `Guerreiro`  
Crie a classe `Guerreiro`, que herda de `Personagem`:  
- **Atributos extras:** `pontosDeEscudo` e `postura` (pode ser `'atacante'` ou `'defensor'`).  
- **Método sobrescrito:** `atacar(alvo)` — Só funciona se a postura for `'atacante'`.  
- **Novo método:** `alternarPostura()` — Alterna entre as posturas de ataque e defesa.  
  - Em defesa, o escudo é somado à defesa.  
  - Em ataque, considera apenas a defesa normal.

---

## Teste  
Crie um arquivo separado para testar as classes, criando instâncias e realizando ataques, curas e mudanças de postura.  
