# 💡 Lâmpada Interativa

<p align="center">
  Uma página web elegante e responsiva para acender e apagar uma lâmpada virtual.
</p>

<p align="center">

![HTML5](https://img.shields.io/badge/HTML5-Estrutura-orange?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Estilo-blue?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interação-yellow?style=for-the-badge&logo=javascript&logoColor=black)

</p>

---

## ✨ Sobre o projeto

**Lâmpada Interativa** é um pequeno projeto front-end criado para praticar a integração entre HTML, CSS e JavaScript. Ao clicar no botão, o estado da lâmpada muda, e toda a página recebe feedback visual.

O projeto utiliza **JavaScript puro**, sem bibliotecas ou frameworks adicionais.

## 🎯 Funcionalidades

- ✅ Acender e apagar a lâmpada
- ✅ Atualização automática do texto de status
- ✅ Alteração do fundo e do botão durante a ativação
- ✅ Efeito de brilho e animações suaves
- ✅ Layout responsivo para computadores e celulares
- ✅ Compatibilidade com leitores de tela
- ✅ Respeito à preferência de movimento reduzido

## 🖼️ Visual

Quando apagada, a lâmpada apresenta um acabamento escuro e neutro. Ao ser acendida:

- O corpo da lâmpada fica amarelo
- O filamento ganha uma cor alaranjada
- Um brilho surge ao redor da lâmpada
- O botão muda de cor
- O fundo recebe um leve efeito luminoso

## 📁 Estrutura dos arquivos

```text
ia/
├── index.html  # Estrutura da página
├── styles.css  # Aparência, responsividade e animações
├── script.js   # Comportamento e alternância da lâmpada
└── README.md   # Documentação do projeto
```

## 🧩 Explicação dos códigos

### `index.html`

O HTML monta a interface da página e contém:

- Um cabeçalho com título e descrição
- Uma área chamada **lamp-stage**, que representa o ambiente da lâmpada
- Os elementos da lâmpada: brilho, bulbo, filamento e suporte
- Um texto com o estado atual
- Um botão com ícone de energia

O elemento `<strong>` dentro do status destaca visualmente a palavra **acesa** ou **apagada**.

### `styles.css`

O CSS é responsável por toda a aparência visual:

- `body.light-on` modifica o fundo quando a lâmpada está acesa
- `.glow` cria o efeito luminoso em volta da lâmpada
- `.bulb` representa o vidro da lâmpada
- `.socket` estiliza o suporte
- `.power-button` cria o botão arredondado
- `@media` adapta o projeto para telas menores
- `prefers-reduced-motion` reduz os efeitos de movimento para usuários que solicitaram essa preferência

### `script.js`

O JavaScript controla o estado da lâmpada:

```javascript
let lightIsOn = false;
```

A variável `lightIsOn` guarda se a lâmpada está acesa ou apagada.

Dentro da função `toggleLight()`:

1. O estado é invertido com `lightIsOn = !lightIsOn`.
2. A classe `light-on` é adicionada ou removida do `<body>`.
3. O atributo `aria-pressed` informa o estado atual para tecnologias assistivas.
4. O texto do botão e do status são atualizados.

Por fim:

```javascript
powerButton.addEventListener("click", toggleLight);
```

Faz com que a função seja executada sempre que o botão for clicado.

## ♿ Acessibilidade

A página utiliza recursos importantes de acessibilidade:

- `aria-live="polite"` anuncia mudanças no status
- `aria-pressed` informa se o botão está ativado
- `aria-hidden="true"` evita a leitura de elementos decorativos
- `:focus-visible` mostra uma borda ao navegar pelo teclado
- A animação pode ser desativada conforme a preferência do sistema

## 🚀 Como executar

1. Abra a pasta `ia`.
2. Abra o arquivo `index.html`.
3. Clique no botão **Acender lâmpada**.
4. Clique novamente em **Apagar lâmpada** para desligá-la.

Também é possível executar o projeto com a extensão **Live Server** no Visual Studio Code.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## 👨‍💻 Autor

### Murilo Santos

Projeto desenvolvido para estudo e prática de desenvolvimento web.

---

<p align="center">
  <strong>Feito com HTML, CSS e JavaScript 💛</strong>
</p>

Atividade de javascript na aula da Faculdade Senac colocando em prática os conhecimentos de javascript e postando no ar para outras pessoas estarem vendo.