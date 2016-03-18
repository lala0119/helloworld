// var mongoContext = require('../../models/mongoManager'),
//     async = require('async'),
//     scm = require('../../models/sessionManager'),
//     // azure = require('./azureManager'),
//     defaultAPI = require('./defaultAPI'),
//     config = require('../../config'),
//     obj_scmId = config.obj_scmId;

// var GameAPI = {
// 	getGamePageData:function(gameName, callback, isReload){

// 		async.parallel({
// 			GPUs: function(cb){
// 				GameAPI.getTopTenGpuByAvgFPS(gameName, function(data){
// 					cb(null, data);
// 				}, isReload);
// 			},
// 			spec: function(cb){
// 				GameAPI.dbPublisherRequirement(gameName, function(data){
// 					cb(null, data);
// 				}, isReload);
// 			},
// 			topGPU: function(cb){
// 				GameAPI.dbMustPopularGPUByGame(gameName, function(data){
// 					cb(null, data);
// 				}, isReload);
// 			},
// 			topCPU: function(cb){
// 				GameAPI.dbMustPopularCPUByGame(gameName, function(data){
// 					cb(null, data);
// 				}, isReload);
// 			},
// 			memberCount: function(cb){
// 				GameAPI.dbAccountsNumByGame(gameName, function(data){
// 					cb(null, data);
// 				}, isReload);
// 			},
// 			gameInfo: function(cb){
// 				GameAPI.dbGameInfoByGame(gameName, function(data){
// 					cb(null, data);
// 				}, isReload);
// 			},
// 		},
// 		function(err, results){
// 			callback(results);
// 		    // results is now equal to ['one', 'two']
// 		});
// 	},
// 	// reloadGamePageData:function(gameName){
// 	// 	async.parallel({
// 	// 		GPUs: function(cb){
// 	// 			GameAPI.getTopTenGpuByAvgFPS(gameName, function(data){
// 	// 				cb(null, data);
// 	// 			}, true);
// 	// 		},
// 	// 		spec: function(cb){
// 	// 			GameAPI.dbPublisherRequirement(gameName, function(data){
// 	// 				cb(null, data);
// 	// 			}, true);
// 	// 		},
// 	// 		topGPU: function(cb){
// 	// 			GameAPI.dbMustPopularGPUByGame(gameName, function(data){
// 	// 				cb(null, data);
// 	// 			}, true);
// 	// 		},
// 	// 		topCPU: function(cb){
// 	// 			GameAPI.dbMustPopularCPUByGame(gameName, function(data){
// 	// 				cb(null, data);
// 	// 			}, true);
// 	// 		},
// 	// 		memberCount: function(cb){
// 	// 			GameAPI.dbAccountsNumByGame(gameName, function(data){
// 	// 				cb(null, data);
// 	// 			}, true);
// 	// 		},
// 	// 		gameInfo: function(cb){
// 	// 			GameAPI.dbGameInfoByGame(gameName, function(data){
// 	// 				cb(null, data);
// 	// 			}, true);
// 	// 		},
// 	// 	},
// 	// 	function(err, results){
// 	// 		callback(results);
// 	// 	    // results is now equal to ['one', 'two']
// 	// 	});
// 	// },

// 	getTopTenGpuByAvgFPS:function(gameName, callback, isReload) {
// 		var scmId = obj_scmId.topTenGpu + gameName,
// 			resolutions = config.resolutions,
// 			self = this;
// 			setData = (function(){

// 		        defaultAPI.dbTopTenGPUs(function(item){
// 		    //     	var num_reqTemp = item.length,
// 						// num_resTemp = 0,
// 						// arr_GPUs = [],
// 					// var obj_GPUs = {},
// 					// 	arr_AvgFPS = [];
// 					// 	itemL = item.length;
// 						// arr_input = [];

// 					// for(var i = 0; i < itemL; i++) {
// 					// 	arr_input.push(i);
// 					// }
// 					async.map(item, (function(i, cb){
// 						GameAPI.dbAvgFPSByGPUAndGameName(gameName, i, resolutions, function(FPSData){
// 							// console.log('FPSData-'+JSON.stringify(FPSData));
// 		     //    			obj_GPUs[FPSData.GPU] = FPSData.arr_FPS;
// 		        			cb(null, FPSData);
// 		        		}, isReload)
// 					}), (function(err, result){

// 						scm.createSession(scmId, result);
// 						callback(result);
// 						console.log('scmId-' + scmId + ',  result-' + JSON.stringify(result));

// 						// for(var j = 0; j < itemL; j++){

//       //   					arr_AvgFPS[j] = {};
//       //   					arr_AvgFPS[j].name = item[j];
//       //   					arr_AvgFPS[j].data = obj_GPUs[item[j]];
//       //   				}

//       //   				console.log('--------------------------------------------');
// 						// console.log('arr_AvgFPS-' + JSON.stringify(arr_AvgFPS));        				
//         				// scm.createSession(scmId, arr_AvgFPS);
//       //   				console.log('arr_AvgFPS-' + JSON.stringify(arr_AvgFPS));
//       //   				callback(arr_AvgFPS);
// 					}))
// 		        	// for(var i = 0; i < num_reqTemp; i++) {
// 		        	// 	gameAPI.dbAvgFPSByGPUAndGameName(gameName, item[i], resolutions, function(FPSData){
// 		        	// 		// console.log('FPSData.GPU-' + FPSData.GPU + 'FPSData.arr_FPS-'+FPSData.arr_FPS);
// 		        	// 		obj_GPUs[FPSData.GPU] = FPSData.arr_FPS;
// 		        	// 		// arr_GPUs.push(FPSData);
// 		        	// 		// arr_GPUs[FPSData.GPU] = FPSData.arr_FPS;
// 		        	// 		num_resTemp++;

// 		        	// 		if(num_resTemp == num_reqTemp){
// 		        	// 			for(var j = 0; j < item.length; j++){
// 		        	// 				// console.log('data-' + obj_GPUs[item[j]] + ", name-" + item[j]);
// 		        	// 				arr_AvgFPS[j] = {};
// 		        	// 				arr_AvgFPS[j].name = item[j];
// 		        	// 				arr_AvgFPS[j].data = obj_GPUs[item[j]];
// 		        	// 			}
// 		        	// 			scm.createSession(scmId, arr_AvgFPS);
// 		        	// 			callback(arr_AvgFPS);
// 		        	// 		}

// 		        	// 	})
// 		        	// }
// 		        })
// 			});
// 		// setData()
// 		if(isReload){
// 			setData();
// 			return;
// 		}

// 		scm.getSession(scmId, setData, function(data){ callback(data); });
//     },
//     getFiveGPUFPSByPopAndGame:function (gameName, callback) {
// 		this.getTopTenGpuByAvgFPS(gameName, function(data){ 
// 			// --- because  resolutions: ["1920, 1080", "2560, 1440", "3840, 2160"] ---
// 			// we just need the data for  "1920, 1080", so we get the first data from array
// 			var arr_data = [],
// 				num_total = 5,
// 				num_resIndex = 0;
// 			for(var i = 0; i < num_total; i++){
// 				arr_data.push({GPU: data[i].GPU, avgFPS: data[i].arr_FPS[0]});
// 			}
// 			console.log('arr_data-'+JSON.stringify(arr_data));
// 			callback(arr_data);
// 		});
//     },
//     dbAccountsNumByGame: function(gameName, callback, isReload){
//     	var scmId = obj_scmId.accountsNum + gameName,
// 	        setData = (function () {
// 	            mongoContext.getAccountsNumByGame(gameName,
// 	                function (item) {
// 	                    scm.createSession(scmId, item);
// 	                    callback(item);
// 	                },
// 	                function (err) { });
// 	        });
// 	    if(isReload){
// 			setData();
// 			return;
// 		}
// 	    scm.getSession(scmId, setData, function(data){ callback(data); });
//     },

//     dbMustPopularGPUByGame:function(gameName, callback, isReload){
//     	var scmId = obj_scmId.mustPopGPU + gameName,
// 	        setData = (function () {
// 	            mongoContext.getMustPopularGPUByGame(gameName,
// 	                function (item) {
// 	                    scm.createSession(scmId, item);
// 	                    callback(item);
// 	                },
// 	                function (err) { });
// 	        });
// 	    if(isReload){
// 			setData();
// 			return;
// 		}
// 	    scm.getSession(scmId, setData, function(data){ callback(data); });
//     },

//     dbMustPopularCPUByGame:function(gameName, callback, isReload){
//     	var scmId = obj_scmId.mustPopCPU + gameName,
// 	        setData = (function () {
// 	            mongoContext.getMustPopularCPUByGame(gameName,
// 	                function (item) {
// 	                    scm.createSession(scmId, item);
// 	                    callback(item);
// 	                },
// 	                function (err) { });
// 	        });
// 	    if(isReload){
// 			setData();
// 			return;
// 		}
// 	    scm.getSession(scmId, setData, function(data){ callback(data); });
//     },

//     dbPublisherRequirement:function(gameName, callback, isReload){
// 	    var scmId = obj_scmId.publisherRequirement + gameName,
// 	        setData = (function () {
// 	            mongoContext.getPublisherGameRequirement(gameName,
// 	                function (item) {
// 	                    scm.createSession(scmId, item);
// 	                    callback(item);
// 	                },
// 	                function (err) { });
// 	        });
// 	    // setData();
// 	    if(isReload){
// 			setData();
// 			return;
// 		}
// 	    scm.getSession(scmId, setData, function(data){ callback(data); });
//     },
// 	dbAvgFPSByGPUAndGameName:function(gameName, GPU, resolutions, callback, isReload){
// 		var scmId = obj_scmId.aveFPS + gameName + "and" + GPU,
// 	    	setData = (function(){
// 	    		mongoContext.getAvgFPSByGPUAndGameName(gameName, GPU,
// 			        function (item) {
// 			        	// item.GPU = GPU;
// 			        	// console.log(JSON.stringify(item));
// 			        	var arr_FPS = [],
// 			        		obj_FPS={};
// 			        	// --- init FPS value --- 
// 			        	for(var i = 0; i < 3; i++){
// 			        		arr_FPS[i] = null;
// 			        	}
// 			        	for(var i = 0; i < item.length; i++ ){
// 			        		for( var j = 0; j < resolutions.length; j++){
// 			        			if(item[i]._id.Resolution == resolutions[j]){
// 			        				arr_FPS[j] = parseInt(item[i].avgFPS, 10);
// 			        			}
// 			        		}
// 			        	}
// 			        	obj_FPS.GPU = GPU;
// 			        	obj_FPS.arr_FPS = arr_FPS;
// 			        	scm.createSession(scmId, obj_FPS);
// 			        	callback(obj_FPS);
// 			        	// callback(item);
// 			        },
// 			        function (err) { });
// 		    });
// 		if(isReload){
// 			setData();
// 			return;
// 		}
//     	scm.getSession(scmId, setData, function(data){ callback(data); });
//     	// setData();
// 	},
// 	dbGameInfoByGame:function(gameName, callback, isReload){
//     	var scmId = obj_scmId.gameInfo + gameName,
// 	        setData = (function () {
// 	            mongoContext.getGameInfoByGame(gameName,
// 	                function (item) {
// 	                    scm.createSession(scmId, item);
// 	                    callback(item);
// 	                },
// 	                function (err) { });
// 	        });
// 	    // setData();
// 	    if(isReload){
// 			setData();
// 			return;
// 		}
// 	    scm.getSession(scmId, setData, function(data){ callback(data); });
//     },
// }
// module.exports = GameAPI;