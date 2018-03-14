library = {
    cdn: {
		get: function(cplugin) {
			var plugin = library.debug.cdn.load(cplugin.toLowerCase());
			if (plugin != "alternate") {
				library.debug.write(plugin);
			}
		},
		remove: function(cplugin) {
			var plugin = library.debug.cdn.unload(cplugin.toLowerCase());
			if (plugin != "alternate") {
				library.debug.remove(plugin);
			}
		}   
	},
	github: {
		repo: {
			get: function(in_http, branch, commit, in_path) {
				
				var in_url = in_http.toLowerCase().replace(".git", "").replace("https://github.com/", "https://raw.githubusercontent.com/");
				
				if (in_path.search(", ") == -1) {
					if (in_path.search(",") == -1) {
						var path = in_path;
						var paths = 1;
					} else {
						var path = in_path.split(",");
						var paths = path.length;
					}
				} else {
					var path = in_path.split(", ");
					var paths = path.length;
				}
					
				if (branch == "") {
					if (commit == "" || commit.toLowerCase() == "latest") {
						if (paths == 1) {
							library.debug.write(in_url + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.write(in_url + "/" + path[i]);
							}
						}
					} else {
						if (paths == 1) {
							library.debug.write(in_url + "/" + commit + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.write(in_url + "/" + commit + "/" + path[i]);
							}
						}
					}
				} else {
					if (commit == "" || commit.toLowerCase() == "latest") {
						if (paths == 1) {
							library.debug.write(in_url + "/" + branch + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.write(in_url + "/" + branch + "/" + path[i]);
							}
						}
					} else {
						if (paths == 1) {
							library.debug.write(in_url + "/" + branch + "/" + commit + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.write(in_url + "/" + branch + "/" + commit + "/" + path[i]);
							}
						}
					}				
				}
			},
			remove: function(in_http, branch, commit, in_path) {
				
				var in_url = in_http.toLowerCase().replace(".git", "").replace("https://github.com/", "https://raw.githubusercontent.com/");
				
				if (in_path.search(", ") == -1) {
					if (in_path.search(",") == -1) {
						var path = in_path;
						var paths = 1;
					} else {
						var path = in_path.split(",");
						var paths = path.length;
					}
				} else {
					var path = in_path.split(", ");
					var paths = path.length;
				}
					
				if (branch == "") {
					if (commit == "" || commit.toLowerCase() == "latest") {
						if (paths == 1) {
							library.debug.remove(in_url + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.remove(in_url + "/" + path[i]);
							}
						}
					} else {
						if (paths == 1) {
							library.debug.remove(in_url + "/" + commit + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.remove(in_url + "/" + commit + "/" + path[i]);
							}
						}
					}
				} else {
					if (commit == "" || commit.toLowerCase() == "latest") {
						if (paths == 1) {
							library.debug.remove(in_url + "/" + branch + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.remove(in_url + "/" + branch + "/" + path[i]);
							}
						}
					} else {
						if (paths == 1) {
							library.debug.remove(in_url + "/" + branch + "/" + commit + "/" + path);
						} else {
							for (i = 0; i < paths; i++) {
								library.debug.remove(in_url + "/" + branch + "/" + commit + "/" + path[i]);
							}
						}
					}				
				}
			}
		},
		gist: function(shareURL) {
			var gist = shareURL.split('"')[1];
			library.debug.write(gist);
		}
	},
	local: {
		get: function(in_files) {
				
			if (in_files.search(", ") == -1) {
				if (in_files.search(",") == -1) {
					var path = in_files;
					var paths = 1;
				} else {
					var path = in_files.split(",");
					var paths = path.length;
				}
			} else {
				var path = in_files.split(", ");
				var paths = path.length;
			}
			
			if (paths == 1) {
				library.debug.write(path);
			} else {
				for (i = 0; i < paths; i++) {
					library.debug.write(path[i]);
				}
			}
		},
		remove: function(in_files) {
				
			if (in_files.search(", ") == -1) {
				if (in_files.search(",") == -1) {
					var path = in_files;
					var paths = 1;
				} else {
					var path = in_files.split(",");
					var paths = path.length;
				}
			} else {
				var path = in_files.split(", ");
				var paths = path.length;
			}
			
			if (paths == 1) {
				library.debug.remove(path);
			} else {
				for (i = 0; i < paths; i++) {
					library.debug.remove(path[i]);
				}
			}
		}
	},
	debug: {
		write: function(source, cid) {
			alert(source);
			var csource = source.split(".");
			var filetype = csource[csource.length - 1].toLowerCase();
			
			if (filetype == "css") {
				var new_stylesheet = document.createElement("link");
				new_stylesheet.rel = "stylesheet";
				new_stylesheet.href = source;
				document.head.appendChild(new_stylesheet);				
			} else
			if (filetype == "js" && source.search("cdn/") != -1) {
				var new_jso = document.createElement("script");
				new_jso.src = source;
				new_jso.id = cid;
				document.head.appendChild(new_jso);	
			} else		
			if (filetype == "js" || filetype == "javascript") {
				var new_jscript = document.createElement("script");
				new_jscript.src = source;
				document.body.appendChild(new_jscript);				
			} else {				
				var new_cscript = document.createElement("script");
				new_cscript.type = "text/" + filetype;
				new_cscript.src = source;
				document.body.appendChild(new_cscript);				
			}
		},
		remove: function(rsource) {
			var crsource = rsource.split(".");
			var rfiletype = crsource[crsource.length - 1];
			if (rfiletype == "css") {
				var rcur_stylesheet = document.getElementsByTagName("link");
				for (i = 0; i < rcur_stylesheet.length; i++) {
					if (rcur_stylesheet[i].href == rsource) {
						document.getElementsByTagName("link")[i].removeAttribute("href");
						document.getElementsByTagName("link")[i].removeAttribute("rel");
					}
				}
			} else				
			if (rfiletype == "js" || rfiletype == "javascript") {
				var rcur_script = document.getElementsByTagName("script");
				for (i = 0; i < rcur_script.length; i++) {
					if (rcur_script[i].src == rsource) {
						document.getElementsByTagName("script")[i].removeAttribute("src");
					}
				} 
			} else {
				var rcur_cscript = document.getElementsByTagName("script");
				for (i = 0; i < rcur_cscript.length; i++) {
					if (rcur_cscript[i].src == rsource) {
						document.getElementsByTagName("script")[i].removeAttribute("src");
						document.getElementsByTagName("script")[i].removeAttribute("type");
					}
				}
			}
		},
		cscdn: function(ins_src) {
			library.debug.write(ins_src);
		},
		cdn: {
			load : function(ck_plugin) {
				if (ck_plugin === "jquery") {
					return "https://code.jquery.com/jquery-3.3.1.min.js";
				} else 
				if (ck_plugin === "jquery-slim") {
					return "https://code.jquery.com/jquery-3.3.1.slim.min.js";
				} else
				if (ck_plugin === "require-js") {
					return "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js";
				} else
				if (ck_plugin === "popper-js") {
					return "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
				} else
				if (ck_plugin === "bootstrap-css") {
					return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
				} else
				if (ck_plugin === "bootstrap-js") {
					return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
				} else 
				if (ck_plugin === "bootstrap-bundle") {
					return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js";
				} else 
				if (ck_plugin === "bootswatch-cerulean") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/cerulean/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-cosmo") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/cerulean/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-cyborg") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/cyborg/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-darkly") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/darkly/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-flatly") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/flatly/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-journal") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/journal/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-litera") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/litera/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-lux") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/lux/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-materia") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/materia/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-minty") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/minty/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-pulse") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/pulse/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-sandstone") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/sandstone/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-sketchy") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/sketchy/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-simplex") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/simplex/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-slate") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/slate/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-solar") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/solar/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-spacelab") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/spacelab/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-superhero") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/superhero/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-united") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/united/bootstrap.min.css";
				} else 
				if (ck_plugin === "bootswatch-yeti") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/yeti/bootstrap.min.css";
				} else 
				if (ck_plugin === "font-awesome") {
					return "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
				} else
				if (ck_plugin === "ionicons") {
					return "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
				} else {
					library.debug.write("full/cdn/" + ck_plugin + ".js", "load");	
					return "alternate";
				}
			},
			unload: function(uck_plugin) {
				if (uck_plugin === "jquery") {
					return "https://code.jquery.com/jquery-3.3.1.min.js";
				} else 
				if (uck_plugin === "jquery-slim") {
					return "https://code.jquery.com/jquery-3.3.1.slim.min.js";
				} else
				if (uck_plugin === "require-js") {
					return "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js";
				} else
				if (uck_plugin === "popper-js") {
					return "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
				} else
				if (uck_plugin === "bootstrap-css") {
					return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
				} else
				if (uck_plugin === "bootstrap-js") {
					return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
				} else 
				if (uck_plugin === "bootstrap-bundle") {
					return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js";
				} else 
				if (uck_plugin === "bootswatch-cerulean") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/cerulean/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-cosmo") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/cerulean/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-cyborg") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/cyborg/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-darkly") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/darkly/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-flatly") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/flatly/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-journal") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/journal/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-litera") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/litera/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-lux") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/lux/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-materia") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/materia/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-minty") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/minty/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-pulse") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/pulse/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-sandstone") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/sandstone/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-sketchy") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/sketchy/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-simplex") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/simplex/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-slate") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/slate/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-solar") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/solar/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-spacelab") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/spacelab/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-superhero") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/superhero/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-united") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/united/bootstrap.min.css";
				} else 
				if (uck_plugin === "bootswatch-yeti") {
					return "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/yeti/bootstrap.min.css";
				} else 
				if (uck_plugin === "font-awesome") {
					return "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
				} else
				if (uck_plugin === "ionicons") {
					return "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
				} else {
					library.debug.write("full/cdn/" + uck_plugin + ".js", "unload");	
					return "alternate";
				}
				
			}	
		}
	}
}