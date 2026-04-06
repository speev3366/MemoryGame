# Memory Duel V8.0.9

Тази ревизия е насочена към стабилизиране на online режима без рестарт на проекта.

## Какво е променено
- ограничени са паралелните room/lobby заявки към Supabase
- добавен е dedupe и кратък cache за `fetchRoomById`, за да не се наводнява клиентът с еднакви заявки
- waiting/playing state вече не се чисти агресивно при временен timeout
- realtime resubscribe-ът е по-пестелив и не отваря излишни канали
- lobby refresh е throttle-нат, за да не товари базата постоянно
- запазен е fallback resync при `start / flip / unlock / timeout`

## Файлове
- `scripts.js` — клиентски online fix
- `supabase-migration-v8.0.9.sql` — индекси и стабилизация за online rooms заявките

## Ако вече имаш работещ Supabase проект
1. Качи новите файлове в GitHub Pages.
2. Пусни `supabase-migration-v8.0.9.sql` в Supabase SQL Editor.
3. Направи `Ctrl + F5` и на двата клиента / браузъра.

## Очакван ефект
- след като Player 2 се присъедини, host трябва да може да стартира без ръчен refresh
- след старт на мача ходовете трябва да се отразяват без постоянно презареждане
- ако realtime каналът изостане, клиентът сам да доопресни състоянието
