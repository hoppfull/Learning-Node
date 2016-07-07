module logincontroller {
    export function init(app: ng.IModule) {
        app.controller('logincontroller', function ($scope: ILoginScope, $http: ng.IHttpService) {
            $scope.errormsg = "unknown error!"

            $scope.login = () => {
                $http.post('/login', { email: "admin@email.com", password: "root" })
                    .then(response => {
                        const data = <ILoginResponse>response.data
                        console.log(data.token)
                    })
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

    interface ILoginResponse {
        ok: boolean,
        token: string
    }
}