var app = angular.module('orden',['ui.bootstrap','ngRoute','cp.ngConfirm']);

angular.module('orden').value('BASEURL', '');
angular.module('orden').value('APIURL', '');
angular.module('orden').config(function ($provide) {
    $provide.decorator('BASEURL', function ($delegate, $window) {
        return $window.BASEURL;
    });
});
angular.module('orden').config(function ($provide) {
    $provide.decorator('APIURL', function ($delegate, $window) {
        return $window.APIURL;
    });
});