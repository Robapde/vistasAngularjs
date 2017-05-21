(function () {
    angular.module('App')
        .controller('preStartController', preStartController);
    
    function preStartController($state,$stateParams){
        var vm = this;
        
         vm.goLogin = function () {
            $state.go('login');
        };
        vm.goRegister = function () {
            $state.go('register');
        };
    }

}())
