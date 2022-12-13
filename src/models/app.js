
import router from 'umi/router';
import {message} from 'antd';

import {loginPath, defaultPath} from 'config';
import api from 'api';

export default  {
	namespace: 'app',
	state: {
		isGuest: true,
		isError: false,
		ErrorText: '',
		from: defaultPath,
	},
	subscriptions: { 
	}
}