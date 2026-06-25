# luomingguo.github.io

Personal résumé site for **Mingguo Luo** — Senior Backend & Full-Stack Engineer.
Built with native HTML / CSS / JS, no build step, no dependencies.

🔗 Live: https://luomingguo.github.io

## Features

- **Bilingual** — one-click EN ⇄ 中文 toggle (remembers your choice)
- **Light / dark theme** — follows system preference, toggleable
- **Responsive** — looks good on phone, tablet and desktop
- **Print to PDF** — the “Download PDF” button opens a clean print layout
- **Targeted for Upwork / freelance** clients

## Structure

```
index.html      content + bilingual data-en / data-zh attributes
css/main.css    styling, theme variables, print rules
css/normalize.css
js/main.js      language toggle, theme toggle, print, year
img/            avatar
```

## Editing content

Each translatable element carries `data-en` and `data-zh` attributes — edit both
to keep the two languages in sync. `js/main.js` swaps them at runtime.

## Highlights

- 6+ years building cloud-native & distributed systems
- Go (5+ yrs) · C/C++ · Python · JavaScript
- Kubernetes · Docker · CI/CD · Prometheus · private cloud
- From-scratch projects: distributed KV store, RDBMS (TinyDB), DPDK TCP/IP stack
