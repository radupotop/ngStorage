A simple localStorage wrapper for AngularJS.  
It serializes data to JSON.

Bootstrapping:

    angular.module('yourApp', ['ngStorage']);
    angular.controller('yourController', function(storage) {});

Usage:

    storage.set('key', value);
    storage.get('key');
    storage.remove('key');


Author: Radu Potop  
License: MIT
