# Memory Duel V8.0.8

Тази ревизия е насочена към стабилизиране на online режима без рестарт на проекта.

## Какво е променено
- по-агресивен fallback sync при `start / flip / unlock / timeout`
- по-надеждно сравнение на online room snapshot-а
- автоматичен resubscribe / resync при слаб realtime канал
- по-чест polling по време на активен online мач
- resync при връщане към таба или при refocus на прозореца
- стартът на online мача вече използва актуалния room state и правилния card count от стаята

## Файлове
- `scripts.js` — клиентски online fix
- `supabase-migration-v8.0.8.sql` — допълнителна стабилизация за realtime публикацията

## Ако вече имаш работещ Supabase проект
1. Качи новите файлове в GitHub Pages.
2. Пусни `supabase-migration-v8.0.8.sql` в Supabase SQL Editor.
3. Направи `Ctrl + F5` и на двата клиента / браузъра.

## Очакван ефект
- след като Player 2 се присъедини, host трябва да може да стартира без ръчен refresh
- след старт на мача ходовете трябва да се отразяват без постоянно презареждане
- ако realtime каналът изостане, клиентът сам да доопресни състоянието
