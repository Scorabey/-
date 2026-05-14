---
subject: English
level: A1
status: Планую
started: 2026-05-05
last_reviewed: 2026-05-05
next_review: 2026-05-05
total_hours: 0
progress: 0
rating: 0
koki_streak: 0
koki_words_learned: 0
bc_lessons_done: 0
media_episodes_watched: 0
tags:
- English-Learn
- learning
- english

---


## 📋 Загальна інформація

|Поле|Значення|
|---|---|
|🌍 Мова|English|
|🎓 Рівень|A1|
|🎯 Статус|Планую|
|📅 Початок|2026-05-05|
|🔁 Наступне повторення|2026-05-05|
|⏱️ Годин витрачено|0|

---

## 🗺️ Roadmap навчання

### Фаза 1: 🃏 Koki Flashcards — Словниковий запас

- [x] Вивчити базові 100 слів (A1)
- [ ] Пройти перший тематичний набір
- [x] Досягти streak 7 днів поспіль
- [x] Вивчити 200 слів загалом
- [ ] Досягти streak 30 днів

### Фаза 2: 📖 British Council — Граматика та правила

- [x] Пройти перший урок поточного рівня
- [ ] Закрити розділ "Tenses"
- [ ] Закрити розділ "Conditionals"
- [x] Пройти 10 уроків на поточному рівні
- [ ] Скласти фінальний тест рівня

### Фаза 3: 🎬 Медіа — Фільми / Аніме / Серіали

- [x] Переглянути перший епізод обраного серіалу
- [x] Виписати 10 нових фраз з переглянутого
- [x] Переглянути 5 епізодів без зупинок
- [ ] Вивчити напам'ять 3 улюблені цитати
- [ ] Переглянути перший повноцінний фільм

---

## 🃏 Фаза 1 — Koki Flashcards

### Поточні набори карток

|Набір|Слів|Вивчено|Статус|
|---|---|---|---|
|(назва набору)|0|0|Планую|

### 📦 Нові слова цього тижня

| Слово | Транскрипція | Переклад | Приклад речення |
| ----- | ------------ | -------- | --------------- |
|       |              |          |                 |
|       |              |          |                 |
|       |              |          |                 |

### 💪 Streak та статистика

- **Поточний streak:** 0 днів
- **Максимальний streak:** 0 днів
- **Всього вивчено слів:** 0
- **Слів повторено сьогодні:** 0

---

## 📖 Фаза 2 — British Council

### Пройдені уроки

|Дата|Тема уроку|Рівень|Оцінка|Нотатки|
|---|---|---|---|---|
||||||

### 📝 Граматичні правила

#### Title

```
Правило:
Приклади:
```

> [!tip] Додавай нові правила за цим шаблоном нижче

---

## 🎬 Фаза 3 — Медіа

### Що дивлюсь зараз

|Назва|Тип|Мова|Субтитри|Серія|Статус|
|---|---|---|---|---|---|
|||||||

### 🗣️ Книга цитат та фраз

> Виписуй фрази, які тебе вразили, здивували або просто сподобались

| Фраза | З чого | Переклад / Контекст |
| ----- | ------ | ------------------- |
|       |        |                     |
|       |        |                     |
|       |        |                     |

### 📺 Журнал перегляду

| Дата | Назва | Епізод | Нові слова | Нові фрази | Час (хв) |
| ---- | ----- | ------ | ---------- | ---------- | -------- |
|      |       |        |            |            |          |

---

## 📚 Ресурси

### Додатки

- [Koki Flashcard](https://koki.app) — основний інструмент повторення слів

### Сайти

- [British Council LearnEnglish](https://learnenglish.britishcouncil.org) — граматика та уроки
- [YouGlish](https://youglish.com) — вимова у реальному контексті
- [Linguee](https://www.linguee.com) — переклад із прикладами

### Серіали / Фільми для вивчення
- Castelvania

---

## 📝 Щоденник навчання

### 2026-05-05 — Початок

#### **Koki — що повторював(ла):**

#### **British Council — що вивчав(ла):**

#### **Медіа — що дивився(лась):**

#### **Нові слова/фрази:**

#### **Час (год):**

---

## 💡 Поради та інсайти

> [!tip] Підказка Записуй сюди власні відкриття — що допомогло запам'ятати слово, яке правило нарешті стало зрозумілим

---

## 📊 Статистика прогресу

```dataviewjs
// ============================================
// БЛОК 1: Загальна статистика
// ============================================
const page = dv.current();
const level = page.level || "—";
const status = page.status || "—";
const totalHours = page.total_hours || 0;
const progress = page.progress || 0;
const rating = page.rating || 0;
const started = page.started || "—";
const kokiStreak = page.koki_streak || 0;
const kokiWords = page.koki_words_learned || 0;
const bcLessons = page.bc_lessons_done || 0;
const mediaEps = page.media_episodes_watched || 0;

const statusColors = {
  "Планую": "#888",
  "В процесі": "#4a9eff",
  "Завершено": "#4caf50",
  "Призупинено": "#ff9800"
};
const statusColor = statusColors[status] || "#888";
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
      <div style="font-size: 1.3em; font-weight: 700; margin-bottom: 4px;">🌍 English — ${level}</div>
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
        background: linear-gradient(90deg, #f59e0b, #ef4444);
        border-radius: 8px;
        transition: width 0.3s;
      "></div>
    </div>
  </div>

  <div style="display: flex; gap: 16px; margin-top: 16px; flex-wrap: wrap;">
    <div style="text-align: center; flex: 1; min-width: 70px;">
      <div style="font-size: 1.5em; font-weight: 700; color: #f59e0b;">🔥 ${kokiStreak}</div>
      <div style="font-size: 0.75em; color: var(--text-muted);">Koki Streak (днів)</div>
    </div>
    <div style="text-align: center; flex: 1; min-width: 70px;">
      <div style="font-size: 1.5em; font-weight: 700; color: #4a9eff;">📚 ${kokiWords}</div>
      <div style="font-size: 0.75em; color: var(--text-muted);">Слів вивчено</div>
    </div>
    <div style="text-align: center; flex: 1; min-width: 70px;">
      <div style="font-size: 1.5em; font-weight: 700; color: #a855f7;">📖 ${bcLessons}</div>
      <div style="font-size: 0.75em; color: var(--text-muted);">Уроків BC</div>
    </div>
    <div style="text-align: center; flex: 1; min-width: 70px;">
      <div style="font-size: 1.5em; font-weight: 700; color: #ef4444;">🎬 ${mediaEps}</div>
      <div style="font-size: 0.75em; color: var(--text-muted);">Епізодів</div>
    </div>
    <div style="text-align: center; flex: 1; min-width: 70px;">
      <div style="font-size: 1.5em; font-weight: 700; color: #4caf50;">⏱️ ${totalHours}h</div>
      <div style="font-size: 0.75em; color: var(--text-muted);">Годин всього</div>
    </div>
  </div>
</div>
`);

// ============================================
// БЛОК 2: Прогрес по 3 фазах
// ============================================
const content = await dv.io.load(page.file.path);
const phases = [
  { name: "Фаза 1: 🃏 Koki Flashcards", emoji: "🃏", color: "#f59e0b" },
  { name: "Фаза 2: 📖 British Council", emoji: "📖", color: "#4a9eff" },
  { name: "Фаза 3: 🎬 Медіа", emoji: "🎬", color: "#ef4444" }
];

let phaseHTML = `<div style="margin-bottom: 16px;">
  <div style="font-weight: 600; margin-bottom: 12px; font-size: 0.95em;">Прогрес по фазах</div>
  <div style="display: flex; flex-direction: column; gap: 10px;">`;

for (const phase of phases) {
  const regex = new RegExp(`### ${phase.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?(?=###|---|$)`);
  const match = content.match(regex);
  if (!match) continue;

  const section = match[0];
  const total = (section.match(/- \[[ x]\]/g) || []).length;
  const done = (section.match(/- \[x\]/gi) || []).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  phaseHTML += `
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.82em; margin-bottom: 4px;">
        <span>${phase.name}</span>
        <span style="color: var(--text-muted);">${done}/${total} завдань (${pct}%)</span>
      </div>
      <div style="background: var(--background-modifier-border); border-radius: 6px; height: 8px; overflow: hidden;">
        <div style="width: ${pct}%; height: 100%; background: ${phase.color}; border-radius: 6px;"></div>
      </div>
    </div>`;
}

phaseHTML += `</div></div>`;
dv.paragraph(phaseHTML);
```

---

## 🔗 Пов'язані нотатки

```dataviewjs
const current = dv.current();
const related = dv.pages('#English-Learn')
  .where(p => p.file.path !== current.file.path)
  .sort(p => p.last_reviewed, 'desc')
  .limit(5);

if (related.length > 0) {
  dv.list(related.map(p => `[[${p.file.name}]] — ${p.status || "без статусу"}`));
} else {
  dv.paragraph("*Поки немає пов'язаних нотаток*");
}
```

---

_Шаблон створено: 2026-05-05 | Оновлено: 2026-05-05_