# Twig + Svelte + TS + Vite + Vituum

Сборка мечты) работает полностью на [Vite](https://vitejs.dev/)
Поддерживает [Twig](https://twig.symfony.com/) из за чего можно делать многостраничные сайты без особых проблем. Подойдет для вёрстке с беком или создания небольших статических сайтов

## Полезные ссылки/информация

Вся сборка основана на [Vituum](https://vituum.dev/) По сути свой набор плагинов для [Vite](https://vitejs.dev/)

-   Плагин [Twig](https://vituum.dev/plugins/twig.html)
-   Плагин [PostCSS](https://vituum.dev/plugins/postcss.html)
-   Js фреймворк [Svelte](https://svelte.dev/)
-   [TypeScript](https://www.typescriptlang.org/) [TypeScript ru](https://scriptdev.ru/guide/)

## Использование

Node.js v18.16.0
[Ссылка на nvm windows (переключать версии node)](https://docs.microsoft.com/ru-ru/windows/dev-environment/javascript/nodejs-on-windows)

Устанавливаем

```bash
npm install
```

Разработка

```bash
npm run dev
```

Сборка для навешивания на бек

```bash
npm run build
```

Проверить сборку локально

```bash
npm run preview
```

## Файловая структура проекта

```
├─ dist/                   # Папка с готовой сборкой проекта
├─ public/                 # Все содержимое этой папки перенесется в корень папки dist/
├─ src/                    # Основная папка с фронтом проекта
│  ├─ assets/              # Папка общих файлов (изображения, видео, звук)
│  ├─ data/                # Хранилище общих данных в формате .json
│  │  └─ pages/            # Данные для страниц в формате .json
│  ├─ fonts/               # Шрифты
│  ├─ icons-sprite/        # Всё содержимые .svg преобразуются svg sprite
│  ├─ includes/            # Папка для компонентов Twig
│  │  ├─ component/        # Папка компонента Twig
│  │  ├─ img/              # Файлы относящиеся к компоненту (название любое, может содержать: изображения, видео, звук)
│  │  ├─ component.twig    # Компонент Twig
│  │  ├─ component.css     # Стили для компонента Twig
│  │  ├─ component.ts      # Скрипты компонента Twig
│  │  └─ component.json    # Данные компонента
│  ├─ layouts/             # Содержит шаблоны Twig
│  ├─ pages/               # Папка с страницами
│  │  ├─ test-page/        # Если создать подпапку то путь к странице будет /test-page/
│  │  │  └─ index.twig
│  │  └─ index.twig        # Главная страница
│  ├─ style/               # Стили
│  │  ├─ fonts.css         # Подключение шрифтов
│  │  ├─ layout.css        # Общие стили
│  │  ├─ normalize.css     # Нормалайз
│  │  └─ utils.css         # css переменные
│  ├─ modules/             # Папка для компонентов Svelte (структура на ваше усмотрение, если не нужна удаляйте)
│  ├─ main.css             # Точка входа css Все подключается сюда
│  ├─ main.ts              # Точка входа js Все подключается сюда
```

## public/

Папка предназначена для статичных данных которые при сборку будут перенесены в папку dist/ в независимости используете вы их или нет
[Документация](https://vitejs.dev/guide/assets.html#the-public-directory)

## src/data/ Данные

Все данные в файлы с форматом .json находящиеся в этой папке будут доступны в любом [Twig](https://twig.symfony.com/) файле.
**Важно** когда создаете новый файл обязательно внутри указывайте уникальный ключ, как в примере ниже. Иначе данные с одинаковыми ключами будут перезаписываться.

```json
{
	"global": {
		"title": "Глобальный данные которые доступны в любом файле .twig берутся из /src/data/global.json",
		"text": "На самом деле все данные глобальны) и получить можно доступ к любым например {{ footer.copy }} будет работать везде",
		"benefits": ["Fast", "Flexible", "Secure"]
	}
}
```

### Папки в которых собираются все данные из .json

-   src/data/
-   src/includes/
-   src/layouts/

## src/icons-sprite/ svg sprite

Все файлы в формате .svg находящиеся в этой папке попадают в общий svg sprite. Спрайт будет распечатан на странице из js, из за этого собранный js файл может много весить. Но это не влияет на производительность. Увеличивал размер спрайта в 40 раз и разнице в производительности не было.

Использовать можно где угодно, пример ниже.
**Важно** имя элемента спрайта должно быть `#icon-[название папки (если есть)]-[название файла]`

```html
<svg>
	<use xlink:href="#icon-test-d" />
</svg>
```

[Документация](https://github.com/vbenjs/vite-plugin-svg-icons)

Если вам не нужен svg sprite, то в файле [src/main.ts](./src/main.ts) просто удалите строку `import "virtual:svg-icons-register";`, также можете удалить папку src/icons-sprite/

## src/includes/ компоненты Twig

Здесь содержатся все компоненты Twig. Основная идея в том чтобы весь сайт состоял из таких компонентов и все стили, скрипты и файлы которые использует этот компонент находились внутри его папки.
В сборке реализована полная поддержка шаблонизатора Twig можете использовать весь его функционал.

[Примере](./src/includes/test/test.twig) компонент Twig

[Документация](https://twig.symfony.com/)

## src/pages/ страницы

Все файлы с расширением `.twig .json.twig .json` находящиеся в этой папки будут преобразованы в .html документы. [Тут](https://stackblitz.com/github/vituum/vituum/tree/main/examples/twig) можно посмотреть пример и поиграться в песочнице.

[На примере](./src/pages/index.twig) можно посмотреть как подключать компонент Twig, прокидывать разные данные к одному и тому же компоненту и базовые возможности

[Документация](https://vituum.dev/plugins/twig.html)

## src/modules/ компоненты Svelte

Можно использовать [Svelte](https://svelte.dev/) все его файлы находятся в папке src/modules/ Вы можете размещать файлы Svelte где вам будет удобно.

Если вы хотите использовать дорогой js фреймворк то установите нужны плагин для [Vite](https://vitejs.dev/plugins/)

Если не нужен Svelte то можно просто удалить инициализацию Svelte компонентов в файле [src/main.ts](./src/main.ts)

```js
// src/main.ts

import App from "@src/modules/app/App.svelte";

const appEl = document.getElementById("app");
if (appEl) {
	new App({
		target: appEl,
	});
}
```

## src/main.css Точка входа css

[src/main.css](./src/main.css) является точкой входа для всех стилей. По сути в него мы просто импортируем нужные нам стили которые собираются в один общий css файл.
Для css используется плагин [PostCSS](https://vituum.dev/plugins/postcss.html) и поддерживаются [`postcss-import`](https://www.npmjs.com/package/postcss-import), [`postcss-nesting`](https://www.npmjs.com/package/postcss-nesting), [`postcss-custom-media`](https://www.npmjs.com/package/postcss-custom-media), [`autoprefixer`](https://www.npmjs.com/package/autoprefixer).
Если хочется использовать scss это тоже не проблема, [описание как подключить](https://vitejs.dev/guide/features.html#css-pre-processors).

## src/main.ts Точка входа ts

Подразумевается что будет использовать [TypeScript](https://www.typescriptlang.org/) но если это не ваш путь то вы можете подключать обычные js файлы).
[src/main.ts](./src/main.ts) нужно подключать все нужные вам скрипты.
