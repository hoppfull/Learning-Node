var logincontroller;
(function (logincontroller) {
    function init(app) {
        app.controller('logincontroller', function ($scope) {
            $scope.errormsg = "unknown error!";
            $scope.login = () => {
                console.log($scope.email);
            };
            $scope.register = () => { location.href = "#/register"; };
        });
    }
    logincontroller.init = init;
})(logincontroller || (logincontroller = {}));
