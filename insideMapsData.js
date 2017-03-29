var app = angular.module('InsideMapsData', ['ui.bootstrap']);
app.controller('MainCtrl', function($scope) {
  console.log("Loaded");
  $scope.slides = [
    {
      image: './img/1.jpg',
      text: "Hello"
    },
    {
      image: './img/2.jpg',
      text: "Mello"
    },
    {
      image: './img/3.jpg',
      text: "Gello"
    },
    {
        image: './img/4.jpg',
        text: "Fello"
    },
    {
        image: './img/5.jpg',
        text: "Fello"
    },
    {
        image: './img/6.jpg',
        text: "Fello"
    },
    {
        image: './img/7.jpg',
        text: "Fello"
    },
    {
        image: './img/8.jpg',
        text: "Fello"
    },
    {
        image: './img/9.jpg',
        text: "Fello"
    },
    {
        image: './img/10.jpg',
        text: "Fello"
    },
    {
        image: './img/11.jpg',
        text: "Fello"
    },
    {
        image: './img/12.jpg',
        text: "Fello"
    }
  ];
});
