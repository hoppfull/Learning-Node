var logincontroller;
(function (logincontroller) {
    function init(app) {
        app.controller('logincontroller', function ($scope, $http) {
            $scope.errormsg = "unknown error!";
            $scope.login = () => {
                // $http.post('/login', { email: "tjosan", password: "hoppsan" })
                //     .then(response => {
                //         console.log(response.data)
                //     })
                $http({
                    url: '/login',
                    method: 'POST',
                    data: { x: 0, y: "hello" },
                    headers: { 'Content-Type': 'application/json' }
                }).then(response => {
                    console.log(response.data);
                });
            };
            $scope.register = () => { location.href = "#/register"; };
        });
    }
    logincontroller.init = init;
})(logincontroller || (logincontroller = {}));
