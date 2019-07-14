"use strict";angular.module("MetronicApp").factory("RunJobService",["$window","$q","DataService","ScrapeService",function(t,a,e,n){var s=this;return s.getPermissions=function(e){var t=a.defer();return chrome.permissions.request({permissions:e},function(e){e?t.resolve(!0):(alert("DataMiner needs your permission to download"),t.reject(!1))}),t.promise},s.startJob=function(i){var r,l=!(s.files=[]),c=1,g=async.cargo(function(e,t){var a=e[0].data;"download.image"==i.type?l||n.downloadImage(a,i,function(e){s.files.push(e),$scope.$digest()}):"download.page"==i.type?l||n.downloadPage(a,i,function(e){s.files.push(e),setTimeout(function(){t()},1e3*i.wait_time+Math.random()*i.wait_time*500)}):"scrape.page"==i.type?l||n.scrapePage(r,a,i,function(e){s.files.push(e)},function(e){void 0!==e&&void 0!==e.error&&(l=!0,n.stop(),o.getButton("btn-stop").click()),t()}):"utility.replace"==i.type&&(l||n.replace(a,i,function(t){var e={type:"data",name:file.name,created_at:(new Date).toLocaleString(),data:{}};e.data=t,e.col_count=Object.keys(t).length,datasets.db.collection.add(e),datasets.db.collection.where("name").equals(i.collection).toArray(function(e){s.files.push(t),$scope.$digest()})}))},1);g.drain=function(){console.log("All jobs finished"),r&&r.id&&chrome.tabs.remove(r.id),u("Finished processing all pages",!0)};var o=BootstrapDialog.show({size:BootstrapDialog.SIZE_NORMAL,message:"<span id='dialogMessage'><span class='dialog-main-text'>Scraping job started</span><br><br><i class='fa fa-eye'></i> You can view the accumulating data in your <a href='/admin/index.html#/collections' target='_blank'> Collection <i class='fa fa-external-link'></i></a> while the job is running.<br><br><img src='../assets/layouts/layout/img/job-tip.png'><br></span>",title:"Data Miner",buttons:[{id:"btn-stop",label:"Stop",icon:"fa fa-stop",action:function(e){g.kill();var t=e.getButtons();"Close"==t[0].label?e.close():(l=!0,n.stop(),t[0].label="Close",t[0].icon="",e.updateButtons())}}]});o.getModal().css({top:"10%","margin-top":"0"});var u=function(e,t){var a=(new Date).toLocaleString();if(o.getModalBody().find("#dialogMessage").html(e+"<br><br><br>"+a),t){var n=o.getButtons();n[0].label="Close",n[0].icon="",o.updateButtons()}},d=chrome.extension.getBackgroundPage().dmBackground.serverData;e.getCollectionData(i.collection).then(function(e){var t=i.source_range.split("-");""===i.source_range?(i.range_start=0,i.range_end=e.length):"-"===i.source_range.slice(-1)?(i.range_start=Math.max(0,parseInt(t[0])-1),i.range_end=e.length):"-"===i.source_range[0]?(i.range_start=0,i.range_end=Math.min(e.length,parseInt(t[1])-1)):2===t.length?(i.range_start=Math.max(0,parseInt(t[0])-1),i.range_end=Math.min(e.length,parseInt(t[1]))):(i.range_start=0,i.range_end=e.length),d.capability.multi.enabled||(i.range_end=Math.min(i.range_end,i.range_start+3));for(var a=[],n=i.range_start;n<i.range_end;n++){var o=e[n].data[Object.keys(e[n].data)[i.position-1]];o&&0==o.toLowerCase().indexOf("http")&&a.push(e[n])}if(0<a.length&&"scrape.page"==i.type){var s=0;0!==i.start_delay&&(s=60*i.start_delay*1e3,u("Waiting for "+i.start_delay+" minute(s) before starting this job. <br><br> You must leave your browser running but you can minimize it and lock your computer screen through your operating system.")),setTimeout(function(){l||chrome.tabs.create({url:"admin/starting.html"},function(e){r=e,g.push(a,function(e){console.log("finished processing item"),u("<span id='dialogMessage'><span class='dialog-main-text'>Processed input rows: "+c+"</span><br><br><i class='fa fa-eye'></i> You can view the accumulating data in your <a href='/admin/index.html#/collections' target='_blank'> Collection <i class='fa fa-lg fa-external-link'></i></a>while the job is running.<br><br><img src='../assets/layouts/layout/img/job-tip.png'></span>"),c+=1;var t=chrome.extension.getBackgroundPage().dmBackground.serverData;"segment"in t&&(u(t.segment.restrictedCols),l=!0)})})},s)}else g.push(a,function(e){console.log("finished processing item"),u("Processed Page: "+c),c+=1})},function(e){t.alert(e)})},{getPermissions:s.getPermissions,startJob:s.startJob}}]);
//# sourceMappingURL=../../../../map/common/js/services/RunJobService.js.map