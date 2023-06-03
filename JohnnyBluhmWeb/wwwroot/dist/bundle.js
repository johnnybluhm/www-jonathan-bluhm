(()=>{"use strict";var t=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))},e=function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},n=function(){function n(){}return n.prototype.getPowerData=function(){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,fetch("https://localhost:7038/api/stravaMongo/GetAllPowerStreams")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}}))}))},n.prototype.getHeartRateData=function(){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,fetch("https://localhost:7038/api/stravaMongo/GetAllHrStreams")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}}))}))},n.prototype.getActivities=function(){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,fetch("https://localhost:7038/api/stravaMongo/GetAllActivities")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}}))}))},n.prototype.getDetailedActivities=function(){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,fetch("https://localhost:7038/api/stravaMongo/GetAllDetailedActivities")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}}))}))},n}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){o(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function s(t,e){o(2,arguments);var n=i(t),r=i(e);return n.getTime()>r.getTime()}function a(t,e){o(2,arguments);var n=i(t),r=i(e);return n.getTime()<r.getTime()}var c=function(){function t(){}return t.prototype.getTimeInZoneList=function(t){for(var e={1:0,2:0,3:0,4:0,5:0,6:0,7:0},n=0,r=t;n<r.length;n++){var o=r[n];for(var i in o.powerStream){var s=o.powerStream[i];e[this.getZone(i).toString()]+=Number.parseInt(s)}}return Object.values(e)},t.prototype.getZone=function(t){var e=Number.parseInt(t);return e<=132?1:e>132&&e<=180?2:e>180&&e<=216?3:e>216&&e<=252?4:e>252&&e<=288?5:e>288&&e<=360?6:e>=360?7:1},t.prototype.setPowerZones=function(t){this.powerZones[0]=.55*t,this.powerZones[1]=.75*t,this.powerZones[2]=.87*t,this.powerZones[3]=1.05*t,this.powerZones[4]=1.2*t,this.powerZones[5]=1.5*t,this.powerZones[6]=2*t},t}(),u=function(){function t(){}return t.prototype.getTimeInZoneList=function(t){for(var e={1:0,2:0,3:0,4:0,5:0},n=0,r=t;n<r.length;n++){var o=r[n];for(var i in o.hrStream){var s=o.hrStream[i];e[this.getZone(i).toString()]+=Number.parseInt(s)}}return Object.values(e)},t.prototype.getZone=function(t){var e=Number.parseInt(t);return e<=118?1:e>118&&e<=156?2:e>156&&e<=175?3:e>175&&e<=194?4:e>194?5:1},t.prototype.setHrZones=function(t){this.hrZones[0]=.5*t,this.hrZones[1]=.6*t,this.hrZones[2]=.7*t,this.hrZones[3]=.8*t,this.hrZones[4]=.9*t},t}(),l=function(){function t(t){this.allActivities=t,this.filteredActivities=t}return t.prototype.filterByDate=function(t,e){var n=Date.parse(t),r=Date.parse(e);this.filteredActivities=[];for(var o=0,i=this.allActivities;o<i.length;o++){var c=i[o],u=Date.parse(c.start_date_local);s(u,n)&&a(u,r)&&this.filteredActivities.push(c)}},t.prototype.setTimeInZoneLists=function(){this.powerTimeInZone=(new c).getTimeInZoneList(this.filteredActivities),this.hrTimeInZone=(new u).getTimeInZoneList(this.filteredActivities)},t}(),f=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))},p=function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};function h(){return f(this,void 0,void 0,(function(){var t,e,r,o,i,s;return p(this,(function(a){switch(a.label){case 0:return document.getElementById("convertPower"),document.getElementById("convertHr"),[4,(t=new n).getPowerData()];case 1:return e=a.sent(),[4,t.getHeartRateData()];case 2:return r=a.sent(),[4,t.getActivities()];case 3:return o=a.sent(),[4,t.getDetailedActivities()];case 4:return i=a.sent(),console.log(o),console.log(i),console.log(r),console.log(e),function(t,e,n){for(var r=function(n){var r=e.find((function(t){return t.id==n.id})),o=t.find((function(t){return t.id==n.id}));n.powerStream=null==o?void 0:o.powerDict,n.hrStream=null==r?void 0:r.heartRateDict},o=0,i=n;o<i.length;o++)r(i[o])}(e,r,o),(s=new l(o)).setTimeInZoneLists(),console.log(s.powerTimeInZone),console.log(s.hrTimeInZone),[2]}}))}))}f(void 0,void 0,void 0,(function(){var t;return p(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,h()];case 1:return e.sent(),[3,3];case 2:return t=e.sent(),console.error(t),[3,3];case 3:return[2]}}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJ5M0NBSUEsYUFDSSxhQUVBLENBOEJKLE9BN0JVLFlBQUFBLGFBQU4sVywwRkFHaUIsU0FBTUMsTUFGVCw4RCxPQUdDLFNBREUsU0FDV0MsUSxPQUN4QixNQUFPLENBQVAsRUFEVyxVLFFBSVQsWUFBQUMsaUJBQU4sVywwRkFHaUIsU0FBTUYsTUFGVCwyRCxPQUdDLFNBREUsU0FDV0MsUSxPQUN4QixNQUFPLENBQVAsRUFEVyxVLFFBSVQsWUFBQUUsY0FBTixXLDBGQUVpQixTQUFNSCxNQURULDRELE9BRUMsU0FERSxTQUNXQyxRLE9BQ3hCLE1BQU8sQ0FBUCxFQURXLFUsUUFJVCxZQUFBRyxzQkFBTixXLDBGQUVpQixTQUFNSixNQURULG9FLE9BRUMsU0FERSxTQUNXQyxRLE9BQ3hCLE1BQU8sQ0FBUCxFQURXLFUsUUFHbkIsRUFqQ0EsR0NKZSxTQUFTSSxFQUFRQyxHQUc5QixPQUFPRCxFQUFVLG1CQUFxQkUsUUFBVSxpQkFBbUJBLE9BQU9DLFNBQVcsU0FBVUYsR0FDN0YsY0FBY0EsQ0FDaEIsRUFBSSxTQUFVQSxHQUNaLE9BQU9BLEdBQU8sbUJBQXFCQyxRQUFVRCxFQUFJRyxjQUFnQkYsUUFBVUQsSUFBUUMsT0FBT0csVUFBWSxnQkFBa0JKLENBQzFILEVBQUdELEVBQVFDLEVBQ2IsQ0NSZSxTQUFTSyxFQUFhQyxFQUFVQyxHQUM3QyxHQUFJQSxFQUFLQyxPQUFTRixFQUNoQixNQUFNLElBQUlHLFVBQVVILEVBQVcsYUFBZUEsRUFBVyxFQUFJLElBQU0sSUFBTSx1QkFBeUJDLEVBQUtDLE9BQVMsV0FFcEgsQ0M0QmUsU0FBU0UsRUFBT0MsR0FDN0JOLEVBQWEsRUFBR08sV0FDaEIsSUFBSUMsRUFBU0MsT0FBT1YsVUFBVVcsU0FBU0MsS0FBS0wsR0FHNUMsT0FBSUEsYUFBb0JNLE1BQThCLFdBQXRCbEIsRUFBUVksSUFBcUMsa0JBQVhFLEVBRXpELElBQUlJLEtBQUtOLEVBQVNPLFdBQ0ksaUJBQWJQLEdBQW9DLG9CQUFYRSxFQUNsQyxJQUFJSSxLQUFLTixJQUVTLGlCQUFiQSxHQUFvQyxvQkFBWEUsR0FBb0Qsb0JBQVpNLFVBRTNFQSxRQUFRQyxLQUFLLHNOQUViRCxRQUFRQyxNQUFLLElBQUlDLE9BQVFDLFFBRXBCLElBQUlMLEtBQUtNLEtBRXBCLENDL0JlLFNBQVNDLEVBQVFDLEVBQVdDLEdBQ3pDckIsRUFBYSxFQUFHTyxXQUNoQixJQUFJZSxFQUFPakIsRUFBT2UsR0FDZEcsRUFBZ0JsQixFQUFPZ0IsR0FDM0IsT0FBT0MsRUFBS1QsVUFBWVUsRUFBY1YsU0FDeEMsQ0NMZSxTQUFTVyxFQUFTSixFQUFXQyxHQUMxQ3JCLEVBQWEsRUFBR08sV0FDaEIsSUFBSWUsRUFBT2pCLEVBQU9lLEdBQ2RHLEVBQWdCbEIsRUFBT2dCLEdBQzNCLE9BQU9DLEVBQUtULFVBQVlVLEVBQWNWLFNBQ3hDLENDcEJBLDhCQTREQSxRQXpEVyxZQUFBWSxrQkFBUCxTQUF5QkMsR0FVckIsSUFUQSxJQUFJQyxFQUE4QyxDQUM5QyxFQUFLLEVBQ0wsRUFBSyxFQUNMLEVBQUssRUFDTCxFQUFLLEVBQ0wsRUFBSyxFQUNMLEVBQUssRUFDTCxFQUFLLEdBRVksTUFBQUQsRUFBQSxlQUFZLENBQTVCLElBQUlFLEVBQVEsS0FDYixJQUFLLElBQUlDLEtBQU9ELEVBQVNFLFlBQWEsQ0FDbEMsSUFBSUMsRUFBdUJILEVBQVNFLFlBQVlELEdBR2hERixFQUZXSyxLQUFLQyxRQUFRSixHQUNGbkIsYUFDUXdCLE9BQU9DLFNBQVNKLEUsRUFJdEQsT0FBT3RCLE9BQU8yQixPQUFPVCxFQUN6QixFQUVRLFlBQUFNLFFBQVIsU0FBZ0JJLEdBQ1osSUFBSUMsRUFBZ0JKLE9BQU9DLFNBQVNFLEdBQ3BDLE9BQUlDLEdBQWlCLElBQ1YsRUFFRkEsRUFBZ0IsS0FBT0EsR0FBaUIsSUFDdEMsRUFFRkEsRUFBZ0IsS0FBT0EsR0FBaUIsSUFDdEMsRUFFRkEsRUFBZ0IsS0FBT0EsR0FBaUIsSUFDdEMsRUFFRkEsRUFBZ0IsS0FBT0EsR0FBaUIsSUFDdEMsRUFFRkEsRUFBZ0IsS0FBT0EsR0FBaUIsSUFDdEMsRUFFRkEsR0FBaUIsSUFDZixFQUVKLENBQ1gsRUFFUSxZQUFBQyxjQUFSLFNBQXNCQyxHQUNsQlIsS0FBS1MsV0FBVyxHQUFXLElBQU5ELEVBQ3JCUixLQUFLUyxXQUFXLEdBQVcsSUFBTkQsRUFDckJSLEtBQUtTLFdBQVcsR0FBVyxJQUFORCxFQUNyQlIsS0FBS1MsV0FBVyxHQUFXLEtBQU5ELEVBQ3JCUixLQUFLUyxXQUFXLEdBQVcsSUFBTkQsRUFDckJSLEtBQUtTLFdBQVcsR0FBVyxJQUFORCxFQUNyQlIsS0FBS1MsV0FBVyxHQUFXLEVBQU5ELENBQ3pCLEVBQ0osRUE1REEsR0NBQSwwQkFtREEsUUFoRFcsWUFBQWYsa0JBQVAsU0FBeUJDLEdBUXJCLElBUEEsSUFBSUMsRUFBOEMsQ0FDOUMsRUFBSyxFQUNMLEVBQUssRUFDTCxFQUFLLEVBQ0wsRUFBSyxFQUNMLEVBQUssR0FFWSxNQUFBRCxFQUFBLGVBQVksQ0FBNUIsSUFBSUUsRUFBUSxLQUNiLElBQUssSUFBSUMsS0FBT0QsRUFBU2MsU0FBVSxDQUMvQixJQUFJWCxFQUF1QkgsRUFBU2MsU0FBU2IsR0FHN0NGLEVBRldLLEtBQUtDLFFBQVFKLEdBQ0ZuQixhQUNRd0IsT0FBT0MsU0FBU0osRSxFQUl0RCxPQUFPdEIsT0FBTzJCLE9BQU9ULEVBQ3pCLEVBRUEsWUFBQU0sUUFBQSxTQUFRVSxHQUNKLElBQUlMLEVBQWdCSixPQUFPQyxTQUFTUSxHQUNwQyxPQUFJTCxHQUFpQixJQUNWLEVBRUZBLEVBQWdCLEtBQU9BLEdBQWlCLElBQ3RDLEVBRUZBLEVBQWdCLEtBQU9BLEdBQWlCLElBQ3RDLEVBRUZBLEVBQWdCLEtBQU9BLEdBQWlCLElBQ3RDLEVBRUZBLEVBQWdCLElBQ2QsRUFFSixDQUNYLEVBRVEsWUFBQU0sV0FBUixTQUFtQkMsR0FDZmIsS0FBS2MsUUFBUSxHQUFhLEdBQVJELEVBQ2xCYixLQUFLYyxRQUFRLEdBQWEsR0FBUkQsRUFDbEJiLEtBQUtjLFFBQVEsR0FBYSxHQUFSRCxFQUNsQmIsS0FBS2MsUUFBUSxHQUFhLEdBQVJELEVBQ2xCYixLQUFLYyxRQUFRLEdBQWEsR0FBUkQsQ0FDdEIsRUFFSixFQW5EQSxHQ0lBLGFBU0ksV0FBWW5CLEdBQ1JNLEtBQUtlLGNBQWdCckIsRUFDckJNLEtBQUtnQixtQkFBcUJ0QixDQUM5QixDQW9CSixPQWxCSSxZQUFBdUIsYUFBQSxTQUFhQyxFQUF3QkMsR0FDakMsSUFBSUMsRUFBV3hDLEtBQUt5QyxNQUFNSCxHQUN0QjdDLEVBQVNPLEtBQUt5QyxNQUFNRixHQUN4Qm5CLEtBQUtnQixtQkFBcUIsR0FDMUIsSUFBcUIsVUFBQWhCLEtBQUtlLGNBQUwsZUFBb0IsQ0FBcEMsSUFBSW5CLEVBQVEsS0FDVDBCLEVBQWUxQyxLQUFLeUMsTUFBTXpCLEVBQVMyQixrQkFDbkMsRUFBbUJELEVBQWNGLElBQWEsRUFBb0JFLEVBQWNqRCxJQUNoRjJCLEtBQUtnQixtQkFBbUJRLEtBQUs1QixFLENBR3pDLEVBRUEsWUFBQTZCLG1CQUFBLFdBQ0l6QixLQUFLMEIsaUJBQWtCLElBQUlDLEdBQVlsQyxrQkFBa0JPLEtBQUtnQixvQkFDOURoQixLQUFLNEIsY0FBZSxJQUFJQyxHQUFTcEMsa0JBQWtCTyxLQUFLZ0IsbUJBQzVELEVBR0osRUFoQ0EsRyxrMkNDQUEsU0FBZWMsSSwwR0FTUSxPQUxVQyxTQUFTQyxlQUFlLGdCQUMzQkQsU0FBU0MsZUFBZSxhQUkvQixJQUZmQyxFQUFTLElBQUlDLEdBRWU5RSxnQixPQUNoQixPQURaK0UsRUFBZSxTQUNILEdBQU1GLEVBQU8xRSxvQixPQUVaLE9BRmI2RSxFQUFZLFNBRUMsR0FBTUgsRUFBT3pFLGlCLE9BRUwsT0FGckJrQyxFQUFhLFNBRVEsR0FBTXVDLEVBQU94RSx5QixjQUFsQzRFLEVBQXFCLFNBQ3pCdkQsUUFBUXdELElBQUk1QyxHQUNaWixRQUFRd0QsSUFBSUQsR0FDWnZELFFBQVF3RCxJQUFJRixHQUNadEQsUUFBUXdELElBQUlILEdBb0JoQixTQUE4QkEsRUFBd0JDLEVBQXFCMUMsR0FDdkUsSSxlQUFTRSxHQUNMLElBQUkyQyxFQUFpQkgsRUFBVUksTUFBSyxTQUFBQyxHQUFVLE9BQUFBLEVBQU9DLElBQU05QyxFQUFTOEMsRUFBdEIsSUFDMUNDLEVBQW9CUixFQUFhSyxNQUFLLFNBQUFDLEdBQVUsT0FBQUEsRUFBT0MsSUFBTTlDLEVBQVM4QyxFQUF0QixJQUNwRDlDLEVBQVNFLFlBQWM2QyxhQUFpQixFQUFqQkEsRUFBbUJDLFVBQzFDaEQsRUFBU2MsU0FBVzZCLGFBQWMsRUFBZEEsRUFBZ0JNLGEsRUFKbkIsTUFBQW5ELEVBQUEsZSxFQUFKLEtBTXJCLENBZklvRCxDQUFxQlgsRUFBY0MsRUFBVzFDLElBRTFDcUQsRUFBTyxJQUFJQyxFQUFldEQsSUFDekIrQixxQkFDTDNDLFFBQVF3RCxJQUFJUyxFQUFLckIsaUJBQ2pCNUMsUUFBUXdELElBQUlTLEVBQUtuQixjLFdBWXBCLG1DLHdEQUVPLE8sc0JBQUEsR0FBTUUsSyxjQUFOLFMsK0JBRUFoRCxRQUFRbUUsTUFBTSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyYXZhLy4vc3JjL2FwaUNsaWVudC50cyIsIndlYnBhY2s6Ly9zdHJhdmEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3N0cmF2YS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RyYXZhLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RyYXZhLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0FmdGVyL2luZGV4LmpzIiwid2VicGFjazovL3N0cmF2YS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RyYXZhLy4vc3JjL3Bvd2VyWm9uZUNhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vc3RyYXZhLy4vc3JjL2hyWm9uZUNhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vc3RyYXZhLy4vc3JjL2RhdGFDYWxjdWxhdG9yLnRzIiwid2VicGFjazovL3N0cmF2YS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXRhaWxlZEFjdGl2aXR5IH0gZnJvbSBcIi4vbW9kZWxzL2RldGFpbGVkQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgU3RyYXZhQWN0aXZpdHkgfSBmcm9tIFwiLi9tb2RlbHMvc3RyYXZhQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSBcIi4vbW9kZWxzL3N0cmVhbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmF2YUFwaUNsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRQb3dlckRhdGEoKTogUHJvbWlzZTxTdHJlYW1bXT4ge1xyXG4gICAgICAgIHZhciB1cmwgPSBcImh0dHBzOi8vbG9jYWxob3N0OjcwMzgvYXBpL3N0cmF2YU1vbmdvL0dldEFsbFBvd2VyU3RyZWFtc1wiO1xyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCkgYXMgU3RyZWFtW107XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0SGVhcnRSYXRlRGF0YSgpOiBQcm9taXNlPFN0cmVhbVtdPiB7XHJcbiAgICAgICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAzOC9hcGkvc3RyYXZhTW9uZ28vR2V0QWxsSHJTdHJlYW1zXCI7XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKSBhcyBTdHJlYW1bXTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRBY3Rpdml0aWVzKCk6IFByb21pc2U8U3RyYXZhQWN0aXZpdHlbXT4ge1xyXG4gICAgICAgIHZhciB1cmwgPSBcImh0dHBzOi8vbG9jYWxob3N0OjcwMzgvYXBpL3N0cmF2YU1vbmdvL0dldEFsbEFjdGl2aXRpZXNcIjtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCkgYXMgU3RyYXZhQWN0aXZpdHlbXTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXREZXRhaWxlZEFjdGl2aXRpZXMoKTogUHJvbWlzZTxEZXRhaWxlZEFjdGl2aXR5W10+IHtcclxuICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL2xvY2FsaG9zdDo3MDM4L2FwaS9zdHJhdmFNb25nby9HZXRBbGxEZXRhaWxlZEFjdGl2aXRpZXNcIjtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCkgYXMgRGV0YWlsZWRBY3Rpdml0eVtdO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IENoYXJ0LCBDaGFydENvbmZpZ3VyYXRpb24sIENoYXJ0SXRlbSwgQ2hhcnRUeXBlLCBDaGFydFR5cGVSZWdpc3RyeSB9IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IENoYXJ0R2VuZXJhdG9yIH0gZnJvbSBcIi4vY2hhcnRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgU3RyYXZhQWN0aXZpdHkgfSBmcm9tIFwiLi9tb2RlbHMvc3RyYXZhQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSBcIi4vbW9kZWxzL3N0cmVhbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvd2VyWm9uZSB7XHJcbiAgICBwb3dlclpvbmVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VGltZUluWm9uZUxpc3QoYWN0aXZpdGllczogU3RyYXZhQWN0aXZpdHlbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgdGltZUluWm9uZURpY3Q6IHsgW2luZGV4OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICAgICAgICAgICAgXCIxXCI6IDAsXHJcbiAgICAgICAgICAgIFwiMlwiOiAwLFxyXG4gICAgICAgICAgICBcIjNcIjogMCxcclxuICAgICAgICAgICAgXCI0XCI6IDAsXHJcbiAgICAgICAgICAgIFwiNVwiOiAwLFxyXG4gICAgICAgICAgICBcIjZcIjogMCxcclxuICAgICAgICAgICAgXCI3XCI6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGxldCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhY3Rpdml0eS5wb3dlclN0cmVhbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVBdFBvd2VySW5TZWNvbmRzID0gYWN0aXZpdHkucG93ZXJTdHJlYW1ba2V5XTtcclxuICAgICAgICAgICAgICAgIGxldCB6b25lID0gdGhpcy5nZXRab25lKGtleSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgem9uZVN0cmluZyA9IHpvbmUudG9TdHJpbmcoKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aW1lSW5ab25lRGljdFt6b25lU3RyaW5nXSArPSBOdW1iZXIucGFyc2VJbnQodGltZUF0UG93ZXJJblNlY29uZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aW1lSW5ab25lRGljdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRab25lKHBvd2VyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBwb3dlckFzTnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHBvd2VyKTtcclxuICAgICAgICBpZiAocG93ZXJBc051bWJlciA8PSAxMzIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvd2VyQXNOdW1iZXIgPiAxMzIgJiYgcG93ZXJBc051bWJlciA8PSAxODApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvd2VyQXNOdW1iZXIgPiAxODAgJiYgcG93ZXJBc051bWJlciA8PSAyMTYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvd2VyQXNOdW1iZXIgPiAyMTYgJiYgcG93ZXJBc051bWJlciA8PSAyNTIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvd2VyQXNOdW1iZXIgPiAyNTIgJiYgcG93ZXJBc051bWJlciA8PSAyODgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvd2VyQXNOdW1iZXIgPiAyODggJiYgcG93ZXJBc051bWJlciA8PSAzNjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvd2VyQXNOdW1iZXIgPj0gMzYwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBvd2VyWm9uZXMoZnRwOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvd2VyWm9uZXNbMF0gPSBmdHAgKiAuNTU7XHJcbiAgICAgICAgdGhpcy5wb3dlclpvbmVzWzFdID0gZnRwICogLjc1O1xyXG4gICAgICAgIHRoaXMucG93ZXJab25lc1syXSA9IGZ0cCAqIC44NztcclxuICAgICAgICB0aGlzLnBvd2VyWm9uZXNbM10gPSBmdHAgKiAxLjA1O1xyXG4gICAgICAgIHRoaXMucG93ZXJab25lc1s0XSA9IGZ0cCAqIDEuMjtcclxuICAgICAgICB0aGlzLnBvd2VyWm9uZXNbNV0gPSBmdHAgKiAxLjU7XHJcbiAgICAgICAgdGhpcy5wb3dlclpvbmVzWzZdID0gZnRwICogMjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENoYXJ0LCBDaGFydENvbmZpZ3VyYXRpb24sIENoYXJ0SXRlbSwgQ2hhcnRUeXBlLCBDaGFydFR5cGVSZWdpc3RyeSB9IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IENoYXJ0R2VuZXJhdG9yIH0gZnJvbSBcIi4vY2hhcnRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgU3RyYXZhQWN0aXZpdHkgfSBmcm9tIFwiLi9tb2RlbHMvc3RyYXZhQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSBcIi4vbW9kZWxzL3N0cmVhbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhyWm9uZSB7XHJcbiAgICBoclpvbmVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VGltZUluWm9uZUxpc3QoYWN0aXZpdGllczogU3RyYXZhQWN0aXZpdHlbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgdGltZUluWm9uZURpY3Q6IHsgW2luZGV4OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICAgICAgICAgICAgXCIxXCI6IDAsXHJcbiAgICAgICAgICAgIFwiMlwiOiAwLFxyXG4gICAgICAgICAgICBcIjNcIjogMCxcclxuICAgICAgICAgICAgXCI0XCI6IDAsXHJcbiAgICAgICAgICAgIFwiNVwiOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChsZXQgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWN0aXZpdHkuaHJTdHJlYW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lQXRQb3dlckluU2Vjb25kcyA9IGFjdGl2aXR5LmhyU3RyZWFtW2tleV07XHJcbiAgICAgICAgICAgICAgICBsZXQgem9uZSA9IHRoaXMuZ2V0Wm9uZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHpvbmVTdHJpbmcgPSB6b25lLnRvU3RyaW5nKCkgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdGltZUluWm9uZURpY3Rbem9uZVN0cmluZ10gKz0gTnVtYmVyLnBhcnNlSW50KHRpbWVBdFBvd2VySW5TZWNvbmRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGltZUluWm9uZURpY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFpvbmUoaGVhcnRSYXRlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBwb3dlckFzTnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KGhlYXJ0UmF0ZSk7XHJcbiAgICAgICAgaWYgKHBvd2VyQXNOdW1iZXIgPD0gMTE4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwb3dlckFzTnVtYmVyID4gMTE4ICYmIHBvd2VyQXNOdW1iZXIgPD0gMTU2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwb3dlckFzTnVtYmVyID4gMTU2ICYmIHBvd2VyQXNOdW1iZXIgPD0gMTc1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwb3dlckFzTnVtYmVyID4gMTc1ICYmIHBvd2VyQXNOdW1iZXIgPD0gMTk0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwb3dlckFzTnVtYmVyID4gMTk0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhyWm9uZXMobWF4SHI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaHJab25lc1swXSA9IG1heEhyICogLjU7XHJcbiAgICAgICAgdGhpcy5oclpvbmVzWzFdID0gbWF4SHIgKiAuNjtcclxuICAgICAgICB0aGlzLmhyWm9uZXNbMl0gPSBtYXhIciAqIC43O1xyXG4gICAgICAgIHRoaXMuaHJab25lc1szXSA9IG1heEhyICogLjg7XHJcbiAgICAgICAgdGhpcy5oclpvbmVzWzRdID0gbWF4SHIgKiAuOTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDaGFydCwgQ2hhcnRDb25maWd1cmF0aW9uLCBDaGFydEl0ZW0sIENoYXJ0VHlwZSB9IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IENoYXJ0R2VuZXJhdG9yIH0gZnJvbSBcIi4vY2hhcnRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgU3RyYXZhQWN0aXZpdHkgfSBmcm9tIFwiLi9tb2RlbHMvc3RyYXZhQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSBcIi4vbW9kZWxzL3N0cmVhbVwiO1xyXG5pbXBvcnQgeyBUaW1lSW5ab25lRmlsdGVyIH0gZnJvbSBcIi4vdGltZUluWm9uZUZpbHRlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRlSGVscGVyIGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgUG93ZXJab25lIH0gZnJvbSBcIi4vcG93ZXJab25lQ2FsY3VsYXRvclwiO1xyXG5pbXBvcnQgeyBIclpvbmUgfSBmcm9tIFwiLi9oclpvbmVDYWxjdWxhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUNhbGN1bGF0b3Ige1xyXG4gICAgYWxsQWN0aXZpdGllczogU3RyYXZhQWN0aXZpdHlbXTtcclxuICAgIGZpbHRlcmVkQWN0aXZpdGllczogU3RyYXZhQWN0aXZpdHlbXTtcclxuICAgIGhyWm9uZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGhyVGltZUluWm9uZTogbnVtYmVyW107XHJcbiAgICBwb3dlclRpbWVJblpvbmU6IG51bWJlcltdXHJcbiAgICBjYWxvcmllc0J1cm5lZEluVGltZVBlcmlvZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjdGl2aXRpZXM6IFN0cmF2YUFjdGl2aXR5W10pIHtcclxuICAgICAgICB0aGlzLmFsbEFjdGl2aXRpZXMgPSBhY3Rpdml0aWVzO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRBY3Rpdml0aWVzID0gYWN0aXZpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJCeURhdGUoZnJvbURhdGVTdHJpbmc6IHN0cmluZywgdG9EYXRlU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZnJvbURhdGUgPSBEYXRlLnBhcnNlKGZyb21EYXRlU3RyaW5nKTtcclxuICAgICAgICBsZXQgdG9EYXRlID0gRGF0ZS5wYXJzZSh0b0RhdGVTdHJpbmcpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRBY3Rpdml0aWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYWN0aXZpdHkgb2YgdGhpcy5hbGxBY3Rpdml0aWVzKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpdml0eURhdGUgPSBEYXRlLnBhcnNlKGFjdGl2aXR5LnN0YXJ0X2RhdGVfbG9jYWwpO1xyXG4gICAgICAgICAgICBpZiAoRGF0ZUhlbHBlci5pc0FmdGVyKGFjdGl2aXR5RGF0ZSwgZnJvbURhdGUpICYmIERhdGVIZWxwZXIuaXNCZWZvcmUoYWN0aXZpdHlEYXRlLCB0b0RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkQWN0aXZpdGllcy5wdXNoKGFjdGl2aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lSW5ab25lTGlzdHMoKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlclRpbWVJblpvbmUgPSBuZXcgUG93ZXJab25lKCkuZ2V0VGltZUluWm9uZUxpc3QodGhpcy5maWx0ZXJlZEFjdGl2aXRpZXMpO1xyXG4gICAgICAgIHRoaXMuaHJUaW1lSW5ab25lID0gbmV3IEhyWm9uZSgpLmdldFRpbWVJblpvbmVMaXN0KHRoaXMuZmlsdGVyZWRBY3Rpdml0aWVzKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiY2hhcnQuanMvZGlzdFwiO1xyXG5pbXBvcnQgeyBTdHJhdmFBcGlDbGllbnQgfSBmcm9tIFwiLi9hcGlDbGllbnRcIjtcclxuaW1wb3J0IHsgQ2hhcnRHZW5lcmF0b3IgfSBmcm9tIFwiLi9jaGFydEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBIZWFydFJhdGVDaGFydEdlbmVyYXRvciB9IGZyb20gXCIuL2hlYXJ0UmF0ZUNoYXJ0R2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IERhdGFDYWxjdWxhdG9yIH0gZnJvbSBcIi4vZGF0YUNhbGN1bGF0b3JcIjtcclxuaW1wb3J0IHsgU3RyYXZhQWN0aXZpdHkgfSBmcm9tIFwiLi9tb2RlbHMvc3RyYXZhQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSBcIi4vbW9kZWxzL3N0cmVhbVwiO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICAvL2xldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFBvd2VyXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgLy9sZXQgaHJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaEhyXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIGxldCBwb3dlclRvZ2dsZUNoYXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb252ZXJ0UG93ZXJcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBsZXQgaHJUb2dnbGVDaGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udmVydEhyXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIGxldCBjbGllbnQgPSBuZXcgU3RyYXZhQXBpQ2xpZW50KCk7XHJcblxyXG4gICAgdmFyIHBvd2VyU3RyZWFtcyA9IGF3YWl0IGNsaWVudC5nZXRQb3dlckRhdGEoKTtcclxuICAgIHZhciBoclN0cmVhbXMgPSBhd2FpdCBjbGllbnQuZ2V0SGVhcnRSYXRlRGF0YSgpO1xyXG5cclxuICAgIHZhciBhY3Rpdml0aWVzID0gYXdhaXQgY2xpZW50LmdldEFjdGl2aXRpZXMoKTtcclxuXHJcbiAgICB2YXIgZGV0YWlsZWRBY3Rpdml0aWVzID0gYXdhaXQgY2xpZW50LmdldERldGFpbGVkQWN0aXZpdGllcygpO1xyXG4gICAgY29uc29sZS5sb2coYWN0aXZpdGllcyk7XHJcbiAgICBjb25zb2xlLmxvZyhkZXRhaWxlZEFjdGl2aXRpZXMpO1xyXG4gICAgY29uc29sZS5sb2coaHJTdHJlYW1zKTtcclxuICAgIGNvbnNvbGUubG9nKHBvd2VyU3RyZWFtcyk7XHJcblxyXG4gICAgLypsZXQgcG93ZXJDaGFydEdlbmVyYXRvciA9IG5ldyBQb3dlckNoYXJ0R2VuZXJhdG9yKHBvd2VyU3RyZWFtcyk7XHJcbiAgICBwb3dlckNoYXJ0R2VuZXJhdG9yLmNyZWF0ZVBpZUNoYXJ0KCk7XHJcbiAgICAvL2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcG93ZXJDaGFydEdlbmVyYXRvci50b2dnbGVUaW1lVW5pdHMoKSk7XHJcbiAgICBwb3dlclRvZ2dsZUNoYXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwb3dlckNoYXJ0R2VuZXJhdG9yLnRvZ2dsZUNoYXJ0VHlwZSgpKTtcclxuXHJcbiAgICBsZXQgaHJDaGFydEdlbmVyYXRvciA9IG5ldyBIZWFydFJhdGVDaGFydEdlbmVyYXRvcihoclN0cmVhbXMsIGFjdGl2aXRpZXMpO1xyXG4gICAgaHJDaGFydEdlbmVyYXRvci5jcmVhdGVQaWVDaGFydCgpO1xyXG4gICAgLy9ockJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaHJDaGFydEdlbmVyYXRvci50b2dnbGVUaW1lVW5pdHMoKSk7XHJcbiAgICBoclRvZ2dsZUNoYXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBockNoYXJ0R2VuZXJhdG9yLnRvZ2dsZUNoYXJ0VHlwZSgpKTsqL1xyXG5cclxuICAgIGFkZFN0cmVhbXNUb0FjdGl2aXR5KHBvd2VyU3RyZWFtcywgaHJTdHJlYW1zLCBhY3Rpdml0aWVzKTtcclxuXHJcbiAgICBsZXQgdGVzdCA9IG5ldyBEYXRhQ2FsY3VsYXRvcihhY3Rpdml0aWVzKTtcclxuICAgIHRlc3Quc2V0VGltZUluWm9uZUxpc3RzKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXN0LnBvd2VyVGltZUluWm9uZSk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXN0LmhyVGltZUluWm9uZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0cmVhbXNUb0FjdGl2aXR5KHBvd2VyU3RyZWFtczogU3RyZWFtW10sIGhyU3RyZWFtczogU3RyZWFtW10sIGFjdGl2aXRpZXM6IFN0cmF2YUFjdGl2aXR5W10pIHtcclxuICAgIGZvciAobGV0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcclxuICAgICAgICBsZXQgaHJTdHJlYW1XaXRoSWQgPSBoclN0cmVhbXMuZmluZChzdHJlYW0gPT4gc3RyZWFtLmlkID09IGFjdGl2aXR5LmlkKTtcclxuICAgICAgICBsZXQgcG93ZXJTdHJlYW1XaXRoSWQgPSBwb3dlclN0cmVhbXMuZmluZChzdHJlYW0gPT4gc3RyZWFtLmlkID09IGFjdGl2aXR5LmlkKTtcclxuICAgICAgICBhY3Rpdml0eS5wb3dlclN0cmVhbSA9IHBvd2VyU3RyZWFtV2l0aElkPy5wb3dlckRpY3Q7XHJcbiAgICAgICAgYWN0aXZpdHkuaHJTdHJlYW0gPSBoclN0cmVhbVdpdGhJZD8uaGVhcnRSYXRlRGljdDtcclxuICAgIH1cclxufVxyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgbWFpbigpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJnZXRQb3dlckRhdGEiLCJmZXRjaCIsImpzb24iLCJnZXRIZWFydFJhdGVEYXRhIiwiZ2V0QWN0aXZpdGllcyIsImdldERldGFpbGVkQWN0aXZpdGllcyIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwicmVxdWlyZWRBcmdzIiwicmVxdWlyZWQiLCJhcmdzIiwibGVuZ3RoIiwiVHlwZUVycm9yIiwidG9EYXRlIiwiYXJndW1lbnQiLCJhcmd1bWVudHMiLCJhcmdTdHIiLCJPYmplY3QiLCJ0b1N0cmluZyIsImNhbGwiLCJEYXRlIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJzdGFjayIsIk5hTiIsImlzQWZ0ZXIiLCJkaXJ0eURhdGUiLCJkaXJ0eURhdGVUb0NvbXBhcmUiLCJkYXRlIiwiZGF0ZVRvQ29tcGFyZSIsImlzQmVmb3JlIiwiZ2V0VGltZUluWm9uZUxpc3QiLCJhY3Rpdml0aWVzIiwidGltZUluWm9uZURpY3QiLCJhY3Rpdml0eSIsImtleSIsInBvd2VyU3RyZWFtIiwidGltZUF0UG93ZXJJblNlY29uZHMiLCJ0aGlzIiwiZ2V0Wm9uZSIsIk51bWJlciIsInBhcnNlSW50IiwidmFsdWVzIiwicG93ZXIiLCJwb3dlckFzTnVtYmVyIiwic2V0UG93ZXJab25lcyIsImZ0cCIsInBvd2VyWm9uZXMiLCJoclN0cmVhbSIsImhlYXJ0UmF0ZSIsInNldEhyWm9uZXMiLCJtYXhIciIsImhyWm9uZXMiLCJhbGxBY3Rpdml0aWVzIiwiZmlsdGVyZWRBY3Rpdml0aWVzIiwiZmlsdGVyQnlEYXRlIiwiZnJvbURhdGVTdHJpbmciLCJ0b0RhdGVTdHJpbmciLCJmcm9tRGF0ZSIsInBhcnNlIiwiYWN0aXZpdHlEYXRlIiwic3RhcnRfZGF0ZV9sb2NhbCIsInB1c2giLCJzZXRUaW1lSW5ab25lTGlzdHMiLCJwb3dlclRpbWVJblpvbmUiLCJQb3dlclpvbmUiLCJoclRpbWVJblpvbmUiLCJIclpvbmUiLCJtYWluIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudCIsIlN0cmF2YUFwaUNsaWVudCIsInBvd2VyU3RyZWFtcyIsImhyU3RyZWFtcyIsImRldGFpbGVkQWN0aXZpdGllcyIsImxvZyIsImhyU3RyZWFtV2l0aElkIiwiZmluZCIsInN0cmVhbSIsImlkIiwicG93ZXJTdHJlYW1XaXRoSWQiLCJwb3dlckRpY3QiLCJoZWFydFJhdGVEaWN0IiwiYWRkU3RyZWFtc1RvQWN0aXZpdHkiLCJ0ZXN0IiwiRGF0YUNhbGN1bGF0b3IiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=