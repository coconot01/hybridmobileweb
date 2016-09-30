/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 
    'ojs/ojinputtext'],
function(oj, ko, $, app) {
    function FilmDetailViewModel() {
        var self = this;
        
        self.handleActivated = function(info) { // 데이터를 읽어 오는 로직 구현
            var currentValue = app.router.currentValue();
        
            self.title = ko.observable();
            self.episode_id = ko.observable();
            self.opening_crawl = ko.observable();
            self.director = ko.observable();
            self.producer = ko.observable();
            self.release_date = ko.observable();
            
            $.get(currentValue, null, function(json, status) {
                console.log(json);
                self.title(json.title);
                self.episode_id(json.episode_id);
                self.opening_crawl(json.opening_crawl);
                self.director(json.director);
                self.producer(json.producer);
                self.release_date(json.release_date);
            });
        };
        
        self.goBack = function() {
            window.history.back();
        };
    }
    return new FilmDetailViewModel();
}
);

