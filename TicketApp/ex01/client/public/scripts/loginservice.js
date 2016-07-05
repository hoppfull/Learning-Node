var loginservice;
(function (loginservice) {
    function init(app) {
        app.service('$loginservice', () => {
            let usertoken = null;
            return {
                login: (token) => {
                    usertoken = token;
                    location.href = '#/ticketapp';
                },
                logout: () => {
                    usertoken = null;
                    location.href = '#/login';
                }
            };
        });
    }
    loginservice.init = init;
})(loginservice || (loginservice = {}));
