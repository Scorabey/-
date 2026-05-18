---
feature: _files/Pasted image 20260518145629.png
thumbnail: thumbnails/resized/f4fd3d638cf86f46218cc36e37109507_86cf658e.webp
---
## SSG — Static Site Generation

> Сторінка генерується лише один раз, при білді проекта

```typescript
// pages/blog/[slug].js (Pages Router)
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false, // | true | 'blocking'
  };
}
```

---
### Fallback

- **false** — невідомий шлях → 404
- **true** — спочатку показує fallback-ui, потім генерує
- **blocking** — жде генерацію, потім кешує

> Використовується для статичних сайтів

---
## ISR — Incremental Static Regeneration

> Статичний сайт з можливістю фонового оновлення

```typescript
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60, // пересоздать через 60 сек
  };
}
```

> Можно також тригерити, але через ==res.revalidate('/path')==

> Використовується в каталогах товарів, сайтах новин чи моніторингу цін

---
## SSR — Server-Side Rendering

> Сторінка генерується на кожному запросі

```typescript
export async function getServerSideProps(context) {
  const { req, res, params, query } = context;
  const data = await fetchData(query.id);
  return { props: { data } };
}
```

---
## CSR — Client-Side Rendering

> Рендеринг відбувається в браузері 

```typescript
import useSWR from 'swr';

export default function Dashboard() {
  const { data, error } = useSWR('/api/user', fetcher);
  if (!data) return <Spinner />;
  return <Profile user={data} />;
}
```

> Використовується тоді коли дані не потрібні для SEO

---

## App Router ( Next.js 13+ )

С App Router все строїтся навколо **React Server Components (RSC)**.

**Server component**
```typescript
// app/page.js — это Server Component
async function Page() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 } // ISR
    // cache: 'no-store'     // SSR
    // cache: 'force-cache'  // SSG
  });
  const json = await data.json();
  return <div>{json.title}</div>;
}
```

> Поведення рендерингу задається через **fetch**

**Client components**
```typescript
'use client'; // Обов'язкова директива

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

---

## Streaming & Suspense (App Router)

> Дозволяє віддавати чатинкі сторінки по мірі їх готовності

```typescript
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<Skeleton />}>
        <SlowComponent /> {/* стримится отдельно */}
      </Suspense>
    </>
  );
}
```

---

## Parallel & Intercepting Routes (App Router)

> **Parallel Routes** — дозволяє показувати декілька сторінок в одному layout

```
app/
  @modal/
    page.js
  @main/
    page.js
  layout.js
```

> **Intercepting Routes** — теж саме тільки в показує як модалку

---
## generateStaticParams (App Router, заміна getStaticPaths)

```typescript
// app/blog/[slug]/page.js
export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map(p => ({ slug: p.slug }));
}
```

## Ключові правила для вибору стратегії

![[Pasted image 20260518145629.png]]