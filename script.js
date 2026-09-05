// =========================================================
// Cardápio NFC — dados do cardápio + interações
// =========================================================

const MENU = [
  { id: 1, cat: "entradas", emoji: "🧄", name: "Pão de alho na brasa", desc: "Com queijo derretido e ervas frescas", price: 18, tags: ["vegetariano"] },
  { id: 2, cat: "entradas", emoji: "🐟", name: "Bolinho de bacalhau", desc: "6 unidades, molho tártaro da casa", price: 28, tags: [] },
  { id: 3, cat: "entradas", emoji: "🧀", name: "Tábua de queijos", desc: "Seleção de queijos e geleias artesanais", price: 42, tags: ["vegetariano"] },
  { id: 4, cat: "principais", emoji: "🍤", name: "Risoto de camarão", desc: "Arroz arbóreo, camarões e limão siciliano", price: 62, tags: [] },
  { id: 5, cat: "principais", emoji: "🥩", name: "Filé ao molho madeira", desc: "Acompanha purê e legumes salteados", price: 58, tags: [] },
  { id: 6, cat: "principais", emoji: "🍝", name: "Talharim ao pesto", desc: "Manjericão fresco, castanhas e parmesão", price: 46, tags: ["vegetariano"] },
  { id: 7, cat: "principais", emoji: "🌶️", name: "Frango à passarinho", desc: "Porção crocante com pimenta biquinho", price: 49, tags: ["picante"] },
  { id: 8, cat: "bebidas", emoji: "🍹", name: "Suco natural", desc: "Laranja, limão ou maracujá", price: 12, tags: ["vegano"] },
  { id: 9, cat: "bebidas", emoji: "🥤", name: "Água com gás", desc: "500ml, bem gelada", price: 7, tags: ["vegano"] },
  { id: 10, cat: "bebidas", emoji: "🍷", name: "Taça de vinho tinto", desc: "Seleção da casa, 150ml", price: 24, tags: [] },
  { id: 11, cat: "sobremesas", emoji: "🍮", name: "Pudim de leite", desc: "Receita tradicional da vovó", price: 16, tags: ["vegetariano"] },
  { id: 12, cat: "sobremesas", emoji: "🍫", name: "Petit gâteau", desc: "Com sorvete de creme e calda quente", price: 22, tags: ["vegetariano"] },
];

const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "entradas", label: "Entradas" },
  { key: "principais", label: "Principais" },
  { key: "bebidas", label: "Bebidas" },
  { key: "sobremesas", label: "Sobremesas" },
];

const grid = document.getElementById("menu-grid");
const tabsWrap = document.getElementById("category-tabs");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");

let activeCategory = "todos";
let searchTerm = "";

function renderTabs() {
  tabsWrap.innerHTML = CATEGORIES.map(c =>
    `<button class="tab-btn${c.key === activeCategory ? " active" : ""}" data-cat="${c.key}">${c.label}</button>`
  ).join("");
}

function currency(n) {
  return n.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

function renderGrid() {
  const filtered = MENU.filter(item => {
    const matchesCat = activeCategory === "todos" || item.cat === activeCategory;
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
        <div class="item-emoji">${item.emoji}</div>
      </div>
      <div class="item-bottom">
        <span class="item-price">R$ ${currency(item.price)}</span>
        <div class="item-tags">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
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
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderGrid();
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
