Memory Duel v8.1.1

Основен фикс:
- премахнат async/await от Supabase auth.onAuthStateChange callback
- добавени abortable timeout-и за Supabase заявки, за да не остават висящи request-и
- dedupe за lobby и active-room заявките
- по-предпазлив online start flow
- copy иконката до room кода е смалена

SQL migration:
- не е нужна нова SQL migration за този фикс
