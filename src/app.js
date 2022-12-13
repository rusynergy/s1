import { setLocale } from 'umi-plugin-react/locale';
setLocale('ru-RU');

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
