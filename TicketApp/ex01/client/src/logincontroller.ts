module logincontroller {
    export function init(app: ng.IModule) {
        app.controller('logincontroller', function ($scope: ILoginScope, $http: ng.IHttpService) {
            $scope.errormsg = "unknown error!"

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
                    console.log(response.data)
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
}