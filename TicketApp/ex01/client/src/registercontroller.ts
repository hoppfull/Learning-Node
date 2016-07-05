module registercontroller {
    export function init(app: ng.IModule) {
        app.controller('registercontroller', function ($scope: IRegisterScope) {
            const validEmail = /^[a-z][a-z0-9|.]{2,}[a-z0-9]@[a-z]{4,}.[a-z]{2,4}$/
            const validPassword = /^[a-z0-9]{8,}$/
            const validateString = (pattern: RegExp, s: string) =>
                (s ? s : "").toLowerCase().search(pattern) !== -1

            $scope.errormsg = "unknown error!"

            $scope.cancel = () => { location.href = "#/login" }

            $scope.register = () => {

            }

            $scope.validateEmail = email => {
                $scope.emailIsValid = validateString(validEmail, email)
                return $scope.emailIsValid
            }

            $scope.validatePassword = password => {
                $scope.passwordIsValid = validateString(validPassword, password)
                return $scope.passwordIsValid
            }
        })
    }

    interface IRegisterScope extends ng.IScope {
        email1: string
        email2: string
        password1: string
        password2: string
        errormsg: string
        error: boolean
        cancel: () => void
        register: () => void
        validateEmail: (email: string) => boolean
        validatePassword: (password: string) => boolean
        emailIsValid: boolean
        passwordIsValid: boolean
    }
}