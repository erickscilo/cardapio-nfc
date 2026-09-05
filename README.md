# Cardápio NFC 🍽️

Landing page de um cardápio digital acessado via NFC, feita para explorar o que dá
para construir com o **GitHub Pages** (site 100% estático, sem backend).

## Publicado em

https://erickscilo.github.io/cardapio-nfc/

O site é publicado automaticamente pelo GitHub Pages a partir da branch `main`.
Todo `git push` atualiza o site sozinho, sem passo manual.

## Estrutura

```
index.html   → conteúdo e estrutura da página
style.css    → estilos, tema claro/escuro, animações
script.js    → dados do cardápio + interações (busca, filtro, tema, etc.)
```

## Funcionalidades

- Cardápio com busca por nome/descrição e filtro por categoria
- Tema claro/escuro com persistência (`localStorage`) e detecção do tema do sistema
- Animações de entrada ao rolar a página (`IntersectionObserver`)
- Menu responsivo (mobile-first) com navegação mobile
- Botão flutuante de WhatsApp e "voltar ao topo"
- Seção explicando o fluxo de leitura via NFC

## Editando o cardápio

Os pratos ficam no array `MENU` em `script.js` — basta editar nome, descrição,
preço, categoria (`entradas`, `principais`, `bebidas`, `sobremesas`) e tags.

## Rodando localmente

Basta abrir `index.html` no navegador — não há build nem dependências.
Para simular um servidor local (recomendado para o fetch de fontes):

```
npx serve .
```
