# Branch Protection

Configure in GitHub under **Settings → Branches → Add branch ruleset**.

## Rules for `main`

### 1. Require a pull request before merging
Prevents direct pushes to `main`, ensuring CI always runs before code lands.

- Enable: **Require a pull request before merging**
- Required approvals can be set to 0 for solo projects

### 2. Require status checks to pass
Blocks merging if CI fails.

- Enable: **Require status checks to pass before merging**
- Add the check named `ci` (matches the `jobs.ci` key in `.github/workflows/ci.yml`)
- Enable: **Require branches to be up to date before merging**

### 3. Squash merge only
Enforces a linear, readable history on `main` — one commit per feature.

- Go to **Settings → General → Pull Requests**
- Uncheck **Allow merge commits**
- Uncheck **Allow rebase merging**
- Keep only **Allow squash merging** checked
- Set default commit message to **Pull request title and description**

### 4. Keeping branches up to date
Before opening a PR, rebase the feature branch on top of `main`:

```bash
git fetch origin && git rebase origin/main
```

## Result
Every merge to `main` will be a single squash commit, only possible after lint + tests + build all pass.
