(function () {

    var App = angular.module("App", ['ui.router']);
    App.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("profileStudent");

        $stateProvider
            .state('loginStudent', {
                url: "/loginStudent",
                templateUrl: "templates/loginStudent.html",
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .state('loginSaff', {
                url: "/loginSaff",
                templateUrl: "templates/loginStaff.html",
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .state('profileStudent', {
                url: "/profileStudent",
                templateUrl: "templates/profileStudent.html",
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .state('register', {
                url: "/register",
                templateUrl: "templates/register.html",
                controller: 'loginController',
                controllerAs: 'vm'
            })

            .state('preStart', {
                url: "/preStart",
                templateUrl: "templates/prestart.html",
                controller: 'preStartController',
                controllerAs: 'vm'

            })
            .state('studentRegister', {
                url: "/studentRegister",
                templateUrl: "templates/studentRegister.html",
                controller: 'loginController',
                controllerAs: 'vm'

            })

            .state('staffRegister', {
                url: "/staffRegister",
                templateUrl: "templates/staffRegister.html",
                controller: 'loginController',
                controllerAs: 'vm'

            })
        /*.state('nuevacita',{
            url: "/nuevacita"    ,
            templateUrl: "templates/nueva-solicitud.html",
            controller: 'NuevaCitaController',
            controllerAs: "vm"
        })
        .state('listaCitas',{
            url: "/listaCitas"  ,
            templateUrl: "templates/mis-citas.html" ,
            controller: "NuevaCitaController"    ,
            controllerAs: "vm"
        })*/

    });


}());
