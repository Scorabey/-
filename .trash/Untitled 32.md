--- 
language: йуйуйу
category: Mobile
difficulty: Intermediate
status: В процесі
started: 2026-05-04
last_reviewed: 2026-05-04
next_review: 2026-05-04
total_hours: 0
progress: 0
rating: 0
tags: 
	- programming 
	- learning 
	- IT-Learning
---

## 📋 Загальна інформація

| Поле               | Значення         |
| ------------------ | ---------------- |
| 🏷️ Мова           | йуйуйу   |
| 📂 Категорія       | Mobile   |
| ⚡ Складність       | Intermediate |
| 🎯 Статус          | В процесі     |
| 📅 Початок         | 2026-05-04    |
| ⏱️ Годин витрачено | 0                |

---

## 🗺️ Roadmap навчання

### Фаза 1: Основи (Beginner)
- [ ]  
### Фаза 2: Середній рівень (Intermediate)
- [ ] 
### Фаза 3: Просунутий рівень (Advanced)
- [ ] 
---

## 📚 Ресурси для навчання

### Документація
- 

### Книги
- 

### Відео курси
- 

### Практика / Завдання
- 

### Корисні сайти
- 

---

## 🧠 Вивчені концепції

### Синтаксис

```йуйуйу
// Приклад базового синтаксису
// Додайте свій код тут
```

#### **Нотатки:**
> 

---

### Типи даних

```йуйуйу
// Приклади типів даних
```

#### **Нотатки:**
> 

---

### Функції

```йуйуйу
// Приклади функцій
```

#### **Нотатки:**
> 

---

### ООП / Структури

```йуйуйу
// Приклади класів/структур
```

**Нотатки:**
> 

---

## 📝 Щоденник навчання

### 2026-05-04 — Початок

### **Що вивчав(ла):**
- 

### **Що вийшло:**
- 

### **Де виникли труднощі:**
- 

### **Час (год):** 

---

## 💡 Корисні поради та трюки

> [!tip] Підказка
> Додайте сюди важливі поради, які ви дізналися

---

## ⚠️ Типові помилки (Gotchas)

> [!warning] Увага
> Записуйте тут типові пастки та помилки новачків

---

## 🎯 Міні-проєкти для практики

- [ ] **Проєкт 1:** 

---

## 📊 Статистика прогресу

```dataviewjs
// ============================================
// БЛОК 1: Загальна статистика поточної нотатки
// ============================================
const page = dv.current();
const lang = page.language || "Невідомо";
const status = page.status || "—";
const difficulty = page.difficulty || "—";
const totalHours = page.total_hours || 0;
const progress = page.progress || 0;
const rating = page.rating || 0;
const started = page.started || "—";

// Кольори для статусів
const statusColors = {
  "Планую": "#888",
  "В процесі": "#4a9eff",
  "Завершено": "#4caf50",
  "Призупинено": "#ff9800"
};
const statusColor = statusColors[status] || "#888";

// Зірки рейтингу
const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

dv.paragraph(`
<div style="
  background: var(--background-secondary);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  border-left: 4px solid ${statusColor};
">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
    <div>
      <div style="font-size: 1.3em; font-weight: 700; margin-bottom: 4px;">${lang}</div>
      <div style="font-size: 0.85em; color: var(--text-muted);">Розпочато: ${started}</div>
    </div>
    <div style="text-align: right;">
      <span style="
        background: ${statusColor}22;
        color: ${statusColor};
        border: 1px solid ${statusColor};
        border-radius: 20px;
        padding: 4px 14px;
        font-size: 0.8em;
        font-weight: 600;
      ">${status}</span>
      <div style="margin-top: 8px; color: #f5a623; font-size: 1.1em;" title="Рейтинг: ${rating}/5">${stars}</div>
    </div>
  </div>

  <div style="margin-top: 16px;">
    <div style="display: flex; justify-content: space-between; font-size: 0.82em; margin-bottom: 6px;">
      <span style="color: var(--text-muted);">Загальний прогрес</span>
      <strong>${progress}%</strong>
    </div>
    <div style="background: var(--background-modifier-border); border-radius: 8px; height: 10px; overflow: hidden;">
      <div style="
        width: ${progress}%;
        height: 100%;
        background: linear-gradient(90deg, #4a9eff, #a855f7);
        border-radius: 8px;
        transition: width 0.3s;
      "></div>
    </div>
  </div>

  <div style="display: flex; gap: 24px; margin-top: 16px; flex-wrap: wrap;">
    <div style="text-align: center;">
      <div style="font-size: 1.6em; font-weight: 700; color: #4a9eff;">${totalHours}h</div>
      <div style="font-size: 0.78em; color: var(--text-muted);">Годин витрачено</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 1.6em; font-weight: 700; color: #a855f7;">${difficulty}</div>
      <div style="font-size: 0.78em; color: var(--text-muted);">Складність</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 1.6em; font-weight: 700; color: #4caf50;">${rating}/5</div>
      <div style="font-size: 0.78em; color: var(--text-muted);">Оцінка</div>
    </div>
  </div>
</div>
`);

// ============================================
// БЛОК 2: Прогрес по фазах (чекбокси з нотатки)
// ============================================
const content = await dv.io.load(page.file.path);
const phases = [
  { name: "Фаза 1: Основи", emoji: "🌱" },
  { name: "Фаза 2: Середній рівень", emoji: "🚀" },
  { name: "Фаза 3: Просунутий рівень", emoji: "⚡" }
];

let phaseHTML = `<div style="margin-bottom: 16px;">
  <div style="font-weight: 600; margin-bottom: 12px; font-size: 0.95em;">Прогрес по фазах</div>
  <div style="display: flex; flex-direction: column; gap: 10px;">`;

for (const phase of phases) {
  // Знаходимо секцію між заголовками фаз
  const regex = new RegExp(`### ${phase.name}[\\s\\S]*?(?=###|---|\`\`\`dataviewjs|$)`);
  const match = content.match(regex);
  if (!match) continue;

  const section = match[0];
  const total = (section.match(/- \[[ x]\]/g) || []).length;
  const done = (section.match(/- \[x\]/gi) || []).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const phaseColors = ["#4caf50", "#4a9eff", "#a855f7"];
  const color = phaseColors[phases.indexOf(phase)];

  phaseHTML += `
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.82em; margin-bottom: 4px;">
        <span>${phase.emoji} ${phase.name}</span>
        <span style="color: var(--text-muted);">${done}/${total} завдань</span>
      </div>
      <div style="background: var(--background-modifier-border); border-radius: 6px; height: 8px; overflow: hidden;">
        <div style="width: ${pct}%; height: 100%; background: ${color}; border-radius: 6px;"></div>
      </div>
    </div>`;
}

phaseHTML += `</div></div>`;
dv.paragraph(phaseHTML);

// ============================================
// БЛОК 3: Всі нотатки з тегом "programming"
// ============================================
const allLangs = dv.pages('#programming AND #learning')
  .sort(p => p.progress || 0, 'desc');

if (allLangs.length > 1) {
  let tableHTML = `
<div style="margin-top: 8px;">
  <div style="font-weight: 600; margin-bottom: 12px; font-size: 0.95em;">📚 Всі мови програмування</div>
  <table style="width: 100%; border-collapse: collapse; font-size: 0.82em;">
    <thead>
      <tr style="border-bottom: 1px solid var(--background-modifier-border);">
        <th style="text-align: left; padding: 6px 8px; color: var(--text-muted); font-weight: 500;">Мова</th>
        <th style="text-align: left; padding: 6px 8px; color: var(--text-muted); font-weight: 500;">Статус</th>
        <th style="text-align: left; padding: 6px 8px; color: var(--text-muted); font-weight: 500;">Прогрес</th>
        <th style="text-align: right; padding: 6px 8px; color: var(--text-muted); font-weight: 500;">Годин</th>
      </tr>
    </thead>
    <tbody>`;

  for (const p of allLangs) {
    const pLang = p.language || p.file.name;
    const pStatus = p.status || "—";
    const pProgress = p.progress || 0;
    const pHours = p.total_hours || 0;
    const isActive = p.file.path === page.file.path;
    const pColor = statusColors[pStatus] || "#888";

    tableHTML += `
      <tr style="
        border-bottom: 1px solid var(--background-modifier-border);
        background: ${isActive ? "var(--background-modifier-hover)" : "transparent"};
      ">
        <td style="padding: 8px 8px; font-weight: ${isActive ? 600 : 400};">
          ${isActive ? "▶ " : ""}${pLang}
        </td>
        <td style="padding: 8px 8px;">
          <span style="
            background: ${pColor}22;
            color: ${pColor};
            border-radius: 12px;
            padding: 2px 10px;
            font-size: 0.78em;
          ">${pStatus}</span>
        </td>
        <td style="padding: 8px 8px; min-width: 100px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="flex: 1; background: var(--background-modifier-border); border-radius: 4px; height: 6px; overflow: hidden;">
              <div style="width: ${pProgress}%; height: 100%; background: #4a9eff; border-radius: 4px;"></div>
            </div>
            <span style="color: var(--text-muted); font-size: 0.8em; min-width: 28px;">${pProgress}%</span>
          </div>
        </td>
        <td style="padding: 8px 8px; text-align: right; color: var(--text-muted);">${pHours}h</td>
      </tr>`;
  }

  tableHTML += `</tbody></table></div>`;
  dv.paragraph(tableHTML);
}
```

---

## 🔗 Пов'язані нотатки

```dataviewjs
// Показуємо нотатки з тими самими тегами
const current = dv.current();
const related = dv.pages('#IT-Learning')
  .where(p => p.file.path !== current.file.path)
  .sort(p => p.last_reviewed, 'desc')
  .limit(5);

if (related.length > 0) {
  dv.list(related.map(p => `[[${p.file.name}]] — ${p.status || "без статусу"}`));
} else {
  dv.paragraph("*Поки немає пов'язаних нотаток. Створіть більше нотаток з тегом #programming*");
}
```

---

*Шаблон створено: 2026-05-04 | Оновлено: 2026-05-04
