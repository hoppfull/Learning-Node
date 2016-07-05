module routeprovider {
    export function init(app: ng.IModule) {
        app.config(($routeProvider: angular.route.IRouteProvider) => {
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
                .otherwise({ redirectTo: '/login' })
        })
    }
}