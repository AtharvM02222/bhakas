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

# Useful Documentation

- EJS Docs  
  https://ejs.co/#docs

- Passport.js Middleware  
  https://www.passportjs.org/concepts/authentication/middleware/

- Express Session  
  https://www.npmjs.com/package/express-session

- Mongoose Guide  
  https://mongoosejs.com/docs/guide.html

- Socket.IO Rooms  
  https://socket.io/docs/v4/rooms/

import mongoose from 'mongoose';

export async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb+srv://admin:<db_password>@bhakas.etrjipd.mongodb.net/?appName=Bhakas");
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}



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
