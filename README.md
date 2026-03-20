# Memory Duel V7

Тази версия добавя основа за истински онлайн режим със Supabase.

## Как да го пуснеш локално
1. Отвори `index.html` за локална игра.
2. За онлайн режим:
   - създай проект в Supabase
   - изпълни `supabase-schema.sql` в SQL Editor
   - копирай `supabase-config.example.js` като `supabase-config.js`
   - постави `SUPABASE_URL` и `SUPABASE_ANON_KEY`

## Как да го качиш в GitHub Pages
1. Сложи файловете в GitHub repository.
2. Активирай GitHub Pages от branch-а.
3. Увери се, че `supabase-config.js` е попълнен.

## Онлайн поток
- Регистрация / вход
- Избор на режим Онлайн
- Създай стая или влез с код
- Домакинът натиска `Старт онлайн`

## Бележка
GitHub Pages е само за фронтенда. Истинският онлайн режим използва Supabase за:
- auth
- база
- realtime синхронизация
