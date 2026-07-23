## Initial Setup

```bash
npx express-generator --view=ejs
npm install
```

### Enable ES Modules

In `package.json`:

```json
{
  "type": "module"
}
```

---

## Nodemon Setup

Install:

```bash
npm install --save-dev nodemon
```

In `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}
```

---

## Template Literals

Use backticks (`` ` ``) instead of quotes.

```js
console.log(`bhakas running at ${bhakas_port}`);
```

---

## Animate.css

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
/>
```

---

## Express EJS Layouts

Install:

```bash
npm install express-ejs-layouts
```

---

## Model Viewer

```html
<script
  type="module"
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js">
</script>
```

Use:

```html
<model-viewer></model-viewer>
```

---

# UI Design

## Color Rule (60-30-10)

- **60%** → Neutral colors
- **30%** → Primary color
- **10%** → Secondary / Accent color

Choose:

- Primary Color
- Secondary (Accent) Color
- Neutral Palette

---

## Dynamic EJS Title

```ejs
<title><%= typeof title !== 'undefined' ? title : 'Tech Syndicate' %></title>
```

---

## Responsive Units

> **Bhavit Bhaiya says:** Use `vw` whenever appropriate for responsive sizing.

---

## Firebase

- [Setup](https://firebase.google.com/docs/web/setup)
- [Auth (signup/login)](https://firebase.google.com/docs/auth/web/password-auth)
- [Firestore add data](https://firebase.google.com/docs/firestore/manage-data/add-data)
- [Firestore get + map data](https://firebase.google.com/docs/firestore/query-data/get-data)
- [Firestore realtime listener (chat)](https://firebase.google.com/docs/firestore/query-data/listen)
- [Firestore query/orderBy](https://firebase.google.com/docs/firestore/query-data/order-limit-data)
- [Security rules](https://firebase.google.com/docs/firestore/security/rules-structure)

# Commit Types

| Type | Use For |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting (no code changes) |
| `refactor` | Code improvements without changing behavior |
| `test` | Adding or updating tests |
| `perf` | Performance improvements |
| `chore` | Maintenance tasks |
| `ci` | CI/CD changes |
| `build` | Build system changes |
| `revert` | Revert a previous commit |
