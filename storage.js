var Storage = angular.module('Storage', []);

/**
 * Storage service.
 * Store data in localStorage serialized as JSON.
 */
Storage.service('storage', function() {
    
    var API = {};
    var version = 1;
    
    /**
     * Set value
     */
    API.set = function(key, value) {
        try {
            return localStorage.setItem(key, angular.toJson(value));
        } catch (e) {
            throw new Error('Storage set error for key <'+key+'> value <'+value+'>');
        }
    };
    
    /**
     * Get value
     */
    API.get = function(key) {
        try {
            return angular.fromJson(localStorage.getItem(key));
        } catch (e) {
            throw new Error('Storage get error for key <'+key+'>');
        }
    };
    
    /**
     * Remove value
     */
    API.remove = function(key) {
        return localStorage.removeItem(key);
    };
    
    /**
     * Clear storage in old format
     */
    if(API.get('v') !== version) {
        localStorage.clear();
        API.set('v', version);
    }
    
    return API;
    
});
