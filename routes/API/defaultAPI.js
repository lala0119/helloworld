// var scm = require('../../models/sessionManager'),
// 	config = require('../../config'),
// 	async = require('async'),
// 	mongoContext = require('../../models/mongoManager'),
//     obj_scmId = config.obj_scmId;
// var defaultAPI = {
// 	getMostPopGame: function(callback){
// 		var _getTopOne = function(data){
// 				callback(data[0]);
// 			};
// 		this.dbTopTenGames(_getTopOne);
// 	},
// 	reloadDefault:function(callback){
// 		async.parallel({
// 			GPUs: function(cb){
// 				defaultAPI.dbTopTenGPUs(function(data){
// 					cb(null, data);
// 				}, true);
// 			},
// 			Games: function(cb){
// 				defaultAPI.dbTopTenGames(function(data){
// 					cb(null, data);
// 				}, true);
// 			},
// 		},
// 		// optional callback
// 		function(err, results){
// 			callback(results);
// 		    // results is now equal to ['one', 'two']
// 		});
		
// 	},
//     dbTopTenGPUs:function(callback, isReload){
// 		var scmId = obj_scmId.topTenGpuByPop,
// 			setData = (function(){
// 				mongoContext.getTopPopularGPUList( function(item){
// 						var str_GPUName,
// 							arr_sortGPUs = [];
// 						for(var i = 0, topTen = 0; topTen < 10 ; i++){
// 							str_GPUName = item[i]._id[0];
// 							// console.log('str_GPUName-'+str_GPUName+', i-'+i);
// 							if(str_GPUName){
// 								arr_sortGPUs.push(str_GPUName);
// 								topTen++;
// 							}
// 						}
// 						// console.log('dbTopTenGPUs-' + arr_sortGPUs);
// 						scm.createSession(scmId, arr_sortGPUs);
// 						callback(arr_sortGPUs)
// 					},
// 		        	function (err) { }
// 		        );
// 			});
// 		if(isReload){
// 			setData();
// 			return;
// 		}
//         scm.getSession(scmId, setData, function(data){ callback(data); });
// 	},
// 	dbTopTenGames: function(callback, isReload) {
// 		var scmId = obj_scmId.topTenGameBypop,
// 			setData = (function(){
// 				mongoContext.getTopPopularGameList( function(item){
// 						var arr_sortGames = [],
// 							str_gameName = '';
// 						for(var i = 0, topTen = 0; topTen < 10 ; i++){
// 							str_gameName = item[i]._id;
// 							if(str_gameName){
// 								arr_sortGames.push({name:str_gameName, total:item[i].total});
// 								topTen++;
// 							}
// 						}
// 						scm.createSession(scmId, arr_sortGames);
// 						callback(arr_sortGames)
// 					},
// 		        	function (err) { }
// 		        );
// 			});
// 		if(isReload){
// 			setData();
// 			return;
// 		}
//         scm.getSession(scmId, setData, function(data){ callback(data); });
// 	}

// };
// module.exports = defaultAPI;