module loginservice {
    export function init(app: ng.IModule) {
        app.service('$loginservice', () => {
            let usertoken: string = null
            return {
                login: (token: string) => {
                    usertoken = token
                    location.href = '#/ticketapp'
                },
                logout: () => {
                    usertoken = null
                    location.href = '#/login'
                }
            }
        })
    }
}