---
language: typescript
category: Frontend
difficulty: Intermediate
status: Завершено
started: 2026-05-14
last_reviewed: 2026-05-14
next_review: 2026-05-14
total_hours: 2
progress: 100
rating: 4
tags:
  - IT
  - learning
  - programming
  - IT-Learning
---
## 📋 Загальна інформація

| Поле               | Значення     |
| ------------------ | ------------ |
| 🏷️ Мова           | typescript   |
| 📂 Категорія       | Frontend     |
| ⚡ Складність       | Intermediate |
| 🎯 Статус          | Завершено    |
| 📅 Початок         | 2026-05-14   |
| ⏱️ Годин витрачено | 2            |

---

## 🗺️ Roadmap навчання

### Пройдені теми: 
- [x] Untility types
	- [x] Partial
	- [x] Omit
	- [x] Record 
	- [x] Extract
	- [x] Parameters
	- [x] NonNullable
	- [x] ReturnType
	- [x] InstanceType
- [x] Next Js
	- [x] API Routes
	- [x] Custom Errors
---

## 📚 Ресурси для навчання

### Документація
- [Untility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
- [Custom errors](https://nextjs.org/docs/pages/building-your-application/routing/custom-error)

### Відео курси
- [Next JS Course](https://youtube.com/playlist?list=PL0lO_mIqDDFXAbfgj6lcK8cRu6yFdQgnR&si=BKRfupMIT87-WIEu)

---

## 🧠 Вивчені концепції

### Синтаксис | Typescript

```typescript
// Partial 
interface Todo {
    title: string
    description: string
}
  
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
    return { ...todo, ...fieldsToUpdate }
}

// Omit 
interface Type {
    title: string
    id: number
    description: string
}
  
type User = Omit<Type, "id">
  
const user: User = {
    title: "Title",
    description: "Description"
}

// Record
type CatName = "miffy" | "boris" | "mordred"
  
interface CatInfo {
    age: number
    breed: string
}
  
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 6, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
}

// Extract
type UserFields = "id" | "age" | "name" | "surName"
  
type User = "age" | "name"
  
type NewUser = Extract<UserFields, User>
  
const user: NewUser = "age"

// Parameters
const createUser = (id: number, name: string, age: number): void => {}
  
type UserProp = Parameters<typeof createUser>
  
const newUser: UserProp = [123, "string", 123]

// NonNullable

type UserTypes = number | string[] | null
  
type User = NonNullable<UserTypes>
  
const user1: User = 313
  
const user2: User = ["dadada"]
  
const user3: User = [313] // False: Type 'number' is not assignable to type 'string'.

// ReturnType
interface User {
    id: number
    age: number
    name: string
}
  
const CreateUser = (id: number, age: number, name: string): User => {
    return { id, age, name }
}
  
type FirstUser = ReturnType<typeof CreateUser>

// InstanceType
class PublicUserClass {
    constructor(public id: number, public name: string) {}
}
  
type User = InstanceType<typeof PublicUserClass>
  
const firstUser: User = new PublicUserClass(18, "alex")
```

---

### Типи даних | Typescript

```typescript
// Partial
interface Todo extends Partial<Type> {
	// Code
}

// Omit
interface Todo {
	id: number
	title: string
	description: string
}

type PrewievTodo = Omit<Todo, "id">

// Record
type Name = "Alex" 

interface Age {
	age: number
}

const firstUser: Record<Name, Age> = {
	Alex: { age: 31 }
}

// Extract
type User = Extract<Type, Union>

// Parameters

const Function = (num, str, num): void => {}

type Type = Parameters<typeof Function>

const User: User = [number, string, number]

// NonNullable
type UserTypes = number | string[] | null
  
type User = NonNullable<UserTypes>

// ReturnType
type Type = ReturnType<typeof Function>
```

#### **Нотатки:**
> Partial — перебирає всі типи, роблячи ії опціональними, тобто не обов'язковими
> Omit — Видялає тип вказаного інтерфейса за ключом, синтаксис: ==Omit<Type, Key>==
> Record — перебирає всі ключи та типи, й робить з них окремий тип, або обьект, синтаксис: ==Record<Key, Type>==
> Extract — Витягує з типа лише ті значення, що є в Union
> Parameters — Витягуэ типи у вигляды кортежу, тобто як массив
> NonNullable — Витягує з типа, типи null & undefined
> ReturnType — Повертає той тип, який повертає функція
> InstanceType — Витягуэ тип екземпляра класса з його конструктора

---

### Синатксис | Next JS

```typescript
export default function NotFound() {
  return (
    <div>
      <h2>404 — Page not found!</h2>
    </div>
  )
}
```

#### **Нотатки:**
> Для того щоб сторінка працювала вона повина лежати в папці ==app/== під назвою ==not-found==

---

## 📝 Щоденник навчання

### 2026-05-14 — Початок

### **Що вивчав:**
- Untility types
- Partial
- Omit
- Record 
- Extract
- Parameters
- NonNullable
- ReturnType
- InstanceType
- Next Js
- API Routes
- Custom Errors

### **Час (год):** 
2 години

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

*Шаблон створено: 2026-05-14 | Оновлено: 2026-05-14
