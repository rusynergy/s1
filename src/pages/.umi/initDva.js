import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});
app.use(require('/var/www/synergy/data/www/namecatcher.ru/app/node_modules/dva-immer/lib/index.js').default());
app.model({ namespace: 'auth', ...(require('/var/www/synergy/data/www/namecatcher.ru/app/src/models/auth.js').default) });
