
import router from 'umi/router';
import {message} from 'antd';

import {loginPath, defaultPath} from 'config';
import api from 'api';


const key = 'data-model';

export default  {
    namespace: 'data',
    state: {
        star: 0,
        point: 0,
    },
    subscriptions: {

    },
    effects: {
        *setFormErrors({payload, form}) {
            yield payload.forEach(({field, message}) => {
                const value = form.getFieldValue(field);
                form.setFields({
                    [field]: {
                        value,
                        errors: [new Error(message)],
                    }
                });
            });
            message.error(payload && payload[0] && payload[0].message || 'Ошибка');
        },

        *set({payload = {}}, {call, put, select}) {
       //     console.log('data-set', payload);
            yield put({
    		    type: 'updateState',
    			payload: payload,
    		});
        },

    },
    reducers: {
        updateState(state, {payload}) {
            return {
                ...state,
                ...payload,
            };
        },
        error(state, {payload}){
          state.isError = true;
          state.ErrorText = payload.text;
        },
        logout(state) {
            state.isGuest = true;
        },
    },
};
