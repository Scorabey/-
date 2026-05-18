---
subject: English
level: A2
status: Завершено
started: 2026-05-18
last_reviewed: 2026-05-18
next_review: 2026-05-18
total_hours: 1
progress: 100
rating: 4
koki_streak: 8
koki_words_learned: 420
bc_lessons_done: 1
media_episodes_watched: 1
tags:
  - English-Learn
  - learning
  - english
---


## 📋 Загальна інформація

| Поле                   | Значення   |
| ---------------------- | ---------- |
| 🌍 Мова                | English    |
| 🎓 Рівень              | A2         |
| 🎯 Статус              | Завершено  |
| 📅 Початок             | 2026-05-18 |
| 🔁 Наступне повторення | 2026-05-18 |
| ⏱️ Годин витрачено     | 0.5        |

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

| Набір                    | Слів | Вивчено | Статус    |
| ------------------------ | ---- | ------- | --------- |
| 1000 Basic English Words | 1000 | 420     | В процесі |

### 📦 Нові слова цього тижня

| Слово | Транскрипція | Переклад | Приклад речення                    |
| ----- | ------------ | -------- | ---------------------------------- |
| bean  | [biːn]       | Боби     | In the bean many protein           |
| basic | ['beɪsɪk]    | Основний | Basic work for developer it create |
| pea   | ['pi]        | горох    |                                    |

### 💪 Streak та статистика

- **Поточний streak:** 8 днів
- **Максимальний streak:** 8 днів
- **Всього вивчено слів:** 420
- **Слів повторено сьогодні:** 36

---

## 📖 Фаза 2 — British Council

### Пройдені уроки

| Дата       | Тема уроку                              | Рівень | Оцінка |
| ---------- | --------------------------------------- | ------ | ------ |
| 18.05.2026 | Prepositions of place: 'in', 'on', 'at' | A1-A2  | 4      |

### 📝 Граматичні правила

#### In

```
Правило: Використовуєм щоб сказати, що якійсь предмет знаходиться в середині чогось великого
Приклади:
	I am in the kitchen
	My grandmother was born in Sweden.
```
#### On

```
Правило: Використовуєм щоб говорити про розташування на поверхні
Приклади:
	The books are on the desk.
	She likes to sit on the floor.
```
#### At

```
Правило: Використовується в багатьох простих фразах, особливо коли говоримо про місце з спецефічною активністю
Приклади:
	I'm at work.
	I met him at a party.
	See you at the train station!

Правило: Також використовуєм для адрес, або точних позицій
Приклади: 
	I live at 15 Craig Street.
	He's waiting at the entrance.
```

> [!tip] Додавай нові правила за цим шаблоном нижче

---

## 🎬 Фаза 3 — Медіа

### Що дивлюсь зараз

| Назва       | Тип   | Мова    | Субтитри | Серія | Статус    |
| ----------- | ----- | ------- | -------- | ----- | --------- |
| Castelvania | Anime | English | English  | 5     | Завершено |

### 📺 Журнал перегляду

| Дата       | Назва       | Епізод | Нові слова | Нові фрази | Час (хв) |
| ---------- | ----------- | ------ | ---------- | ---------- | -------- |
| 18.05.2026 | Castelvania | 5      |            |            | 25       |

---

## 📚 Ресурси

### Додатки

- [Koki Flashcard](https://koki.app) — основний інструмент повторення слів

### Сайти

- [British Council LearnEnglish](https://learnenglish.britishcouncil.org) — граматика та уроки

---

## 📝 Щоденник навчання

### 2026-05-18 — Початок

#### **British Council — що вивчав(ла):**
Prepositions of place: 'in', 'on', 'at'
#### **Медіа — що дивився(лась):**
Castelvania
#### **Час (год):**
1 година

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

_Шаблон створено: 2026-05-18 | Оновлено: 2026-05-18_