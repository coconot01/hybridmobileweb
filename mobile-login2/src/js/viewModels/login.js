/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'appController'],
function(oj, ko, $, app) {
    function LoginViewModel() {
        var self = this;
        self.doLogin = function() {
            app.doLogin();
        };
    }
    return new LoginViewModel();
});
