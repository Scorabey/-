---
language: Typescript
category: Frontend
difficulty: Beginner
status: Завершено
started: 2026-05-05
last_reviewed: 2026-05-05
next_review: 2026-05-05
total_hours: 1.7
progress: 100
rating: 4
tags:
  - IT
  - learning
  - programming
  - IT-Learning
---
## 📋 Загальна інформація

| Поле               | Значення   |
| ------------------ | ---------- |
| 🏷️ Мова           | Typescript |
| 📂 Категорія       | Frontend   |
| ⚡ Складність       | Beginner   |
| 🎯 Статус          | Завершено  |
| 📅 Початок         | 2026-05-05 |
| ⏱️ Годин витрачено | 1          |

---

## 🗺️ Roadmap навчання

### Фаза 1: Основи (Beginner)
- [x] Interface
- [x] Типы функций
- [x] Enum
- [x] Class
- [x] Tuple
- [x] Object
---

## 📚 Ресурси для навчання

### Документація
- [Interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Classes](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Enum](https://www.typescriptlang.org/docs/handbook/enums.html)

### Практика / Завдання
- ![[main.ts]]

### Корисні сайти
- [Типы функций](https://metanit.com/web/typescript/2.3.php)
- [Tuple](https://claude.ai/chat/ecee9245-0f1c-4b69-a9ad-d4e11df88cdd)
- [Object](https://claude.ai/chat/e8a34c05-ceca-4b7e-983b-bb66f50ecaa5)

---

## 🧠 Вивчені концепції

### Синтаксис

```typescript
// Interface 
interface Object {
	width: number;
	height: number;
}
// Optional propertys
interface Object {
	width?: number;
	height?: number;
}
// Readonly propertys
interface Object {
	readonly width: number;
	readonly height: number;
}
// Type of function
function Sum(x: number, y: number): number {
	return x+y
}
// Extending interface
interface Shape {
	color: string
}
interface Square extends Shape {
	sideLength: number
}
let square = {} as Square
// Enum
enum Direction {
	Up,
	Down,
	Right,
	Left
}

Direction.Up // 0
Direction.Down // 1
Direction.Right // 2
Direction.Left // 3

enum Direction {
	Up = "UP",
	Down = "DOWN",
	Right = "Right",
	Left = "LEFT",
	
}

Direction.Up // UP
Direction.Down // DOWN
Direction.Right // RIGHT
Direction.Left // LEFT
// Tuple
let preson: [name: string, age: number] = ["Alice", 30]
// Доступ до елементів
let point: [number, number] = [10, 20]

point[0] // 10
point[1] // 20
// Деструктуризація
let rgb: [number, number, number] = [256, 256, 0]
const [red, green, blue] = rgb

const [,, alpha] = [255, 128, 0, 1.0]
// Опціональні елементи
let config: [string, number?] = ["localhost"]

config = ["localhost", 8080]
//Rest елементи
type stringAndNumber = [...string[], number]

let data: stringAndNumber = ["a", "b", "c", 123]
```

#### **Нотатки:**
> Object — об'єкст який зберігає пари ключ - значення

---

### Типи даних

```typescript
// inline
const user: { name:  string, age: number } = {
	name: 'Alice';
	Age: 18;
}
// type alias
type User = {
	name: string;
	age: number;
}
const Agent: User = { name: 'Alice', age: 18 }
// Interface
interface User {
	name: string;
	age: number;
}
const Agent: User = { name: 'Alice', age: 18 }
```

#### **Нотатки:**
> Об'єкт може бути у простому inline вигляді так і в interface & type alias, також є опціональні та readonly поля

---

### Функції

```typescript
function Sum(a: number, b: number) {
	return a+b
}
function Multiply(a: number, b: number) {
	return a*b
}
function MathOp(a: number, b: number, op(x: number, y: number) => number): number {
	return op(a, b)
}
```
---

### ООП / Структури

```typescript
// Classes
class Greeter {
	greeting: string
	
	constructor(message: string) {
		this.greeting - message
	}
}
// Extending 
class Animal {
	move(distanceInMeters: number = 0) {
		console.log(`Animal move: ${distanceInMeters}`)
	}
}
class Dog extends Animal {
	bark() {
		console.log("Woof! Woof!")
	}
}
// Public variable
class Animal {
	public name: string
	
	public constructor(theName: string) {
		this.name = theName
	}
}
// Private variables
class Animal {
	#name: string
	
	constructor(theName: string) {
		this.name = theName
	}
}
// OR
class Animal {
	private name: string
	
	constructor(theName: string) {
		this.name = theName
	}
}
// Readonly 
class Animal {
	readonly name: string
	
	constructor(theName: string) {
		this.name = theName
	}
}
// Parameter properties
class Animal {
	name: string
	
	constructor(readonly theName: string) {
		this.name = theName
	}
}
```
---

## 📝 Щоденник навчання

### 2026-05-05 — Початок

### **Що вивчав:**
- Interface
- Типы функций
- Enum
- Class
- Tuple
- Object

### **Що вийшло:**
- ![[main 1.ts]]
### **Час (год):** 
1 година 45 хвилин

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

*Шаблон створено: 2026-05-05 | Оновлено: 2026-05-05
