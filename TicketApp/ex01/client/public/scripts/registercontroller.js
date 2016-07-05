var registercontroller;
(function (registercontroller) {
    function init(app) {
        app.controller('registercontroller', function ($scope) {
            const validEmail = /^[a-z][a-z0-9|.]{2,}[a-z0-9]@[a-z]{4,}.[a-z]{2,4}$/;
            const validPassword = /^[a-z0-9]{8,}$/;
            const validateString = (pattern, s) => (s ? s : "").toLowerCase().search(pattern) !== -1;
            $scope.errormsg = "unknown error!";
            $scope.cancel = () => { location.href = "#/login"; };
            $scope.register = () => {
            };
            $scope.validateEmail = email => {
                $scope.emailIsValid = validateString(validEmail, email);
                return $scope.emailIsValid;
            };
            $scope.validatePassword = password => {
                $scope.passwordIsValid = validateString(validPassword, password);
                return $scope.passwordIsValid;
            };
        });
    }
    registercontroller.init = init;
})(registercontroller || (registercontroller = {}));
