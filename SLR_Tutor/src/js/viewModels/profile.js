/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojknockout',
            'ojs/ojinputtext', 'ojs/ojbutton'],
 function(oj, ko, $, app) {
  
    function ProfileViewModel() {
      var self = this;
      
      self.nickname = ko.observable("");
      self.loginname = ko.observable("");
      self.password = ko.observable("");
      self.prefs = plugins.appPreferences;
      
        function fetchFailure(error) {
            console.error("fetch error: " + error);
        } 
      
        function storeSuccess(data) { 
            console.log("stored successfully: " + data);
        }

        function storeFailure(error) {
            console.error("store error: " + error);
        }
        
        self.prefs.fetch(function(value) {
            console.log("nickname: " + value);
            self.nickname(value);
            app.router.store(self.nickname());
        }, fetchFailure, 'profile', 'nickname');
        
        self.prefs.fetch(function(value) {
            console.log("loginname: " + value);
            self.loginname(value);
        }, fetchFailure, 'profile', 'loginname');
        
        self.prefs.fetch(function(value) {
            console.log("password: " + value);
            self.password(value);
        }, fetchFailure, 'profile', 'password');
      
      self.savePreferences = function(data, event){
          console.log("savePreferences: ");
          console.log("nickname: " + self.nickname());
          console.log("loginname: " + self.loginname());
          console.log("password: " + self.password());
          
          self.prefs.store(storeSuccess, storeFailure, 'profile', 'nickname', self.nickname());
          self.prefs.store(storeSuccess, storeFailure, 'profile', 'loginname', self.loginname());
          self.prefs.store(storeSuccess, storeFailure, 'profile', 'password', self.password());
          
          app.avatarUsername(self.nickname());
          return true;
      };
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new ProfileViewModel();
  }
);
