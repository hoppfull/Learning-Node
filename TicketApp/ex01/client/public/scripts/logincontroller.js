var logincontroller;
(function (logincontroller) {
    function init(app) {
        app.controller('logincontroller', function ($scope, $http) {
            $scope.errormsg = "unknown error!";
            $scope.login = () => {
                $http.post('/login', { email: "admin@email.com", password: "root" })
                    .then(response => {
                    const data = response.data;
                    console.log(data.token);
                });
            };
            $scope.register = () => { location.href = "#/register"; };
        });
    }
    logincontroller.init = init;
})(logincontroller || (logincontroller = {}));
