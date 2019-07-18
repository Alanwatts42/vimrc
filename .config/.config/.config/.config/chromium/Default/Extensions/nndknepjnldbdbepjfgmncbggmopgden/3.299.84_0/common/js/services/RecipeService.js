"use strict";angular.module("MetronicApp").factory("RecipeService",["$window","$q","$http",function(r,a,m){var d,l,p=DM.globals.serverAPIURL;return{tryRecipesPromise:function(r){var e=r.results,t=r.tab.id,n=a.defer(),i={command:"tryRecipeTab",payload:{tab:t,communityRecipes:e.communityRecipes,userRecipes:e.userRecipes,mode:"try"}};return chrome.extension.sendRequest(i,function(e){e.error&&self.error(e.error),e.result.communityRecipes=e.result.communityRecipes.sort(function(e,r){return r.containerQuality-e.containerQuality||r.quality-e.quality}),r.results=e.result,n.resolve(r)}),n.promise},getRecipesPromise:function(n){var r,i=n.urlInfo,t=n.source,o=n.recipe_id,s=a.defer(),c=chrome.runtime.getManifest().version,u=chrome.extension.getBackgroundPage().dmBackground;return r=void 0!==o?p+"recipe/"+o+"/?":p+"recipe_list/"+i.domain+"/?",m({method:"GET",url:r+"user_id="+u.user.user_id+"&uid="+u.user.uid+"&v="+c+"&segment="+u.serverData.segment+"&yc="+u.counters.today_count+"&lc="+u.counters.total_count+"&token="+encodeURIComponent(u.counters.token)+"&install_date="+u.user.install_date||u.extension.install_date||"&source="+t+"&url="+encodeURIComponent(i.url).slice(0,1e3)}).then(function(e){if(200===e.status){var r=e.data;if(u.serverData=r,u.user.user_id=r.user_id,angular.forEach(r.userRecipes,function(e,r){e.data=JSON.parse(e.data)}),angular.forEach(r.communityRecipes,function(e,r){e.data=JSON.parse(e.data)}),r.communityRecipes&&(l=r.communityRecipes),r.userRecipes&&(d=r.userRecipes),r.communityRecipes&&(r.communityRecipes=$.grep(r.communityRecipes,function(e){if(void 0===e.regex_domain||""===e.regex_domain)return!1;var r=new RegExp(e.regex_domain,"gi");return null!==i.domain.match(r)})),o){var t=[];void 0!==r.userRecipes&&(t=r.userRecipes.filter(function(e){return e.id===o})[0]),0===t.length&&void 0!==r.communityRecipes&&(t=r.communityRecipes.filter(function(e){return e.id===o})[0]),0===t.length&&(console.error(e),s.reject("Recipe ID "+o+" is not found. Perhaps the public recipe that you were using is deleted or not longer shared."))}n.results=r,s.resolve(n)}else console.error(e),s.reject("Something went wrong!!!")},function(r){console.error(e.stack||e),s.reject("Can not contact server: "+e.status+" "+e.statusText)}),s.promise},getRecipesCached:function(e,r,t){return{userRecipes:d,communityRecipes:l}}}}]);
//# sourceMappingURL=../../../../map/common/js/services/RecipeService.js.map