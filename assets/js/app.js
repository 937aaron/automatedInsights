var wordsmith = angular.module('wordsmith',[]);
  wordsmith.controller('wordsmithCtlr', function($scope){
    $scope.formBoxShow = true;
    $scope.videoShow= false;
    $scope.tiles = [
      {title: 'Wordsmith for Spreadsheets',
       description: "Who doesn't love a good spreadsheet?",
       linkStyle: 'Learn More >',
       img: 'assets/excell.png'},
       {title: 'Ping Pong',
        description: "Wordsmith promises a 60% higher win rate 100% of the time!",
        linkStyle: 'Learn More >',
        img: 'assets/pingPong.png'},
        {title: 'Zapier',
         description: "It's not a taser, we promise. It's just awesome.",
         linkStyle: 'Learn More >',
         img: 'assets/wordsmith.png'},
         {title: 'Video Games',
          description: "Wordsmith plus Mariokart? Oh that is a whole new level!",
          linkStyle: 'Learn More >',
          img: 'assets/mariokart.png'}

    ]
    $scope.videoShowFunc = function(){
      $scope.formBoxShow = false;
      $scope.videoShow= true;
    }
  })
