(() => {
  "use strict";
  const config = window.NATAL_LINKS || { playlists: [], films: [], bonuses: [] };
  const allowedHosts = ["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be", "www.youtu.be", "drive.google.com", "docs.google.com"];

  function safeUrl(value) {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const parsed = new URL(value.trim());
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;
      return allowedHosts.includes(parsed.hostname.toLowerCase()) ? parsed.href : null;
    } catch (_) { return null; }
  }

  function makeResource(item) {
    const article = document.createElement("article");
    article.className = "resource-card";
    const icon = document.createElement("span");
    icon.className = "resource-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = item.icon || "🎄";
    const copy = document.createElement("div");
    copy.className = "resource-copy";
    const title = document.createElement("h3");
    title.textContent = item.name || item.title || "Conteúdo de Natal";
    const description = document.createElement("p");
    description.textContent = item.description || "";
    const url = safeUrl(item.url);
    const action = document.createElement(url ? "a" : "span");
    action.className = "action-link" + (url ? "" : " disabled");
    action.textContent = url ? (item.id.startsWith("trailer_") ? "Ver trailer ↗" : "Abrir conteúdo ↗") : "Em breve";
    if (url) {
      action.href = url;
      action.target = "_blank";
      action.rel = "noopener noreferrer";
      action.setAttribute("aria-label", (item.name || item.title) + " — abre num novo separador");
    } else {
      action.setAttribute("aria-disabled", "true");
    }
    copy.append(title, description, action);
    article.append(icon, copy);
    return article;
  }

  function renderResources() {
    const playlists = document.getElementById("playlist-list");
    const bonuses = document.getElementById("bonus-list");
    const films = document.getElementById("film-list");
    (config.playlists || []).forEach(item => playlists.append(makeResource(item)));
    (config.bonuses || []).forEach(item => bonuses.append(makeResource(item)));
    (config.films || []).forEach(item => {
      const card = document.createElement("article");
      card.className = "film-card";
      const icon = document.createElement("span");
      icon.className = "film-icon";
      icon.textContent = item.icon || "🎬";
      const category = document.createElement("p");
      category.className = "film-category";
      category.textContent = item.category || "Filme";
      const title = document.createElement("h3");
      title.textContent = item.title || "Filme de Natal";
      const description = document.createElement("p");
      description.textContent = item.description || "";
      const age = document.createElement("p");
      age.className = "age";
      age.textContent = "Idade: " + (item.age || "Consultar classificação");
      card.append(icon, category, title, description, age);
      const url = safeUrl(item.url);
      const trailer = document.createElement(url ? "a" : "span");
      trailer.className = "action-link" + (url ? "" : " disabled");
      trailer.textContent = url ? "Ver trailer ↗" : "Em breve";
      if (url) {
        trailer.href = url;
        trailer.target = "_blank";
        trailer.rel = "noopener noreferrer";
      } else trailer.setAttribute("aria-disabled", "true");
      card.append(trailer);
      films.append(card);
    });
  }

  function setupChecklist() {
    const storageKey = "feliznatal_checklist_v1";
    const boxes = Array.from(document.querySelectorAll("[data-task]"));
    const progressText = document.getElementById("check-progress");
    const progressFill = document.getElementById("progress-fill");
    let saved = {};
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) saved = JSON.parse(raw) || {};
    } catch (_) { saved = {}; }

    function update(save) {
      const done = boxes.filter(box => box.checked).length;
      progressText.textContent = done + " de " + boxes.length + " concluídos";
      progressFill.style.width = (boxes.length ? done / boxes.length * 100 : 0) + "%";
      if (save) {
        const state = {};
        boxes.forEach(box => { state[box.dataset.task] = box.checked; });
        try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) { /* armazenamento indisponível */ }
      }
    }
    boxes.forEach(box => {
      box.checked = saved[box.dataset.task] === true;
      box.addEventListener("change", () => update(true));
    });
    document.getElementById("reset-checklist").addEventListener("click", () => {
      boxes.forEach(box => { box.checked = false; });
      try { localStorage.removeItem(storageKey); } catch (_) { /* armazenamento indisponível */ }
      update(false);
    });
    update(false);
  }

  renderResources();
  setupChecklist();
})();