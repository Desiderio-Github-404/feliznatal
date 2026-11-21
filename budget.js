(() => {
  "use strict";
  const storageKey = "feliznatal_orcamento_v1";
  const limitInput = document.getElementById("budget-limit");
  const fields = Array.from(document.querySelectorAll("[data-budget-category]"));
  if (!limitInput || !fields.length) return;
  const presets = {
    economico: [40, 15, 10, 5, 10, 20],
    equilibrado: [35, 20, 15, 10, 10, 10],
    especial: [35, 25, 15, 15, 5, 5]
  };
  const money = value => new Intl.NumberFormat("pt-AO", {maximumFractionDigits:0}).format(value) + " Kz";
  const number = input => Math.max(0, Number(input.value) || 0);
  const byId = id => document.getElementById(id);
  let activeScenario = "equilibrado";
  function values() { return fields.map(number); }
  function update() {
    const limit = Math.max(0, Number(limitInput.value) || 0);
    const total = values().reduce((sum, value) => sum + value, 0);
    const balance = limit - total;
    byId("budget-limit-display").textContent = money(limit);
    byId("budget-spent").textContent = money(total);
    byId("budget-balance").textContent = (balance < 0 ? "−" : "") + money(Math.abs(balance));
    byId("budget-balance-label").textContent = balance < 0 ? "Valor acima do limite" : "Saldo restante";
    byId("budget-balance").style.color = balance < 0 ? "#a52d35" : "#1c563b";
    byId("budget-progress-fill").style.width = (limit ? Math.min(100, total / limit * 100) : 0) + "%";
    byId("budget-status").textContent = !limit ? "Define o teu orçamento para começar." : balance < 0 ? "Atenção: reduz as despesas para ficares dentro do orçamento." : balance === 0 ? "Orçamento distribuído por completo." : "Ainda tens " + money(balance) + " disponíveis.";
  }
  function applyScenario(name) {
    activeScenario = name;
    const limit = Math.max(0, Number(limitInput.value) || 0);
    presets[name].forEach((percent, index) => { fields[index].value = limit ? Math.round(limit * percent / 100 / 500) * 500 : ""; });
    document.querySelectorAll("[data-scenario]").forEach(button => button.classList.toggle("selected", button.dataset.scenario === name));
    update();
  }
  function save() {
    const data = {limit: limitInput.value, categories: fields.map(field => field.value), scenario: activeScenario};
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
      byId("budget-save-note").textContent = "Orçamento guardado neste dispositivo. Podes voltar a esta página para o consultar.";
    } catch (_) {
      byId("budget-save-note").textContent = "Não foi possível guardar neste dispositivo. Podes exportar o resumo.";
    }
  }
  function exportSummary() {
    const labels = ["Ceia e alimentação","Presentes","Bebidas e sobremesas","Decoração","Actividades e transporte","Reserva para imprevistos"];
    const rows = [["Orçamento disponível",limitInput.value + " Kz"], ...fields.map((field,index)=>[labels[index],field.value + " Kz"]),["Total planeado",values().reduce((a,b)=>a+b,0)+" Kz"]];
    const csv = "\uFEFF" + rows.map(row=>row.map(cell=>'"'+String(cell).replace(/"/g,'""')+'"').join(";")).join("\n");
    const blob = new Blob([csv], {type:"text/csv;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "orcamento-de-natal.csv";
    document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  }
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (saved) {
      limitInput.value = saved.limit || "";
      fields.forEach((field,index)=>field.value = saved.categories && saved.categories[index] || "");
      activeScenario = presets[saved.scenario] ? saved.scenario : "equilibrado";
      document.querySelectorAll("[data-scenario]").forEach(button=>button.classList.toggle("selected",button.dataset.scenario===activeScenario));
    }
  } catch (_) { /* armazenamento indisponível ou dados inválidos */ }
  limitInput.addEventListener("input", update);
  fields.forEach(field=>field.addEventListener("input",update));
  document.querySelectorAll("[data-scenario]").forEach(button=>button.addEventListener("click",()=>applyScenario(button.dataset.scenario)));
  byId("budget-save").addEventListener("click",save);
  byId("budget-export").addEventListener("click",exportSummary);
  byId("budget-reset").addEventListener("click",()=>{
    limitInput.value = ""; fields.forEach(field=>field.value="");
    try { localStorage.removeItem(storageKey); } catch (_) {}
    byId("budget-save-note").textContent = "Valores limpos. O orçamento guardado foi removido deste dispositivo.";
    update();
  });
  update();
})();