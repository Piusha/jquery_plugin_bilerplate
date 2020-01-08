/**
 * Created data:08-01-2020
 * Plugin description
 */

(function($, window, document) {
    'use strict';

    /**
     * Specify the plugin name 
     * Use var for old version of browsers if you are not comple for
     * ES5
     * 
     */
    const pluginName = 'jqueryPluginTemplate';

    /**
     * Base prototy class name to initialize plugin
     * @param {} element 
     * @param {*} options 
     */
    function JqueryPluginTemplate(element, options = {}) {
        this.element = element;
        this.options = options;
        this.init();

    }

    /**
     * Featuer Class Main Class
     */
    var App = {
        /**
         * You can still use ES6 syntax if compile for ES5 
         */
        init: function() {
            console.log(this.options);
            console.log(this.element)
            this.actionListeners();
        },

        actionListeners: function() {
            //All Actions will goes here
        }
    }


    $.extend(JqueryPluginTemplate.prototype, App);

    $.fn[pluginName] = function(options) {

        if (!$.data(this, pluginName)) { // Check if this plugin need to initialized only one time 

            return this.each(function() {
                $.data(this, pluginName, new JqueryPluginTemplate(this, options));
            });
        }

        // For Selector Less Plugin 
        /**
         
        $[pluginName] = function (options) {

            $.data(document, pluginName, new JqueryPluginTemplate(this, options));
        }
        
         */
    }
})(jQuery, window, document);