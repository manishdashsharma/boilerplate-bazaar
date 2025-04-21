# 🧰 Boilerplate Bazaar

Welcome to **Boilerplate Bazaar** — a production-ready repository, full-stack starter templates featuring popular modern stacks. Each branch offers a complete development and production setup using TypeScript or JavaScript, React, Node.js, Docker, and your choice of database.

Ideal for developers and teams who want to kickstart projects with best practices and minimal configuration. Just pick your stack, clone the branch, and start building!

---

## 🚀 Tech Highlights

- ⚛️ **Frontend**: React 18 (TS/JS)
- 🔧 **Backend**: Node.js with Express (TS/JS)
- 🗃️ **Databases**: MongoDB, PostgreSQL, or Prisma ORM
- 🐳 **Containerization**: Docker & Docker Compose
- 🌐 **Reverse Proxy**: Nginx configured for production builds
- ⚙️ **CI/CD**: GitHub Actions workflows for automated builds and deployments
- 💻 **Developer Experience**:
  - ♻️ Hot-reloading (frontend & backend)
  - 🧼 ESLint + Prettier
  - 🔐 Type-safe across the stack
  - 🎯 Husky + Commitlint + Conventional Commits
  - 🧪 Pre-wired for development and production environments

---

## 🌿 Branch Structure

Each branch contains a specific stack combination. The naming convention is:

```
<backend>-<frontend>-<database>-<language>
```

### 🧩 Available Branches

| 🌱 Branch Name             | 📦 Stack Description                                     |
|---------------------------|----------------------------------------------------------|
| `node-react-mongo-ts`     | Node.js + React + MongoDB using TypeScript              |
| `node-react-postgres-ts`  | Node.js + React + PostgreSQL using TypeScript           |
| `node-react-prisma-ts`    | Node.js + React + Prisma ORM (PostgreSQL) using TS      |
| `node-react-mongo-js`     | Node.js + React + MongoDB using JavaScript              |
| `node-react-postgres-js`  | Node.js + React + PostgreSQL using JavaScript           |
| `node-react-prisma-js`    | Node.js + React + Prisma ORM (PostgreSQL) using JS      |

---

## 🚀 Getting Started

1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/boilerplate-bazaar.git
   cd boilerplate-bazaar
   ```

2. **Checkout a Branch**
   ```bash
   git checkout node-react-mongo-ts
   ```

3. **Remove Git History (Start Fresh)**
   ```bash
   rm -rf .git
   git init
   git remote add origin <your-new-repo-url>
   ```

4. **Follow Setup Instructions**
   Each branch contains its own README to guide you through setup, development, and deployment.

---

## 💡 Why Use Boilerplate Bazaar?

- 🧪 Consistent, reproducible dev environments
- 🔐 Type-safe end-to-end (when using TS branches)
- ✨ Clean, linted, and formatted codebase
- 🚀 CI/CD-ready with GitHub Actions
- 🐳 Dockerized from dev to prod
- 🌐 Nginx reverse proxy pre-configured for production routing
- 📦 All the modern tooling pre-configured so you can focus on what matters: **building**

---

## 🤝 Contributions

Have ideas to improve a boilerplate? Want to add more features or stacks?  
Open an issue or submit a pull request — contributions are welcome!

---

## 📄 License

MIT — feel free to use, fork, and modify for personal or commercial projects.
```
