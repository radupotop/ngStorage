/**
 * Storage service.
 * Store data in localStorage serialized as JSON.
 */
angular.module('ngStorage', []).service('storage', function() {

    var version = 1;

    /**
     * Set value
     */
    function set(key, value) {
        try {
            return localStorage.setItem(key, angular.toJson(value));
        } catch (e) {
            throw new Error('Storage set error for key: ' + key);
        }
    }

    /**
     * Get value
     */
    function get(key) {
        try {
            return angular.fromJson(localStorage.getItem(key));
        } catch (e) {
            throw new Error('Storage get error for key: ' + key);
        }
    }

    /**
     * Remove value
     */
    function remove(key) {
        return localStorage.removeItem(key);
    }

    /**
     * Clear storage in old format
     */
    if(get('v') !== version) {
        localStorage.clear();
        set('v', version);
    }

    /**
     * Expose public API
     */
    return {
        get: get,
        set: set,
        remove: remove
    };

});
