function main() {
    const app = angular.module('app', ['ngRoute']);
    loginservice.init(app);
    logincontroller.init(app);
    registercontroller.init(app);
    ticketappcontroller.init(app);
    routeprovider.init(app);
}
