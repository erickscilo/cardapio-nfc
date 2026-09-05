// =========================================================
// Cardápio Biza Pizzas — dados do cardápio + interações
// =========================================================

const MENU = [
  // ---------- Pizzas salgadas ----------
  { id: "ps01", cat: "pizzas-salgadas", name: "A Moda do Pizzaiolo", desc: "Milho, ervilha, pimentão e calabresa." },
  { id: "ps02", cat: "pizzas-salgadas", name: "Atum", desc: "Atum e cebola." },
  { id: "ps03", cat: "pizzas-salgadas", name: "Bacon", desc: "Bacon." },
  { id: "ps04", cat: "pizzas-salgadas", name: "Bolonhesa", desc: "Carne moída ao molho bolonhesa, creme de leite e mussarela." },
  { id: "ps05", cat: "pizzas-salgadas", name: "Brócolis", desc: "Brócolis e requeijão." },
  { id: "ps06", cat: "pizzas-salgadas", name: "Caipira", desc: "Frango desfiado, bacon e milho." },
  { id: "ps07", cat: "pizzas-salgadas", name: "Calabresa", desc: "Calabresa e cebola." },
  { id: "ps08", cat: "pizzas-salgadas", name: "Catuperu", desc: "Peito de peru defumado e catupiry." },
  { id: "ps09", cat: "pizzas-salgadas", name: "Cinco Queijos", desc: "Mussarela, parmesão, requeijão, provolone e cheddar." },
  { id: "ps10", cat: "pizzas-salgadas", name: "Da Casa", desc: "Calabresa, pimentão picado, tomate e cebola." },
  { id: "ps11", cat: "pizzas-salgadas", name: "Estação", desc: "Lombo defumado, creme de leite, tomate e abacaxi." },
  { id: "ps12", cat: "pizzas-salgadas", name: "Francesa", desc: "Calabresa, ovo, bacon e cebola." },
  { id: "ps13", cat: "pizzas-salgadas", name: "Frango com Catupiry", desc: "Frango desfiado coberto com catupiry." },
  { id: "ps14", cat: "pizzas-salgadas", name: "Frango Supremo", desc: "Frango desfiado, tomate, creme de leite e milho verde." },
  { id: "ps15", cat: "pizzas-salgadas", name: "Humita", desc: "Parmesão e milho verde." },
  { id: "ps16", cat: "pizzas-salgadas", name: "Lombinho Supremo", desc: "Lombo defumado, parmesão, creme de leite, milho e tomate." },
  { id: "ps17", cat: "pizzas-salgadas", name: "Madre", desc: "Palmito, bacon e parmesão." },
  { id: "ps18", cat: "pizzas-salgadas", name: "Maracatu", desc: "Linguiça calabresa coberta com requeijão." },
  { id: "ps19", cat: "pizzas-salgadas", name: "Mista", desc: "Presunto, frango, palmito e ervilha." },
  { id: "ps20", cat: "pizzas-salgadas", name: "Mussarela", desc: "Mussarela e tomate." },
  { id: "ps21", cat: "pizzas-salgadas", name: "Napolitana", desc: "Presunto, tomate e mussarela." },
  { id: "ps22", cat: "pizzas-salgadas", name: "Pasqualina", desc: "Bacon, parmesão e requeijão." },
  { id: "ps23", cat: "pizzas-salgadas", name: "Portuguesa", desc: "Presunto, ovo e cebola." },
  { id: "ps24", cat: "pizzas-salgadas", name: "Quatro Queijos", desc: "Mussarela, parmesão, requeijão e provolone." },
  { id: "ps25", cat: "pizzas-salgadas", name: "Romana", desc: "Presunto picado, bacon e requeijão." },
  { id: "ps26", cat: "pizzas-salgadas", name: "Romanesca", desc: "Presunto, ervilha, requeijão e ovo." },
  { id: "ps27", cat: "pizzas-salgadas", name: "Vegetariana", desc: "Palmito, brócolis, tomate, champignon, parmesão e tomate seco.", tags: ["vegetariano"] },
  { id: "ps28", cat: "pizzas-salgadas", name: "Toscana", desc: "Palmito, bacon e champignon." },

  // ---------- Sabores especiais ----------
  { id: "se29", cat: "especiais", name: "Camarão", desc: "Camarão ao molho, coberto com catupiry.", tags: ["+ $1/fatia"] },
  { id: "se30", cat: "especiais", name: "Carioca", desc: "Filé mignon, tomate, cebola e alho." },
  { id: "se31", cat: "especiais", name: "Filé com Cheddar", desc: "Filé mignon coberto com cheddar." },
  { id: "se32", cat: "especiais", name: "Filé Quatro Queijos", desc: "Filé mignon, parmesão, provolone, requeijão e mussarela." },
  { id: "se33", cat: "especiais", name: "Mignon", desc: "Filé mignon e parmesão." },
  { id: "se34", cat: "especiais", name: "Strogonoff de Carne", desc: "Strogonoff de filé mignon, champignon e batata palha." },

  // ---------- Pizzas doces ----------
  { id: "pd35", cat: "pizzas-doces", name: "Abacaxi com Chocolate Branco", desc: "Abacaxi, mussarela, creme de leite e chocolate branco." },
  { id: "pd36", cat: "pizzas-doces", name: "Abacaxi Caramelizado com Canela", desc: "Abacaxi, mussarela, creme de leite, caramelo e canela." },
  { id: "pd37", cat: "pizzas-doces", name: "Banana com Chocolate Preto", desc: "Banana, mussarela, creme de leite e chocolate preto." },
  { id: "pd38", cat: "pizzas-doces", name: "Banana com Chocolate Branco", desc: "Banana, mussarela, creme de leite e chocolate branco." },
  { id: "pd39", cat: "pizzas-doces", name: "Banana Caramelizada com Canela", desc: "Banana, mussarela, creme de leite, caramelo e canela." },
  { id: "pd40", cat: "pizzas-doces", name: "Beijinho", desc: "Mussarela, creme de leite, coco, chocolate branco e leite condensado." },
  { id: "pd41", cat: "pizzas-doces", name: "Chocolate Branco", desc: "Mussarela, creme de leite e chocolate branco." },
  { id: "pd42", cat: "pizzas-doces", name: "Chocolate Preto", desc: "Mussarela, creme de leite e chocolate ao leite." },
  { id: "pd43", cat: "pizzas-doces", name: "Confete", desc: "Mussarela, creme de leite, chocolate ao leite e confetes." },
  { id: "pd44", cat: "pizzas-doces", name: "Kinder Chocolate Preto ou Branco", desc: "Coberto com leite ninho." },
  { id: "pd45", cat: "pizzas-doces", name: "Krot", desc: "Mussarela, chocolate ao leite coberto com amendoim." },
  { id: "pd46", cat: "pizzas-doces", name: "Mesclada", desc: "Mussarela, creme de leite, chocolate branco e chocolate ao leite." },
  { id: "pd47", cat: "pizzas-doces", name: "Prestígio", desc: "Mussarela, creme de leite, coco e chocolate ao leite." },
  { id: "pd48", cat: "pizzas-doces", name: "Sedução", desc: "Mussarela, creme de leite, chocolate branco, morango e leite condensado." },
  { id: "pd49", cat: "pizzas-doces", name: "Sensação", desc: "Mussarela, creme de leite, chocolate ao leite e morango." },

  // ---------- Esfihas salgadas ----------
  { id: "es01", cat: "esfihas-salgadas", name: "Calabresa com Queijo", desc: "Sausage with mozzarella.", price: 3.50 },
  { id: "es02", cat: "esfihas-salgadas", name: "Carne, Tomate e Cebola", desc: "Meat, tomato and onion.", price: 3.50 },
  { id: "es03", cat: "esfihas-salgadas", name: "Frango com Catupiry", desc: "Chicken with Brazilian cheese.", price: 3.50 },
  { id: "es04", cat: "esfihas-salgadas", name: "Bacon com Queijo", desc: "Bacon with cheese.", price: 3.50 },
  { id: "es05", cat: "esfihas-salgadas", name: "Brócolis com Catupiry", desc: "Broccoli with Brazilian cheese.", price: 3.50, tags: ["vegetariano"] },
  { id: "es06", cat: "esfihas-salgadas", name: "Atum, Cebola e Milho", desc: "Tuna, onions and corn.", price: 3.50 },
  { id: "es07", cat: "esfihas-salgadas", name: "Brócolis, Bacon e Catupiry", desc: "Broccoli, bacon and Brazilian cheese.", price: 3.50 },
  { id: "es08", cat: "esfihas-salgadas", name: "Calabresa, Queijo e Catupiry", desc: "Sausage, cheese and Brazilian cheese.", price: 3.50 },
  { id: "es09", cat: "esfihas-salgadas", name: "Quatro Queijos", desc: "Four cheese.", price: 3.50, tags: ["vegetariano"] },
  { id: "es10", cat: "esfihas-salgadas", name: "Presunto, Ovo, Cebola e Queijo", desc: "Ham, egg, onions and cheese.", price: 3.50 },
  { id: "es11", cat: "esfihas-salgadas", name: "Palmito, Bacon e Parmesão", desc: "Palm hearts, bacon and parmesan.", price: 3.50 },
  { id: "es12", cat: "esfihas-salgadas", name: "Camarão, Queijo e Catupiry", desc: "Shrimp, cheese and Brazilian cheese.", price: 4.00 },
  { id: "es13", cat: "esfihas-salgadas", name: "Espinafre com Queijo", desc: "Spinach with cheese.", price: 4.00, tags: ["vegetariano"] },

  // ---------- Esfihas doces ----------
  { id: "ed14", cat: "esfihas-doces", name: "Abacaxi com Chocolate Branco", desc: "Pineapple, heavy cream and white chocolate.", price: 4.00 },
  { id: "ed15", cat: "esfihas-doces", name: "Abacaxi Caramelizado com Canela", desc: "Pineapple, heavy cream, caramel and cinnamon.", price: 4.00 },
  { id: "ed16", cat: "esfihas-doces", name: "Banana com Chocolate Preto", desc: "Bananas, heavy cream and milk chocolate.", price: 4.00 },
  { id: "ed17", cat: "esfihas-doces", name: "Banana com Chocolate Branco", desc: "Bananas, heavy cream and white chocolate.", price: 4.00 },
  { id: "ed18", cat: "esfihas-doces", name: "Banana Caramelizada com Canela", desc: "Bananas, heavy cream, caramel and cinnamon.", price: 4.00 },
  { id: "ed19", cat: "esfihas-doces", name: "Beijinho", desc: "Heavy cream, coconut, white chocolate and condensed milk.", price: 4.00 },
  { id: "ed20", cat: "esfihas-doces", name: "Chocolate Branco", desc: "Heavy cream and white chocolate.", price: 4.00 },
  { id: "ed21", cat: "esfihas-doces", name: "Chocolate Preto", desc: "Heavy cream and dark chocolate.", price: 4.00 },
  { id: "ed22", cat: "esfihas-doces", name: "Confete", desc: "Heavy cream, milk chocolate and M&M's.", price: 4.00 },
  { id: "ed23", cat: "esfihas-doces", name: "Kinder Chocolate Preto ou Branco", desc: "Coberto com leite ninho (Brazilian powdered candy).", price: 4.00 },
  { id: "ed24", cat: "esfihas-doces", name: "Krot", desc: "Milk chocolate covered in peanuts.", price: 4.00 },
  { id: "ed25", cat: "esfihas-doces", name: "Mesclada", desc: "Heavy cream, milk chocolate and white chocolate.", price: 4.00 },
  { id: "ed26", cat: "esfihas-doces", name: "Prestígio", desc: "Heavy cream, coconut and milk chocolate.", price: 4.00 },
  { id: "ed27", cat: "esfihas-doces", name: "Sedução", desc: "Heavy cream, white chocolate, strawberries and condensed milk.", price: 4.00 },
  { id: "ed28", cat: "esfihas-doces", name: "Sensação", desc: "Heavy cream, milk chocolate and strawberries.", price: 4.00 },
  { id: "ed29", cat: "esfihas-doces", name: "Tentação", desc: "White chocolate, milk chocolate, strawberry and condensed milk.", price: 4.00 },
  { id: "ed30", cat: "esfihas-doces", name: "Romeu e Julieta", desc: "Cheese with guava.", price: 4.00, tags: ["vegetariano"] },
];

const CATEGORIES = [
  { key: "pizzas-salgadas", label: "🍕 Pizzas Salgadas" },
  { key: "especiais", label: "⭐ Sabores Especiais" },
  { key: "pizzas-doces", label: "🍫 Pizzas Doces" },
  { key: "esfihas-salgadas", label: "🥟 Esfihas Salgadas" },
  { key: "esfihas-doces", label: "🍩 Esfihas Doces" },
];

const grid = document.getElementById("menu-grid");
const tabsWrap = document.getElementById("category-tabs");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");

let activeCategory = "pizzas-salgadas";
let searchTerm = "";

function renderTabs() {
  tabsWrap.innerHTML = CATEGORIES.map(c =>
    `<button class="tab-btn${c.key === activeCategory ? " active" : ""}" data-cat="${c.key}">${c.label}</button>`
  ).join("");
}

function currency(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

function renderGrid() {
  const filtered = MENU.filter(item => {
    const matchesCat = item.cat === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
                           item.desc.toLowerCase().includes(searchTerm);
    return matchesCat && matchesSearch;
  });

  grid.innerHTML = filtered.map(item => `
    <article class="item-card reveal in-view">
      <div class="item-top">
        <div>
          <h3 class="item-name">${item.name}</h3>
          <p class="item-desc">${item.desc}</p>
        </div>
      </div>
      <div class="item-bottom">
        ${item.price != null ? `<span class="item-price">$ ${currency(item.price)} <small>+Tax</small></span>` : `<span></span>`}
        <div class="item-tags">
          ${(item.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  noResults.classList.toggle("show", filtered.length === 0);
}

tabsWrap.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  renderTabs();
  renderGrid();
  document.getElementById("pizzas").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderGrid();
});

document.querySelectorAll("[data-cat-link]").forEach(link => {
  link.addEventListener("click", () => {
    activeCategory = link.dataset.catLink;
    renderTabs();
    renderGrid();
  });
});

renderTabs();
renderGrid();

// ---------- Tema claro/escuro ----------
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const STORAGE_KEY = "cardapio-nfc-theme";

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
}

(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
})();

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ---------- Menu mobile ----------
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") mainNav.classList.remove("open");
});

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// ---------- Botão voltar ao topo ----------
const fabTop = document.getElementById("fab-top");

window.addEventListener("scroll", () => {
  fabTop.classList.toggle("show", window.scrollY > 500);
});

fabTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
