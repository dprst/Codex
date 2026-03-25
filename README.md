# Daily Newsletter PWA

PWA-прототип щоденного двомовного дайджесту (UA/EN) для комунікаційного стратега.

## Що реалізовано

- Today view: editorial intro, top signals, Global/Ukraine briefs, Pro block, Research radar.
- Archive view: список випусків + пошук + відкриття будь-якого випуску в один клік.
- Method view: коротка прозора методологія відбору контенту.
- Перемикач мови UA/EN.
- PWA: `manifest.webmanifest`, install prompt, service worker (cache-first для статичних ресурсів, network-first для issue JSON).

## Локальний запуск

```bash
python -m http.server 8000
```

Відкрийте: `http://localhost:8000`.

## Деплой (GitHub Pages)

У репозиторій додано workflow `.github/workflows/deploy-pages.yml`, який деплоїть сайт на GitHub Pages при пуші в гілку `work`, `main` або `master`.
У репозиторій додано workflow `.github/workflows/deploy-pages.yml`, який деплоїть сайт на GitHub Pages при пуші в гілку `work`.

Щоб увімкнути:

1. У GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Запушити одну з гілок: `work`, `main` або `master`.
3. Дочекатися completion workflow **Deploy PWA to GitHub Pages**.
4. Відкрити URL із кроку деплою (вигляд: `https://<owner>.github.io/<repo>/`).

> Примітка: workflow уже примусово запускає JavaScript actions на Node 24 (`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true`), щоб уникнути попередження про deprecation Node 20.

2. Запушити гілку `work` у віддалений репозиторій.
3. Дочекатися completion workflow **Deploy PWA to GitHub Pages**.
4. Відкрити URL із кроку деплою (вигляд: `https://<owner>.github.io/<repo>/`).

## Дані

- `data/issues/index.json` — реєстр випусків.
- `data/issues/YYYY-MM-DD.json` — окремий випуск.

## Наступний крок

Підключити щоденний ingestion pipeline (08:30 Europe/Kyiv) для автоматичного формування нового issue-файлу.
