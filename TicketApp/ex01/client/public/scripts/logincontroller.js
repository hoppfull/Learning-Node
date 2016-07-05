var logincontroller;
(function (logincontroller) {
    function init(app) {
        app.controller('logincontroller', function ($scope) {
            $scope.errormsg = "unknown error!";
            $scope.login = () => {
            };
            $scope.register = () => { location.href = "#/register"; };
        });
    }
    logincontroller.init = init;
})(logincontroller || (logincontroller = {}));
