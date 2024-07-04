!!!НАСТРОЙКА ПЕРЕД РАБОТОЙ!!!

https://excalidraw.com/ сайт для скетчей
https://vitejs.dev/guide/ подключение пакета через команду $ npm create vite@latest.

- Мгновенная серверная перезагрузка (HMR)
- Быстрое начальное время запуска и тд

npm -v проверка ноды;

1. $ npm create vite@latest - подключение Vite, далее выбираем фреймворк --> JS;
2. Устанавливаем зависимости через терминал, первая это Vite через команду - npm i
   в документе package.json есть скрипт
   'dev' --> npm ryn dev - запускает наш проект на сервере 5173 ;
   build;
   preview;
3. В папке node_modules находятся все данные о зависимостях:
   В папке gitignore - находятся список файлов которые нужно игнорировать при загрузки в гит.
4. P.S пошаговая установка Tailwind на сайте tailWIndcss.com. Установка tailWInd через команду npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p --> инструмент для запуска пакетов
   npm - менеджер пакетов
   npx - запускает пакеты
5. конфиг postcss - это препроцессор СSS который с помощью JS трансофрмирует код в чистый CSS а так же использует плагины в том числе Tailwind
   аутопрефиксер - постпроцессор CSS инструмент для добавления специальных префиксов для разных браузеров на основе базы can i use
6. В файле tailwind.config.cjs - content - прописываем все пути до документов гле нам будут нужны стиои tailwind
   content: ['./index.html', './src/\*_/_.js'] - все файлы в папке src
7. Добавляем в файл style.css : @tailwind base; @tailwind components; @tailwind utilities;
   @tailwind base - испорт стилей и сброс и нормализайция стилей;
   @tailwind components - изначально пустой будем создавать свои компоненты;
   @tailwind utilities - все классы для создания отступов, вместо написания своих;
8. Внимательно проверить все пути
   8.1. - Если Css родолжит ругаться - то создаем отдельную папку .vscode --> файл settings.json --> {"css.lint.unknownAtRules": "ignore"}
9. Установка шрифтов
   @layer base {
   @font-face {
   font-family: Akzidenz;
   font-weight: 700;
   font-style: normal;
   src: url("/fonts/akzidenz/AkzidenzGroteskPro-BoldEx.otf") format("opentype");
   }

@font-face {
font-family: Akzidenz;
font-weight: 500;
font-style: normal;
src: url("/fonts/akzidenz/AkzidenzGroteskPro-Md.otf") format("opentype");
}

@font-face {
font-family: Akzidenz;
font-weight: 400;
font-style: normal;
src: url("/fonts/akzidenz/AkzidenzGroteskPro-Regular.otf")
format("opentype");
}

html { - установка стилей для всего html
font-family: Akzidenz, sistem-ui, sans-serif;
}
} 10. Сделать свою иконку на сайт через сайт favicon.io. ссылки для подключения вставляем под title (все ссылки кроме ссылки манифест)

!!!РАЗРАБОТКА ПЕРВОГО-ГЛАВНОГО ЭКРАНА!!!

1. Классы в tailwind прописываются сразху в строку и все. Пример: bg-slate-200 (номер оттенок цвета) - цвет background rounded-md font-medium
2. Так же как и в классическом CSS для применерия Flex создаем див рожительский и его стилизуем
   class="inline-flex items-center cursor-pointer"
3. h-screen - высота экрана равна высоте вьюпорта, или height: 100vh
4. марджины и паддинги задаются так:
   mt-10 - это означает 10 это размер сетки, размер сетки 1=4px. Итого mt-10 --> 40 пикселей
5. Hover в tailwind это псевдокласс например hover:bg-slate-100
6. Брекпоинты : для отзывчивой верстки в стиле мобайл ферст
7. В CSS стили прописываются через @applay

!!!СМЕНА ТЕМЫ!!!

1. Добавляем addEventListener('строка с названием событыя: клик,маус овер,' (функция когда этоб событие проихойдет))
