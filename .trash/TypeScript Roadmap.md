---
tags:
  - roadmap
  - learning
  - TS
  - IT
created: 2026-05-04
total_days: 30
hours_per_day: 1-2
status: in-progress
current_day: 1
---

# 🗺️ TypeScript Roadmap — с нуля до React

> **Предпосылки:** знаешь JavaScript · **Темп:** 1–2 ч/день · **Срок:** ~30 дней

---

## 📊 Прогресс

```dataviewjs
const days = dv.pages('"TypeScript Days"').sort(d => d.day);
const total = 30;
const done = days.filter(d => d.status === "done").length;
const inprog = days.filter(d => d.status === "in-progress").length;
const pct = Math.round((done / total) * 100);

const bar = (filled, total, char = "█", empty = "░") =>
  char.repeat(filled) + empty.repeat(total - filled);

dv.paragraph(`**Выполнено:** ${done} / ${total} дней (${pct}%)`);
dv.paragraph("`" + bar(Math.round(pct / 5), 20) + "` " + pct + "%");
dv.paragraph(`🟢 Готово: **${done}** · 🟡 В процессе: **${inprog}** · ⬜ Не начато: **${total - done - inprog}**`);
```

---

## 📅 Текущий день

```dataviewjs
const days = dv.pages('"TypeScript Days"').sort(d => d.day);
const current = days.filter(d => d.status === "in-progress").first()
  || days.filter(d => d.status !== "done").first();

if (current) {
  dv.paragraph(`### 📌 Сейчас: День ${current.day} — ${current.topic}`);
  dv.paragraph(`**Фаза:** ${current.phase}`);
  dv.paragraph(`**Задачи:**`);
  if (current.tasks) {
    for (const t of current.tasks) {
      dv.paragraph(`- [ ] ${t}`);
    }
  }
  dv.paragraph(`**Тег:** \`${current.tag}\``);
} else {
  dv.paragraph("🎉 Все дни завершены! Roadmap пройден.");
}
```

---

## 🗓️ Все дни — таблица

```dataviewjs
const days = dv.pages('"TypeScript Days"').sort(d => d.day);

const statusIcon = s =>
  s === "done" ? "✅" :
  s === "in-progress" ? "🟡" : "⬜";

const tagColor = t =>
  t === "TS" ? "🔵" :
  t === "React" ? "🟢" :
  t === "Проект" ? "🟠" : "⚪";

dv.table(
  ["День", "Тема", "Фаза", "Тег", "Статус"],
  days.map(d => [
    `**${d.day}**`,
    `[[${d.file.name}|${d.topic}]]`,
    d.phase,
    tagColor(d.tag) + " " + d.tag,
    statusIcon(d.status)
  ])
);
```

---

## 📚 По фазам

```dataviewjs
const days = dv.pages('"TypeScript Days"').sort(d => d.day);

const phases = [...new Set(days.map(d => d.phase).array())];

for (const phase of phases) {
  const phaseDays = days.filter(d => d.phase === phase);
  const done = phaseDays.filter(d => d.status === "done").length;
  const total = phaseDays.length;
  const pct = Math.round((done / total) * 100);

  dv.paragraph(`#### ${phase} — ${done}/${total} (${pct}%)`);

  dv.table(
    ["День", "Тема", "Теги", "Статус"],
    phaseDays.map(d => [
      d.day,
      `[[${d.file.name}|${d.topic}]]`,
      d.tag,
      d.status === "done" ? "✅" : d.status === "in-progress" ? "🟡" : "⬜"
    ])
  );
}
```

---

## 📋 Шаблон заметки для каждого дня

> Создай папку `TypeScript Days/` и сохраняй заметки по шаблону ниже.
> Пример имени файла: `Day 01 — Зачем TS и установка.md`

```markdown
---
day: 1
topic: "Зачем TS и установка"
phase: "Фаза 1 — Основы TypeScript"
tag: TS
status: not-started
date_started: 
date_done: 
tasks:
  - "Установить TypeScript: npm i -g typescript"
  - "Создать tsconfig.json и разобрать ключевые опции"
  - "Написать первый .ts файл и скомпилировать через tsc"
  - "Понять разницу между .ts и .js"
resources:
  - "https://www.typescriptlang.org/docs/"
notes: ""
---

# День 1 — Зачем TS и установка

## Задачи
- [ ] Установить TypeScript: `npm i -g typescript`
- [ ] Создать tsconfig.json и разобрать ключевые опции
- [ ] Написать первый .ts файл и скомпилировать через tsc
- [ ] Понять разницу между .ts и .js

## Заметки

## Примеры кода

## Вопросы / Непонятное
```

---

## 🗂️ Все 30 дней — frontmatter для создания заметок

Ниже представлены данные для каждого дня. Создай 30 файлов в папке `TypeScript Days/` вручную или через Templater.

### Фаза 1 — Основы TypeScript (Дни 1–7)

| День | Тема                  | Задачи                                                 |
| ---- | --------------------- | ------------------------------------------------------ |
| 1    | Зачем TS и установка  | tsc, tsconfig.json, первый .ts файл                    |
| 2    | Примитивы и аннотации | string, number, boolean, null, undefined, any, unknown |
| 3    | Массивы и кортежи     | Array\<T\>, T[], tuple types, readonly                 |
| 4    | Объекты и интерфейсы  | interface, type alias, optional props (?)              |
| 5    | Функции               | типизация аргументов, void, overloads                  |
| 6    | Union и Intersection  | A \| B, A & B, narrowing, type guards                  |
| 7    | Практика — Todo List  | мини-проект: типизированный todo-list                  |

### Фаза 2 — Средний уровень TS (Дни 8–16)

| День | Тема                            | Задачи                                              |
| ---- | ------------------------------- | --------------------------------------------------- |
| 8    | Generics — основы               | function\<T\>, generic interfaces, constraints      |
| 9    | Generics — продвинутые          | keyof, typeof, conditional types                    |
| 10   | Enum и Literal types            | const enum, string literals, template literal types |
| 11   | Классы в TS                     | public/private/protected, abstract, implements      |
| 12   | Utility Types                   | Partial, Required, Pick, Omit, Record, Readonly     |
| 13   | Mapped & Conditional Types      | mapped types, infer, never, distributive            |
| 14   | Модули и .d.ts                  | import/export, declaration files, @types/*          |
| 15   | Декораторы                      | class/method decorators, experimentalDecorators     |
| 16   | Практика — типизированный fetch | generic API wrapper                                 |

### Фаза 3 — React + TypeScript: основы (Дни 17–22)

| День | Тема | Задачи |
|------|------|--------|
| 17 | Настройка проекта | Vite + React + TS, tsconfig для React, JSX |
| 18 | Типизация компонентов | FC, props interface, children: ReactNode |
| 19 | Хуки: useState, useRef | useState\<T\>, useRef\<HTMLElement\>, typing events |
| 20 | Хуки: useReducer, useContext | typed reducer, typed context |
| 21 | Обработка событий | React.ChangeEvent, FormEvent, MouseEvent |
| 22 | Практика — форма с валидацией | типизированная форма |

### Фаза 4 — React + TypeScript: продвинутый (Дни 23–28)

| День | Тема | Задачи |
|------|------|--------|
| 23 | Кастомные хуки | generic custom hooks, useFetch\<T\> |
| 24 | HOC и Render Props | типизация HOC, render props pattern |
| 25 | React Router + TS | типизированные params, useNavigate, Outlet |
| 26 | State management | Zustand или Redux Toolkit с TS |
| 27 | API слой | React Query / SWR с generic types |
| 28 | Практика — SPA | роутер + стор + fetch в TS |

### Фаза 5 — Финальный проект (Дни 29–30)

| День | Тема | Задачи |
|------|------|--------|
| 29 | Архитектура проекта | feature-sliced, типизированные модели, barrel exports |
| 30 | Code review & рефакторинг | ESLint + typescript-eslint, strict mode |

---

## ⚙️ Настройка Dataview

Убедись что в настройках плагина Dataview включены:
- ✅ **Enable JavaScript Queries** (DataviewJS)
- ✅ **Enable Inline Queries**

Структура папок:
```
vault/
├── TypeScript Roadmap.md     ← этот файл
└── TypeScript Days/
    ├── Day 01 — Зачем TS и установка.md
    ├── Day 02 — Примитивы и аннотации.md
    └── ...
```

Статусы для поля `status` в frontmatter каждого дня:
- `not-started` — не начато
- `in-progress` — в процессе
- `done` — завершено
