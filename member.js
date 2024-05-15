function skillsMember(){
    return{
        templateUrl:'modules/skills/views/member.html', 
        controller:'Skills;emberController', 
        controllerAs:'vm', 
        bindToController: true, 
        scope:{
            member:'='
        }

        }; 
    }
}
