angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('purple.page1', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
      }
    }
  })

  .state('purple.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('purple.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('purple', {
    url: '/side-menu21',
    templateUrl: 'templates/purple.html',
    abstract:true
  })

  .state('purple.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('purple.signup', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('purple.dashboard', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('purple.selectDestination', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectDestination.html',
        controller: 'selectDestinationCtrl'
      }
    }
  })

  .state('purple.packageDetails', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/packageDetails.html',
        controller: 'packageDetailsCtrl'
      }
    }
  })

  .state('fedExPackage', {
    url: '/page9',
    templateUrl: 'templates/fedExPackage.html',
    controller: 'fedExPackageCtrl'
  })

  .state('customPackage', {
    url: '/page10',
    templateUrl: 'templates/customPackage.html',
    controller: 'customPackageCtrl'
  })

  .state('openItem', {
    url: '/page11',
    templateUrl: 'templates/openItem.html',
    controller: 'openItemCtrl'
  })

  .state('schedulePickup', {
    url: '/page12',
    templateUrl: 'templates/schedulePickup.html',
    controller: 'schedulePickupCtrl'
  })

  .state('payment', {
    url: '/page13',
    templateUrl: 'templates/payment.html',
    controller: 'paymentCtrl'
  })

  .state('finalReview', {
    url: '/page14',
    templateUrl: 'templates/finalReview.html',
    controller: 'finalReviewCtrl'
  })

  .state('deliveryOptions', {
    url: '/page15',
    templateUrl: 'templates/deliveryOptions.html',
    controller: 'deliveryOptionsCtrl'
  })

    .state('recipient', {
      url: '/page16',
      templateUrl: 'templates/recipient.html',
      controller: 'recipientCtrl'
    })
$urlRouterProvider.otherwise('/side-menu21/page1')



});
