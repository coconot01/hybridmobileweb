/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'appController'],
function(oj, ko, $, app) {
function HomeChild1ViewModel() {
var self = this;
self.goBack = function() {
window.history.back();
};
self.goHome = function() {
app.router.go('home');
}
self.goHomeChild2 = function() {
app.router.go('homechild_2');
}
self.handleActivated = function(info) {
var data = app.router.retrieve();
console.log("data: " + JSON.stringify(data));
data.newKey = 'new value';
app.router.store(data);
};
}
return new HomeChild1ViewModel();
}
);
