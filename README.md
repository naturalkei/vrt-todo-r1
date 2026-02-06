# 🌿 VRT Todo R1

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-FF6B6B?style=flat-square)
![IndexedDB](https://img.shields.io/badge/IndexedDB-idb-yellow?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> **🎮 Animal Crossing: New Horizons Themed Todo App**
> <br> A cozy, whimsical todo list application with **IndexedDB** persistence, **Zustand** state management, and a delightful **ACNH-inspired** aesthetic.
> <br> Built with **React 19**, **Vite 7**, **Tailwind CSS 4**, and automated **Pull Request workflows**.

## ✨ Features

### 🎨 **Animal Crossing Aesthetic**
- **Pastel Color Palette:** Soft creams, mints, sky blues, peaches, and yellows
- **Bubbly Typography:** `Baloo 2` for English/numbers, `Noto Sans KR` for Korean
- **Rounded Everything:** Heavily rounded corners (`rounded-bubble`, `rounded-bubbly`)
- **Thick Borders:** 4px borders with complementary colors
- **Soft Shadows:** Gentle shadow effects for depth
- **NookPhone Vibes:** Cozy, playful, handcrafted UI inspired by Animal Crossing's in-game interface

### 🗄️ **Persistent Storage**
- **IndexedDB:** All todos persist locally in your browser
- **Async Operations:** Promise-based CRUD helpers
- **Type-Safe:** Full TypeScript support with proper interfaces

### 🔄 **State Management**
- **Zustand Store:** Lightweight and intuitive state management
- **Optimistic Updates:** Seamless UI updates with proper error handling
- **Loading States:** Visual feedback during async operations

### 🛠️ **Full CRUD Operations**
- ✅ **Create:** Add new todos with validation
- 📖 **Read:** View all todos with completion status
- ✏️ **Update:** Toggle completion or edit todo text inline
- 🗑️ **Delete:** Remove individual todos or clear all at once
- 📊 **Stats:** Track total, completed, and remaining todos

### 🤖 **DevOps & Automation**
- **Automated PRs:** Each feature implemented via individual pull requests
- **CI/CD Pipelines:** 
  - GitHub Actions deployment to GitHub Pages
  - PR validation with linting and build checks
  - Artifact uploads for review
- **Conventional Commits:** Semantic commit messages
- **Standard Version:** Automated changelog and versioning

## 📦 Tech Stack

| Category | Technology | Version |
| :--- | :--- | :--- |
| **Framework** | [React](https://react.dev) | v19 |
| **Build Tool** | [Vite](https://vitejs.dev) | v7 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | v4 |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs) | v5 |
| **Database** | [idb (IndexedDB Wrapper)](https://github.com/jakearchibald/idb) | v8 |
| **Icons** | [@phosphor-icons/react](https://phosphoricons.com) | v2 |
| **Language** | [TypeScript](https://www.typescriptlang.org) | v5 |
| **Linter** | [ESLint](https://eslint.org) | v9 |
| **Package Manager** | [pnpm](https://pnpm.io) | v10+ |
| **Versioning** | [standard-version](https://github.com/conventional-changelog/standard-version) | v9 |

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/naturalkei/vrt-todo-r1.git
cd vrt-todo-r1
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run Development Server

```bash
pnpm dev
```

Open your browser and visit `http://localhost:5173` to see the app! 🎉

### 4. Build for Production

```bash
pnpm build
```

### 5. Preview Production Build

```bash
pnpm serve
```

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Starts the Vite development server with HMR |
| `pnpm build` | Runs TypeScript check and builds for production |
| `pnpm serve` | Previews the production build locally |
| `pnpm lint` | Runs ESLint to check for code style issues |
| `pnpm lint:fix` | Automatically fixes ESLint issues |
| `pnpm release` | Generates changelog and bumps version (standard-version) |

## 🧩 Project Structure

```text
vrt-todo-r1/
├── .github/
│   └── workflows/
│       ├── deploy.yml        # GitHub Pages deployment
│       └── ci.yml            # PR validation CI
├── src/
│   ├── components/
│   │   ├── Layout.tsx        # (Unused in current version)
│   │   └── TodoList.tsx      # Main Todo UI component (ACNH styled)
│   ├── lib/
│   │   └── db.ts             # IndexedDB wrapper with CRUD helpers
│   ├── stores/
│   │   └── todo-store.ts     # Zustand store for todo state
│   ├── pages/                # (Unused in current version)
│   ├── App.tsx               # App entry point
│   ├── main.tsx              # React DOM rendering
│   └── index.css             # Tailwind imports & Google Fonts
├── tailwind.config.ts        # ACNH color palette & custom theme
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.ts          # ESLint flat config
└── package.json
```

## 🎨 Design System

### Color Palette (ACNH Theme)

```typescript
colors: {
  acnh: {
    cream: '#FFF8E7',           // Warm cream background
    'cream-dark': '#FFE4BC',    // Darker cream
    mint: '#B8E6D5',            // Soft mint green
    'mint-dark': '#8ED3B8',     // Darker mint
    sky: '#C9E4F5',             // Light sky blue
    'sky-dark': '#A5D3F0',      // Darker sky
    peach: '#FFD5C2',           // Soft peach
    'peach-dark': '#FFBB9F',    // Darker peach
    yellow: '#FFF4A3',          // Soft yellow
    'yellow-dark': '#FFE87C',   // Darker yellow
    brown: '#8B6F47',           // Natural brown
    'brown-dark': '#6B5434',    // Darker brown
    green: '#7EC850',           // Vibrant green
    'green-dark': '#5FA732',    // Darker green
  }
}
```

### Typography

- **Baloo 2:** Used for English text and numbers (bubbly, playful feel)
- **Noto Sans KR:** Used for Korean text (clean, readable)

### Border Radius

- `rounded-bubble`: 2rem (32px)
- `rounded-bubbly`: 2.5rem (40px)

### Shadows

- `shadow-soft`: Subtle shadow for cards
- `shadow-bubble`: Deeper shadow for interactive elements

## 🤖 Automated Development Workflow

This project was built using a strict **PR-per-feature** workflow:

1. **Step 1 (PR #1):** Project scaffolding and dependency installation
2. **Step 2 (PR #2):** IndexedDB wrapper implementation
3. **Step 3 (PR #3):** Zustand store with async actions
4. **Step 4 (PR #4):** Animal Crossing UI implementation
5. **Step 5 (PR #5):** CI/CD pipeline setup
6. **Step 6 (PR #6):** Documentation finalization

Each step followed the same routine:
```bash
git checkout -b feature/<name>
# ... implement changes ...
git commit -m "feat(<scope>): <message>"
git push -u origin feature/<name>
gh pr create --title "..." --body "..." --base main
gh pr merge --merge --delete-branch
git checkout main && git pull
```

## 🚀 Deployment

This app automatically deploys to **GitHub Pages** on every push to `main`:

1. Push changes to `main` branch
2. GitHub Actions workflow runs (`deploy.yml`)
3. App builds and deploys to `https://naturalkei.github.io/vrt-todo-r1/`

## 📝 Usage

### Adding a Todo
1. Type your todo in the input field
2. Click the "추가" (Add) button or press Enter
3. Your todo appears in the list with a yellow background

### Completing a Todo
1. Click the circle icon next to any todo
2. Completed todos turn green with a checkmark
3. Text gets a strikethrough effect

### Editing a Todo
1. Click the pencil icon (✏️) on any todo
2. Modify the text in the inline input
3. Click the checkmark to save or X to cancel

### Deleting a Todo
1. Click the trash icon (🗑️) on any todo
2. The todo is immediately removed from the database

### Clearing All Todos
1. Scroll to the bottom
2. Click "🗑️ 모두 지우기" (Clear All) button
3. All todos are permanently deleted

## 🌟 Why This Stack?

- **Vite 7:** Lightning-fast HMR and builds
- **React 19:** Latest React features and optimizations
- **Tailwind CSS 4:** Oxide engine for faster styling
- **Zustand:** Minimalist state management (no boilerplate)
- **IndexedDB:** Persistent storage without external services
- **pnpm:** Fast, disk-efficient package management
- **Phosphor Icons:** Beautiful, consistent icon set with multiple weights

## 🐛 Known Issues

- None currently! 🎉

## 🔮 Future Enhancements

- [ ] Drag-and-drop todo reordering
- [ ] Todo categories/tags
- [ ] Dark mode toggle
- [ ] Due dates and reminders
- [ ] Export/import todos
- [ ] PWA support for offline usage
- [ ] Todo search and filtering

## 📄 License

MIT License - feel free to use this project for learning or as a starter template!

## 💝 Credits

- Design inspiration: **Animal Crossing: New Horizons** by Nintendo
- Icons: [Phosphor Icons](https://phosphoricons.com)
- Fonts: [Google Fonts](https://fonts.google.com)

---

Made with 🌸 by following the strict PR-per-feature protocol.

**Enjoy your cozy todo experience!** 🦝✨
