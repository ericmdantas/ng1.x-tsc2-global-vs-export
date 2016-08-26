export interface ISomething {
    doIt(): void
}

;(function(ng: ng.IAngularStatic) {
    "use strict";

    ng.module('app1', [])
      .controller('App1Ctrl', [

      ]);
}(angular));