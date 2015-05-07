$traceurRuntime.options.symbols = true;
System.registerModule("index.js", [], function() {
  "use strict";
  var __moduleName = "index.js";
  var $__default = angular.module('example', ['leonardo']).run(run);
  function run($rootScope, configuration) {
    configuration.addStates([{
      name: 'state_animals_non_ajax',
      options: [{
        name: 'get kittens',
        data: ["persion", "siemi"]
      }, {
        name: 'get dogs',
        data: ["labrador"]
      }]
    }, {
      name: 'state1',
      url: 'http://url1.com',
      options: [{
        name: 'get url1 aaaa',
        status: 200,
        data: ["url1 aaa"]
      }, {
        name: 'get url1 bbbb',
        status: 200,
        data: ["url1 bbb"]
      }, {
        name: 'get url1 cccc',
        status: 200,
        data: ["url1 ccc"]
      }]
    }, {
      name: "state2",
      url: 'http://url2.com',
      options: [{
        name: 'get url2 bbbb',
        status: 404,
        data: ["url2 404 failure"]
      }]
    }, {
      name: "state3",
      url: 'http://url3.com',
      options: [{
        name: 'get url3 bbbb with delay',
        status: 200,
        data: ["url3 bbb"],
        delay: 2000
      }]
    }, {
      name: "state 4",
      options: [{
        name: 'get url4 bbbb',
        data: ["url4 bbb"]
      }]
    }]);
    $rootScope.showAnimals = function() {
      var option = configuration.getState("state_animals_non_ajax");
      alert(option ? option.data : 'No Active');
    };
  }
  return {get default() {
      return $__default;
    }};
});
System.get("index.js" + '');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBLGMsUSxRLEUsSyxDO0EsSyxlLEEsWSxHLEMsVSxBOztBLEEsSSxDLFksYSxDO0EsQSxJLEMsVSxFQUtlLENBQUEsT0FBTSxPQUFPLEFBQUMsQ0FBQyxTQUFRLENBQUcsRUFBQyxVQUFTLENBQUMsQ0FBQyxJQUN0QyxBQUFDLENBQUMsR0FBRSxDQUFDLEFBTmEsQ0FBQTtBQVNqQyxTQUFTLElBQUUsQ0FBRSxVQUFTLENBQUcsQ0FBQSxhQUFZLENBQUU7QUFNckMsZ0JBQVksVUFBVSxBQUFDLENBQUMsQ0FDdEI7QUFDRSxTQUFHLENBQUcseUJBQXVCO0FBQzdCLFlBQU0sQ0FBRyxFQUNQO0FBQUMsV0FBRyxDQUFHLGNBQVk7QUFBRyxXQUFHLENBQUcsRUFBQyxTQUFRLENBQUcsUUFBTSxDQUFDO0FBQUEsTUFBQyxDQUNoRDtBQUFDLFdBQUcsQ0FBRyxXQUFTO0FBQUcsV0FBRyxDQUFHLEVBQUMsVUFBUyxDQUFDO0FBQUEsTUFBQyxDQUN2QztBQUFBLElBQ0YsQ0FDQTtBQUNFLFNBQUcsQ0FBRyxTQUFPO0FBQ2IsUUFBRSxDQUFHLGtCQUFnQjtBQUNyQixZQUFNLENBQUcsRUFDUDtBQUFDLFdBQUcsQ0FBRyxnQkFBYztBQUFHLGFBQUssQ0FBRyxJQUFFO0FBQUcsV0FBRyxDQUFHLEVBQUMsVUFBUyxDQUFDO0FBQUEsTUFBQyxDQUN2RDtBQUFDLFdBQUcsQ0FBRyxnQkFBYztBQUFHLGFBQUssQ0FBRyxJQUFFO0FBQUksV0FBRyxDQUFHLEVBQUMsVUFBUyxDQUFDO0FBQUEsTUFBQyxDQUN4RDtBQUFDLFdBQUcsQ0FBRyxnQkFBYztBQUFHLGFBQUssQ0FBRyxJQUFFO0FBQUksV0FBRyxDQUFHLEVBQUMsVUFBUyxDQUFDO0FBQUEsTUFBQyxDQUMxRDtBQUFBLElBQ0YsQ0FDQTtBQUNFLFNBQUcsQ0FBRyxTQUFPO0FBQ2IsUUFBRSxDQUFHLGtCQUFnQjtBQUNyQixZQUFNLENBQUcsRUFDUDtBQUFDLFdBQUcsQ0FBRyxnQkFBYztBQUFHLGFBQUssQ0FBRyxJQUFFO0FBQUksV0FBRyxDQUFHLEVBQUMsa0JBQWlCLENBQUM7QUFBQSxNQUFDLENBQ2xFO0FBQUEsSUFDRixDQUNBO0FBQ0UsU0FBRyxDQUFHLFNBQU87QUFDYixRQUFFLENBQUcsa0JBQWdCO0FBQ3JCLFlBQU0sQ0FBRyxFQUNQO0FBQUMsV0FBRyxDQUFHLDJCQUF5QjtBQUFHLGFBQUssQ0FBRyxJQUFFO0FBQUksV0FBRyxDQUFHLEVBQUMsVUFBUyxDQUFDO0FBQUcsWUFBSSxDQUFHLEtBQUc7QUFBQSxNQUFDLENBQ2xGO0FBQUEsSUFDRixDQUNBO0FBQ0UsU0FBRyxDQUFHLFVBQVE7QUFDZCxZQUFNLENBQUcsRUFDUDtBQUFDLFdBQUcsQ0FBRyxnQkFBYztBQUFHLFdBQUcsQ0FBRyxFQUFDLFVBQVMsQ0FBQztBQUFBLE1BQUMsQ0FDNUM7QUFBQSxJQUNGLENBQ0YsQ0FBQyxDQUFDO0FBU0YsYUFBUyxZQUFZLEVBQUksVUFBUyxBQUFELENBQUU7QUFDakMsQUFBSSxRQUFBLENBQUEsTUFBSyxFQUFJLENBQUEsYUFBWSxTQUFTLEFBQUMsQ0FBQyx3QkFBdUIsQ0FBQyxDQUFDO0FBQzdELFVBQUksQUFBQyxDQUFDLE1BQUssRUFBSSxDQUFBLE1BQUssS0FBSyxFQUFJLFlBQVUsQ0FBRSxDQUFDO0lBQzVDLENBQUM7RUFDSDtBQUFBLEFBakVBLFNBQUEsYUFBd0I7QUFBRSx1QkFBd0I7SUFBRSxFQUE3QjtBQUVqQixDQUZ3RCxDQUFDO0FBQS9ELEtBQUssSUFBSSxBQUFDLENBQUMsWUFBbUIsR0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiL1VzZXJzL3RzaHVzaGFuL2Rldi9MZW9uYXJkby90ZW1wb3V0TUM0d05EazVOREk1TnpVeE5qVXpNakkwTWdyZWRyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFN0ZXBzIFN0YWdlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLVxuLy8qIEFkZCBsZW9uYXJkbyBtb2R1bGUgYXMgYSBkZXBlbmRhbmN5IHRvIHlvdXIgYXBwXG4vLyogWW91IGRvbmUhXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyLm1vZHVsZSgnZXhhbXBsZScsIFsnbGVvbmFyZG8nXSlcbiAgICAgICAgICAgIC5ydW4ocnVuKTtcblxuLy93ZWxsIGFsbW9zdC4uLlxuZnVuY3Rpb24gcnVuKCRyb290U2NvcGUsIGNvbmZpZ3VyYXRpb24pe1xuXG4gIC8vIEFkZGluZyBzdGF0ZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAvLyogdmlhIGFwaSAtIHlvdSBjYW4gbG9vayBhdCB0aGUgcmVzdWx0cyBieSBjbGlja2luZyBsZW9uYXJkbyBhbmQgbG9va2luZyBpbiB0aGUgY29uZmlndXJlIHRhYlxuICAvLyogdmlhIHVpIC0gY29taW5nIHNvb24uLi5cbiAgY29uZmlndXJhdGlvbi5hZGRTdGF0ZXMoW1xuICAgIHtcbiAgICAgIG5hbWU6ICdzdGF0ZV9hbmltYWxzX25vbl9hamF4JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge25hbWU6ICdnZXQga2l0dGVucycsIGRhdGE6IFtcInBlcnNpb25cIiwgXCJzaWVtaVwiXX0sXG4gICAgICAgIHtuYW1lOiAnZ2V0IGRvZ3MnLCBkYXRhOiBbXCJsYWJyYWRvclwiXX1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzdGF0ZTEnLFxuICAgICAgdXJsOiAnaHR0cDovL3VybDEuY29tJyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge25hbWU6ICdnZXQgdXJsMSBhYWFhJywgc3RhdHVzOiAyMDAsIGRhdGE6IFtcInVybDEgYWFhXCJdfSxcbiAgICAgICAge25hbWU6ICdnZXQgdXJsMSBiYmJiJywgc3RhdHVzOiAyMDAsICBkYXRhOiBbXCJ1cmwxIGJiYlwiXX0sXG4gICAgICAgIHtuYW1lOiAnZ2V0IHVybDEgY2NjYycsIHN0YXR1czogMjAwLCAgZGF0YTogW1widXJsMSBjY2NcIl19XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInN0YXRlMlwiLFxuICAgICAgdXJsOiAnaHR0cDovL3VybDIuY29tJyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge25hbWU6ICdnZXQgdXJsMiBiYmJiJywgc3RhdHVzOiA0MDQsICBkYXRhOiBbXCJ1cmwyIDQwNCBmYWlsdXJlXCJdfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzdGF0ZTNcIixcbiAgICAgIHVybDogJ2h0dHA6Ly91cmwzLmNvbScsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHtuYW1lOiAnZ2V0IHVybDMgYmJiYiB3aXRoIGRlbGF5Jywgc3RhdHVzOiAyMDAsICBkYXRhOiBbXCJ1cmwzIGJiYlwiXSwgZGVsYXk6IDIwMDB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInN0YXRlIDRcIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge25hbWU6ICdnZXQgdXJsNCBiYmJiJywgZGF0YTogW1widXJsNCBiYmJcIl19XG4gICAgICBdXG4gICAgfVxuICBdKTtcblxuXG4gIC8vIFNldHRpbmcgb3B0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gIC8vKiB2aWEgdWkgLSBjbGljayBvbiBsZW9uYXJkbyBhbmQgaGl0IHRoZSBhY3RpdmF0ZSB0YWJzXG4gIC8vKiB2aWEgYXBpIC0gY29taW5nIHNvb24uLi5cblxuXG4gICRyb290U2NvcGUuc2hvd0FuaW1hbHMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBvcHRpb24gPSBjb25maWd1cmF0aW9uLmdldFN0YXRlKFwic3RhdGVfYW5pbWFsc19ub25fYWpheFwiKTtcbiAgICBhbGVydChvcHRpb24gPyBvcHRpb24uZGF0YSA6ICdObyBBY3RpdmUnICk7XG4gIH07XG59XG4iXX0=
