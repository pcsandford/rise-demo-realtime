/* global connectRTC */

"use strict";

angular.module("rtc-proto")
.service("RTCService", ["CLIENT", function(CLIENT) {
  return connectRTC(CLIENT);
}])
.controller("QRCtrl", ["$scope", "$state", "RTCService", function($scope, $state, RTCService) {
  RTCService.onClientSessionStarted = function() {
    $state.go("anchor-sample-1");
  };

  $scope.getTime = function() {
    return new Date().getTime();
  };
}])
.controller("AnchorSampleCtrl", ["$scope", "$state", "$timeout", "RTCService", 
function($scope, $state, $timeout, RTCService) {
  $scope.timeoutPromise = null;

  $scope.resetTimeout = function() {
    if($scope.timeoutPromise !== null) {
      $timeout.cancel($scope.timeoutPromise);
    }

    $scope.timeoutPromise = $timeout(function() {
      $state.go("qr-code");
    }, 10000);
  };

  $scope.initServer = function() {
    // Initialize
    if(!RTCService.isClient()) {
      $scope.resetTimeout();

      RTCService.listenUrlChanges();
    }
  };

  RTCService.onClientSessionStarted = function() {
    $scope.initServer();
  };
}])
;
