import {resolve} from 'path';

// ref: https://umijs.org/config/
export default {
	hash: false,
    treeShaking: true,
    "theme": {
        "primary-color": "#7460EE",
    },
    devServer: {
        https: true,
        public: 'https://test.pro:8000/'
    },
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: {
                immer: true,
            },
            dynamicImport: false,
            title: 'Test',
            dll: false,
            routes: {
                exclude: [
                    /model\.(j|t)sx?$/,
                    /service\.(j|t)sx?$/,
                    /models\//,
                    /components\//,
                    /services\//,
                ],
            },
        }],
    ],

    proxy: {
        '/api': {
            target: 'https://test.pro',
            changeOrigin: true,
			secure: false,
		    cookieDomainRewrite: "test.pro",
        },
    },
    alias: {
        api: resolve(__dirname, './src/services/'),
        components: resolve(__dirname, './src/components'),
        config: resolve(__dirname, './src/utils/config'),
        models: resolve(__dirname, './src/models'),
        services: resolve(__dirname, './src/services'),
        utils: resolve(__dirname, './src/utils'),
    },
	disableCSSModules: true,


}
