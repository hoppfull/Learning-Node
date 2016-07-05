var routeprovider;
(function (routeprovider) {
    function init(app) {
        app.config(($routeProvider) => {
            $routeProvider
                .when('/login', {
                templateUrl: 'login.html',
                controller: 'logincontroller'
            })
                .when('/register', {
                templateUrl: 'register.html',
                controller: 'registercontroller'
            })
                .when('/ticketapp', {
                templateUrl: 'ticketapp.html',
                controller: 'ticketappcontroller'
            })
                .otherwise({ redirectTo: '/login' });
        });
    }
    routeprovider.init = init;
})(routeprovider || (routeprovider = {}));
