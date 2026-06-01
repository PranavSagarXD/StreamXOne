"use strict";

// ================= GLOBAL STATE =================
let currentVideos = videos;

// ================= SAFE ELEMENTS =================
const content = document.getElementById("content");
const search = document.getElementById("search");

const hero = document.querySelector(".hero");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const heroBtn = document.getElementById("heroBtn");
const progress = document.querySelector(".progress");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const header = document.querySelector(".header");
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

// ================= CONFIG =================
const ITEMS_PER_PAGE = 8;

// ================= HEADER SCROLL EFFECT =================
if (header) {
  window.addEventListener("scroll", () => {
    header.style.background =
      window.scrollY > 30
        ? "rgba(0,0,0,0.9)"
        : "rgba(0,0,0,0.6)";
  });
}

// ================= MOBILE MENU =================
if (toggle && nav) {
  toggle.onclick = () => nav.classList.toggle("active");

  nav.querySelectorAll("a").forEach(link => {
    link.onclick = () => nav.classList.remove("active");
  });
}

// ================= HERO SYSTEM (STABLE VERSION) =================
let heroIndex = 0;
let heroInterval;

function initHero() {
  if (!hero || !heroTitle || !heroDesc || !videos?.length) return;

  function updateHero(i) {
    const v = videos[i];
    if (!v) return;

    heroTitle.textContent = v.title;
    heroDesc.textContent = v.description;

    heroBtn.onclick = () => {
      location.href = `video.html?id=${v.id}`;
    };

    hero.style.background = `
      linear-gradient(to right, #000, transparent),
      url(${v.thumbnail}) center/cover
    `;
  }

  function startProgress() {
    if (!progress) return;

    progress.style.transition = "none";
    progress.style.width = "0%";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.transition = "5s linear";
        progress.style.width = "100%";
      });
    });
  }

  function next() {
    heroIndex = (heroIndex + 1) % videos.length;
    updateHero(heroIndex);
    startProgress();
  }

  function prev() {
    heroIndex = (heroIndex - 1 + videos.length) % videos.length;
    updateHero(heroIndex);
    startProgress();
  }

  // clear old interval (VERY IMPORTANT FIX)
  if (heroInterval) clearInterval(heroInterval);

  // bind buttons
  if (nextBtn) nextBtn.onclick = next;
  if (prevBtn) prevBtn.onclick = prev;

  updateHero(heroIndex);
  startProgress();

  heroInterval = setInterval(next, 5000);
}

// run once
document.addEventListener("DOMContentLoaded", initHero);



// ================= IMAGE =================
function createImage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.loading = "lazy";

  img.onerror = () => {
    img.src = "https://placehold.co/400x225?text=No+Image";
  };

  return img;
}

// ================= CARD =================
function createCard(video) {
  const card = document.createElement("div");
  card.className = "card";

  const img = createImage(video.thumbnail);

  const title = document.createElement("p");
  title.textContent = video.title;

  card.appendChild(img);
  card.appendChild(title);

  card.onclick = () => {
    location.href = `video.html?id=${video.id}`;
  };

  return card;
}

// ================= CONTINUE WATCHING =================
function renderContinueWatching() {
  if (!content) return;

  const history = JSON.parse(localStorage.getItem("watch")) || [];
  if (!history.length) return;

  const section = document.createElement("div");
  section.className = "section";

  const title = document.createElement("h2");
  title.textContent = "Continue Watching";

  const row = document.createElement("div");
  row.className = "row";

  history.forEach(id => {
    const v = videos.find(x => x.id === id);
    if (v) row.appendChild(createCard(v));
  });

  section.appendChild(title);
  section.appendChild(row);
  content.appendChild(section);
}

// ================= CATEGORY RENDER (PAGINATION) =================
function renderVideos(list) {
  if (!content) return;

  const grouped = {};

  list.forEach(v => {
    if (!grouped[v.category]) grouped[v.category] = [];
    grouped[v.category].push(v);
  });

  for (let category in grouped) {

    let page = 1;
    const items = grouped[category];

    const section = document.createElement("div");
    section.className = "section";

    const title = document.createElement("h2");
    title.textContent = category;

    const row = document.createElement("div");
    row.className = "row";

    const pagination = document.createElement("div");
    pagination.className = "pagination";

    const prev = document.createElement("button");
    const next = document.createElement("button");
    const info = document.createElement("span");

    prev.textContent = "◀ Prev";
    next.textContent = "Next ▶";
    info.className = "page-info";

    function renderPage() {
      row.innerHTML = "";

      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;

      const pageItems = items.slice(start, end);

      pageItems.forEach(v => row.appendChild(createCard(v)));

      const total = Math.ceil(items.length / ITEMS_PER_PAGE);

      info.textContent = `Page ${page} / ${total}`;

      prev.disabled = page === 1;
      next.disabled = page === total;
    }

    prev.onclick = () => {
      if (page > 1) {
        page--;
        renderPage();
      }
    };

    next.onclick = () => {
      if (page < Math.ceil(items.length / ITEMS_PER_PAGE)) {
        page++;
        renderPage();
      }
    };

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

section.append(title, row);

// only show pagination if more than 1 page
if (totalPages > 1) {
  pagination.append(prev, info, next);
  section.appendChild(pagination);
}

content.appendChild(section);

renderPage();
  }
}

// ================= CENTRAL RENDER SYSTEM =================
function rerender() {
  if (!content) return;

  content.innerHTML = "";

  renderContinueWatching();
  renderVideos(currentVideos);
}

// ================= INITIAL LOAD =================
function init() {
  currentVideos = videos;
  rerender();
}

init();

// ================= SEARCH (FIXED + SAFE) =================
if (search && content) {
  search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    currentVideos = videos.filter(v =>
      v.title.toLowerCase().includes(value)
    );

    rerender();
  });
}