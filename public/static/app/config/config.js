var appUnlogin = angular.module('unlogin_h5', ['ui.router']);
appUnlogin.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/static/app/view/login.html',
            controller: 'loginController'
        })
        .state('reg', {
            url: '/reg',
            templateUrl: '/static/app/view/reg.html',
            controller: 'regController'
        })
}]);
var appLogin = angular.module('login_h5', ['ui.router', 'ng-iscroll']);
appLogin.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/index');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/static/app/view/home.html'
        })
        .state('home.index', {
            url: '/index',
            templateUrl: '/static/app/view/home.index.html',
            controller: 'homeController'
        })
        .state('home.info', {
            url: '/info',
            templateUrl: '/static/app/view/home.info.html',
            controller: 'homeInfoController'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: '/static/app/view/home.list.html',
            controller: 'homeListController'
        })
        .state('home.class', {
            url: '/class/:ctn',
            templateUrl: '/static/app/view/home.class.html',
            controller: 'homeClassController'
        })
}]);
appLogin.controller('iscrollController', ['$scope', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        setTimeout(function() {
            $scope.$parent.myScroll['wrapper'].refresh();
            $scope.$parent.myScroll['wrapper'].scrollTo(0, 0, 200);
        }, 450);
    });
}]);
