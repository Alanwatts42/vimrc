var DM=DM||{};DM.testMode=!1,DM.urlOverride="https://data-miner.io",DM.globals={},DM.globals.type="DbetaM",DM.globals.fakeLocalURL=localStorage.fakeLocalURL||!1,"local1"===DM.globals.type?(DM.globals.serverURL="http://getdataminer.com:8000/",DM.globals.serverVoteURL="http://getdataminer.com:5000/v1.5/vote/",DM.globals.serverAPIURL="http://getdataminer.com:8000/v3/",DM.globals.analyticsID="UA-00000000-00"):"local2"===DM.globals.type?(DM.globals.serverURL="https://data-miner.io/vote/",DM.globals.serverVoteURL="http://localhost:5000/v1.5/vote/",DM.globals.serverAPIScrapeURL="https://data-miner.io/api/v1.5/job/submit2/",DM.globals.serverAPIURL="https://data-miner.io/v3/",DM.globals.analyticsID="UA-00000000-00"):"DbetaM"===DM.globals.type?(DM.globals.serverURL="https://data-miner.io/",DM.globals.serverVoteURL="https://api.data-miner.io/v1.5/vote/",DM.globals.serverAPIScrapeURL="https://data-miner.io/api/v1.5/job/submit2/",DM.globals.serverAPIURL="https://data-miner.io/v3/",DM.globals.analyticsID="UA-12630940-15"):"DliveM"===DM.globals.type&&(DM.globals.serverURL="https://data-miner.io/",DM.globals.serverVoteURL="https://api.data-miner.io/v1.5/vote/",DM.globals.serverAPIScrapeURL="https://data-miner.io/api/v1.5/job/submit2/",DM.globals.serverAPIURL="https://data-miner.io/v3/",DM.globals.analyticsID="UA-12630940-7");
//# sourceMappingURL=../../../map/common/js/global.js.map