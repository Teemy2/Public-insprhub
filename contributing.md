# 🤝 Contributing to Inspr

## 🛠️ Getting Started

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name dev
```

---

## 🌿 Branching Strategy

We follow a **feature-branch** strategy to maintain a clean and stable `main` branch.

### 📌 Branch Types:

- `main` — stable, production-ready code
- `dev` — integration branch for active development
- `feature/<name>` — new features
- `bugfix/<name>` — non-critical bug fixes
- `hotfix/<name>` — urgent production fixes

### 🗭 Workflow:

1. Branch from `dev`
2. Commit your changes regularly (see commit strategy below)
3. Push to your remote branch
4. Open a Pull Request (PR) to `dev`
5. After thorough testing, merge `dev` to `main`

---

## 💬 Commit Strategy

Use conventional, semantic messages:

```
type(scope): short description [(#<issue tag>) if applicable]
```

Examples:

- `feat(api): implement role-based auth`
- `fix(cart): prevent double-charging`
- `docs: update README`

### Types:

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `style:` — formatting, missing semi-colons, etc.
- `refactor:` — code restructuring without behavior change
- `test:` — adding or correcting tests
- `chore:` — maintenance tasks (deps, configs, etc.)

### Best Practices:

- Keep commits atomic and clear
- Use present tense ("add", not "added")

---

## 🔃 Push & Pull Best Practices

### Pull Before Work

```bash
git checkout dev
git pull origin dev
```

### Push Feature

```bash
git checkout -b feature/your-feature-name
git add .
git commit -m "feat(...): your message"
git push origin feature/your-feature-name
```

### Merge Process

- Open PR against `dev`
- Request review
- Rebase with `dev` if needed
- Merge after approval and CI pass
