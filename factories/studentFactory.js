(function() {    
    angular.module('App')  
        .factory('studentFactory', studentFactory);     
    function studentFactory($http){ 
        
        var currentStudent;
          
        var interface = {            
            //Methods of the service
            getStudent:  function(){
                return $http.get("http://192.168.0.14:8080/student/list");
            },               
            /*getOwner:  function(ownerId){
                return $http.get('http://localhost:8080/owner/'+ ownerId);
            },
            createOwner: function(owner){
                return $http.post("http://localhost:8080/owner", owner);
            },        
            editOwner: function(id, owner){
                return $http.put("http://localhost:8080/owner/" + id, owner);
            },*/
            login: function(email,password){
                return $http.get("http://192.168.0.14:8080/student/login?email="+email+"&pass="+password);
            },
            logout: function(){
                currentStudent = undefined;
            },
            setCurrentStudent: function(student){
                currentStudent = student;
            },
            getCurrentStudent: function(){
                return currentStudent;
            },
            isLogged: function(){
                return typeof(currentStudent) !== "undefined"
            }
        }
        return interface;
    }    
}())