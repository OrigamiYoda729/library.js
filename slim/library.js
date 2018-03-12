library = {
    cdn: {
		get: function(cplugin) {
			var plugin = library.debug.cdn(cplugin.toLowerCase());
			if (plugin != "invalid") {
				library.debug.write(plugin);
			} else {
				console.log('"' + cplugin + '"' + ' is an invalid plugin.');
			}
		},
		remove: function(cplugin) {
			var plugin = library.debug.cdn(cplugin.toLowerCase());
			if (plugin != "invalid") {
				library.debug.remove(plugin);
			} else {
				console.log('"' + cplugin + '"' + ' is an invalid plugin.');
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
		write: function(source) {
			var csource = source.split(".");
			var filetype = csource[csource.length - 1].toLowerCase();
			
			if (filetype == "css") {
				var new_stylesheet = document.createElement("link");
				new_stylesheet.rel = "stylesheet";
				new_stylesheet.href = source;
				document.head.appendChild(new_stylesheet);				
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
					if (rcur_script[i].href == rsource) {
						document.getElementsByTagName("script")[i].removeAttribute("src");
					}
				}
			} else {
				var rcur_cscript = document.getElementsByTagName("script");
				for (i = 0; i < rcur_cscript.length; i++) {
					if (rcur_cscript[i].href == rsource) {
						document.getElementsByTagName("script")[i].removeAttribute("src");
						document.getElementsByTagName("script")[i].removeAttribute("type");
					}
				}
			}
		},
		cdn: function(ck_plugin) {

			if (ck_plugin === "bootstrap-css") {
				return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
			} else 
			if (ck_plugin === "bootstrap-js") {
				return "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
			} else {
				return "invalid";
			}
			
		}
		
	}
}