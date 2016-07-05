module logincontroller {
    export function init(app: ng.IModule) {
        app.controller('logincontroller', function ($scope: ILoginScope) {
            
        })
    }

    interface ILoginScope extends ng.IScope {
        email: string
        password: string
        errormsg: string
        login: () => void
        register: () => void
    }
}