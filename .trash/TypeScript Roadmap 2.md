# TypeScript Roadmap — React + TS

> Роадмап від базового рівня до впевненого написання проектів на React + TypeScript.
> Джерело: офіційна документація TypeScript.

---

## 🔵 Рівень 1 — Основи (Базовий синтаксис)

**Час:** ~2–3 дні при 2–3 год/день

- [x] Що таке TypeScript
- [x] Встановлення та `tsconfig.json`
- [x] Примітивні типи: `string`, `number`, `boolean`
- [x] `null` і `undefined`
- [x] `any`, `unknown`, `never`, `void`
- [x] Анотації типів
- [ ] Вивід типів (Type Inference)
- [ ] Arrays
- [ ] Tuple
- [ ] Enum
- [ ] Type Assertions (`as`)

---

## 🟢 Рівень 2 — Структури (Об'єкти та функції)

**Час:** ~3–4 дні при 2–3 год/день

- [ ] Object types
- [ ] `Interface`
- [ ] `Type Alias`
- [ ] Interface vs Type
- [ ] Optional properties (`?`)
- [ ] `Readonly`
- [ ] Index Signatures
- [ ] Типізація функцій
- [ ] Optional та default параметри
- [ ] Rest параметри
- [ ] Function overloads

---

## 🟣 Рівень 3 — Типи (Просунуті типи)

**Час:** ~5–7 днів при 2–3 год/день

- [ ] Union types (`|`)
- [ ] Intersection types (`&`)
- [ ] Literal types
- [ ] Narrowing (`typeof`, `instanceof`, `in`)
- [ ] Type Guards
- [ ] Discriminated Unions
- [ ] Nullish Coalescing (`??`) та Optional chaining (`?.`)
- [ ] `satisfies` оператор
- [ ] `keyof`
- [ ] `typeof`
- [ ] Indexed Access Types

---

## 🟠 Рівень 4 — Generics (Дженерики та класи)

**Час:** ~5–7 днів при 2–3 год/день

- [ ] Generic functions
- [ ] Generic interfaces
- [ ] Generic constraints (`extends`)
- [ ] Default type параметри
- [ ] Класи та типи
- [ ] `implements`
- [ ] `abstract` класи
- [ ] Utility types: `Partial`, `Required`, `Pick`, `Omit`
- [ ] Utility types: `Record`, `Exclude`, `Extract`, `NonNullable`
- [ ] `ReturnType`, `Parameters`

---

## 🔴 Рівень 5 — React + TS (Застосування в React)

**Час:** ~7–10 днів при 2–3 год/день

- [ ] Типізація props (`FC` / `ReactNode`)
- [ ] Типізація `useState`
- [ ] Типізація `useRef`
- [ ] Типізація `useReducer`
- [ ] Типізація `useContext`
- [ ] Типізація подій (`MouseEvent`, `ChangeEvent`)
- [ ] Типізація кастомних хуків
- [ ] Типізація API запитів (`fetch` / `axios`)
- [ ] Generics у компонентах
- [ ] Типізація `children`
- [ ] `ComponentPropsWithoutRef` / `HTMLAttributes`

---

## 📊 Загальний час

| Рівень | Теми | Час |
|---|---|---|
| 1 — Основи | 11 тем | ~2–3 дні |
| 2 — Структури | 11 тем | ~3–4 дні |
| 3 — Типи | 11 тем | ~5–7 днів |
| 4 — Generics | 10 тем | ~5–7 днів |
| 5 — React + TS | 11 тем | ~7–10 днів |
| **Разом** | **54 теми** | **~3–5 тижнів** |

---

## 🔗 Корисні посилання

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TS Playground](https://www.typescriptlang.org/play)

---

## 💡 Поради

> [!tip] Рівні 3 і 4 — найскладніші. Не поспішай, краще витратити зайвий день, ніж рухатись далі з прогалинами.

> [!tip] Рівень 5 краще проходити паралельно з реальним проектом — навіть маленьким Todo-app на React + TS.

> [!note] Середній рівень JS прискорить проходження рівнів 1–2 — більшість концепцій здадуться знайомими.

---

*Оновлено: <% tp.date.now %>*
