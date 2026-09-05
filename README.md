# Cardápio Biza Pizzas 🍕

Cardápio digital estático da Biza Pizzas, publicado com **GitHub Pages** (sem backend).
Foco no cardápio: pizzas primeiro (tamanhos, sabores salgados, especiais e doces), depois esfihas.

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
- Categorias na ordem: Pizzas Salgadas, Sabores Especiais, Pizzas Doces, Esfihas Salgadas, Esfihas Doces
- Cards de tamanhos e preços (Broto, Grande, Gigante) em destaque
- Tema claro/escuro com persistência (`localStorage`) e detecção do tema do sistema
- Animações de entrada ao rolar a página (`IntersectionObserver`)
- Menu responsivo (mobile-first) com navegação mobile
- Botões flutuantes de WhatsApp e "voltar ao topo"

## Editando o cardápio

Os sabores ficam no array `MENU` em `script.js` — edite nome, descrição, categoria
(`pizzas-salgadas`, `especiais`, `pizzas-doces`, `esfihas-salgadas`, `esfihas-doces`),
preço (só esfihas têm preço por unidade; pizzas são precificadas por tamanho) e tags.

Os preços dos tamanhos de pizza ficam direto no `index.html`, na seção `#tamanhos`.

## Rodando localmente

Basta abrir `index.html` no navegador — não há build nem dependências.
Para simular um servidor local (recomendado para o fetch de fontes):

```
npx serve .
```
