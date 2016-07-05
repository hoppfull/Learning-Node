module logincontroller {
    export function init(app: ng.IModule) {
        app.controller('logincontroller', function ($scope: ILoginScope) {
            $scope.errormsg = "unknown error!"

            $scope.login = () => {

            }

            $scope.register = () => { location.href = "#/register" }
        })
    }

    interface ILoginScope extends ng.IScope {
        email: string
        password: string
        errormsg: string
        error: boolean
        login: () => void
        register: () => void
    }
}