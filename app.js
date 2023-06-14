(function () {

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController );
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope,$injector){
//$scope.x="3aza";
$scope.say=function(){
var str=$scope.menu;
$scope.msg=verif(str);
}

function verif(str){
if (str=="")
    {
      return "Please enter data first";

    }
else {
  nb=nbritem(str);
  if(nb<=3)
  {return "Enjoy";}
  else {
      return "Too much!";
  }
}
  }
function nbritem(str){
  tab=[];
  tab=str.split(',');
  return (tab.length);
}

}
})();
