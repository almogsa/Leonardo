(function(module) {
try {
  module = angular.module('stateRouterScenario.templates');
} catch (e) {
  module = angular.module('stateRouterScenario.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modal.html',
    '<div class="modal-header"><h3 class="modal-title">Scenario Config</h3></div><div class="modal-body"><ul class="clearfix"><li ng-repeat="item in items" ng-class="{ \\\'is-group\\\': item.length > 1 }"><div ng-if="item.length === 1"><label>{{item[0].text}}</label><div class="onoffswitch"><input ng-model="item[0].selected" class="onoffswitch-checkbox" id="{{item[0].name}}" type="checkbox" name="{{item[0].name}}" value="{{item[0].name}}"><label class="onoffswitch-label" for="{{item[0].name}}"><span class="onoffswitch-inner"></span> <span class="onoffswitch-switch"></span></label></div></div><div ng-if="item.length > 1" class="group"><h4 ng-if="item.title">{{item.title}}</h4><ul class="clearfix"><li><label>Default</label><input ng-model="item.selected" type="radio" name="multi_{{$parent.$index}}" value="default"></li><li ng-repeat="subItem in item"><label>{{subItem.text}}</label><input ng-model="item.selected" type="radio" name="multi_{{$parent.$index}}" value="{{subItem.name}}"></li></ul></div></li></ul></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button> <button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>');
}]);
})();
