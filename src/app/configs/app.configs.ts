export const appConfigs = {
    env: 'development',
    prodMode: {
        development: false,
        testing: false,
        staging: true,
        production: true
    },
    startDelay: 1500,
    appMainTitle: 'Delivery Boy App',
    appMainThemeColor: '#f46f25',
    appMainIcon: 'assets/images/c9_favicon.png',
    appSplashIcon: 'assets/images/c9_logo.svg',
    geocodingUrl: 'https://maps.googleapis.com/maps/api/geocode/json?',
    mapApiUrl: 'https://maps.googleapis.com/maps/api/js?',
    locationCheckInterval: 5000,
    api: {
        development: {
            /* baseUrl: 'http://192.168.43.229/fms-new/public/', */
            baseUrl: 'http://192.168.1.4/fms-new/public/',
            version: '1',
            username: 'mobile-1',
            password: '2sQG7reKF*cAAmfD$yccPM6',
            mockApi: false,
            googleApiKey: 'AIzaSyApRpIGdrIZRRsaPLHdp_Dlq5hDMyZ4PzA',
            authRetryLoop: 12,
        },
        testing: {
            /* baseUrl: 'http://192.168.43.229/fms-new/public/', */
            baseUrl: 'http://192.168.1.4/fms-new/public/',
            version: '1',
            username: 'mobile-1',
            password: '2sQG7reKF*cAAmfD$yccPM6',
            googleApiKey: 'AIzaSyApRpIGdrIZRRsaPLHdp_Dlq5hDMyZ4PzA',
            authRetryLoop: 12,
        },
        staging: {
            /* baseUrl: 'http://192.168.43.229/fms-new/public/', */
            baseUrl: 'http://192.168.1.4/fms-new/public/',
            version: '1',
            username: 'mobile-1',
            password: '2sQG7reKF*cAAmfD$yccPM6',
            googleApiKey: 'AIzaSyApRpIGdrIZRRsaPLHdp_Dlq5hDMyZ4PzA',
            authRetryLoop: 12,
        },
        production: {
            /* baseUrl: 'http://192.168.43.229/fms-new/public/', */
            baseUrl: 'http://192.168.1.4/fms-new/public/',
            version: '1',
            username: 'mobile-1',
            password: '2sQG7reKF*cAAmfD$yccPM6',
            googleApiKey: 'AIzaSyApRpIGdrIZRRsaPLHdp_Dlq5hDMyZ4PzA',
            authRetryLoop: 12,
        },
    },
    oneSignal: {
        development: {
            enabled: false,
            appId: 'd2af0d01-65e6-4ce7-812a-79831e7afcdb',
            googleProjectNumber: '1:167942438323:android:46d8e9738882befc3f9fc6'
        },
        testing: {
            enabled: false,
            appId: 'd2af0d01-65e6-4ce7-812a-79831e7afcdb',
            googleProjectNumber: '1:167942438323:android:46d8e9738882befc3f9fc6'
        },
        staging: {
            enabled: false,
            appId: '976f06df-7bcf-416d-9877-e58fc872d212',
            googleProjectNumber: '1:167942438323:android:46d8e9738882befc3f9fc6'
        },
        production: {
            enabled: false,
            appId: '976f06df-7bcf-416d-9877-e58fc872d212',
            googleProjectNumber: '1:167942438323:android:46d8e9738882befc3f9fc6'
        }
    },
    firebase: {
        development: {
            enabled: false,
        },
        testing: {
            enabled: false,
        },
        staging: {
            enabled: false,
        },
        production: {
            enabled: false,
        }
    },
    locationTracking: {
        development: {
            enabled: true,
            trackingInterval: 5
        },
        testing: {
            enabled: true,
            trackingInterval: 5
        },
        staging: {
            enabled: true,
            trackingInterval: 5
        },
        production: {
            enabled: true,
            trackingInterval: 2
        }
    },
};
