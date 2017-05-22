(function () {

    angular.module('App')
        .controller('loginController', loginController);

    function loginController(studentFactory, $state, $stateParams) {
        var vm = this;
        vm.currentStudent = studentFactory.getCurrentStudent();
        vm.subject = studentFactory.getSubject();
        vm.mark = studentFactory.getMark();

        vm.profile = true;

        vm.loginStudent = function () {
            studentFactory.login(vm.email, vm.password)
                .then(function (response) {
                    vm.error = false;
                    vm.msgerror = '';
                    vm.currentStudent = response.data;


                    console.log(response.data);
                    if (typeof (vm.currentStudent.studentId) == "undefined") {
                        vm.error = true;
                        vm.msgerror = "Email o contraseña incorrecto";

                    } else {
                        studentFactory.setCurrentStudent(vm.currentStudent);
                        $state.go('profileStudent');
                        console.log(vm.subject);
                    }
                }, function (response) {
                    vm.error = true;
                    vm.msgerror = response.data;
                });

        };

        vm.logoutStudent = function () {
            studentFactory.logout();
            $state.go('loginStudent');
            delete vm.currentStudent;
        };

        vm.isLoggedStudent = function () {
            return studentFactory.isLogged();
        };

        vm.isProfile = function () {
            return vm.profile;

        };

        vm.profileTrue = function () {
            vm.profile = true;
        };

        vm.profileFalse = function () {
            vm.profile = false;
        };

        vm.sexStudent = function () {

            if (vm.currentStudent.sex == 'female') {

                return false;


            } else if (vm.currentStudent.sex == 'male') {
                return true;

            }
        };

        //objeto asignatura


        vm.getSubject = function (subject, firstTrimester, secondTrimester, thirdTrimester) {
         
            studentFactory.setSubject(subject);
            studentFactory.setMark(firstTrimester, secondTrimester, thirdTrimester);
            $state.reload();
            console.log(studentFactory.getSubject());
        };

        vm.changedSubject = function(){
            
            vm.subject = studentFactory.getSubject();
        };
    
  
    }

}()); // Sintáxis JS para invocación inmediata