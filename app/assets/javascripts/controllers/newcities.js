angular
  .module('newCityController', [])
  .controller('NewCityController', ['$scope', '$http',
  function($scope, $http){

      $scope.city = {}

      $scope.city.name
      $scope.city.country
      $scope.city.image
      $scope.city.food
      $scope.city.nightlife
      $scope.city.attractions
      $scope.city.visited

      $scope.savedCities = []

     $scope.visitVar = true

      $scope.saveCity = function(){
        if($scope.city.visited = 'yes'){ $scope.city.visited = true }
      $http.post('/api/cities', $scope.city).then(function(response){
        console.log(response.data.city);
      $scope.savedCities.push(response.data.city)

        })
      }

      $http.get('/api/cities').then(function(response){

      $scope.savedCities = response.data.cities;
    })

    $scope.removeCity = function(city){
      $http.delete('/api/cities/' + city.id).then(function(response){
        console.log(response);
        if(response){
          $scope.savedCities = $scope.savedCities.filter(function(f){
              return f.id != city.id;
            })
        }
      })
    }

    $scope.editCity = function(city){
      if(this.city.visited = 'yes'){ this.city.visited = true }
    $http.put('/api/cities/' + city.id, this.city).then(function(response){
      console.log(response);

      })
    }


    $scope.togVisit =function(){
      $scope.visitVar = !$scope.visitVar
    }






  }])
