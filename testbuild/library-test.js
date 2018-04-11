	
	Element.prototype.proto_remove = function() {
		this.parentElement.removeChild(this);
	};

	NodeList.prototype.proto_remove = HTMLCollection.prototype.remove = function() {
		for (i = this.length - 1; i >= 0; i -= 1) {
			if (this[i] && this[i].parentElement) {
				this[i].parentElement.removeChild(this[i])
			}
		}
	};
	
	var lib = {
		dbg: {
			getJSON: function(url, onSuccess, get_remove_selector) {
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.open('GET', url, true);
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4) {
						if (xmlhttp.status == 200) {
							if (get_remove_selector) {
								onSuccess(JSON.parse(xmlhttp.responseText), get_remove_selector);
							} else {
								onSuccess(JSON.parse(xmlhttp.responseText));								
							}
						}
					}
				}
				xmlhttp.send(null);				
			},
			element: function(type, param1, param2) {
				if (type == "link") {
					var ne = document.createElement("link");
					ne.rel = "stylesheet";
					ne.href = param1;
					document.head.appendChild(ne);
				} else 
				if (!param2) {
					var ne = document.createElement("script");
					ne.src = param1;
					document.body.appendChild(ne);
				} else {
					var ne = document.createElement("script");
					ne.src = param1;
					ne.type = param2;	
					document.body.appendChild(ne);				
				}
			},
			elementId: function(id, type, param1, param2) {
				if (type == "link") {
					var ne = document.createElement("link");
					ne.id = id;
					ne.rel = "stylesheet";
					ne.href = param1;
					document.head.appendChild(ne);
				} else 
				if (!param2) {
					var ne = document.createElement("script");
					ne.id = id;
					ne.src = param1;
					document.body.appendChild(ne);
				} else {
					var ne = document.createElement("script");
					ne.id = id;
					ne.src = param1;
					ne.type = param2;			
					document.body.appendChild(ne);		
				}				
			}
		}
	};
	
	function _(library) {

		if (library) {

			if (window === this) {
				return new _(library);
			}

			if (library.split(":")[0] == "nocdn") {
				library = library.split(":")[1];
			}

			this.e = library;
			return this;

		} else {
			return "undefined";
		}
	}

	_.prototype = {
		add: function(ver, prop) {
			if (this.e != "create-local" && this.e != "create-url") {
				if (!ver) {
					ver = "latest";
				}
				lib.dbg.getJSON("https://api.cdnjs.com/libraries?search=" + this.e, function(cdn) {
					var a;
					var b;
					var x;
					var y;
					var z;
					if (!prop) {
						x = cdn.results[0].latest;
						y = x.split(".")[x.split(".").length - 1];
						if (y.toLowerCase() == "css") {
							lib.dbg.element("link", x);
						} else
						if (y.toLowerCase() == "js") {
							lib.dbg.element("script", x);
						} else {
							lib.dbg.element("script", x, "text/" + y);
						}
					} else {
						x = cdn.results[0].latest;
						y = x.split(".")[x.split(".").length - 1];
						z = Object.getOwnPropertyNames(prop);
						b = Math.random();

						
						x = cdn.results[0].latest;
						y = x.split(".")[x.split(".").length - 1];
						if (y.toLowerCase() == "css") {
							lib.dbg.elementId(b, "link", x);
						} else
						if (y.toLowerCase() == "js") {
							lib.dbg.elementId(b, "script", x);
						} else {
							lib.dbg.elementId(b, "script", x, "text/" + y);
						}

						for (i = 0; i < z.length; i++) {
							var j = i + 1;
							if (j != z.length) {
								if (z[i] != "id") {
									alert(b);
									document.getElementById(b).setAttribute(z[i], prop[z[i]]);
								}
							} else {
								document.getElementById(b).setAttribute(z[i], prop[z[i]]);
								document.getElementById(b).removeAttribute("id");
							}
						}
					}
				});
			} else {
				var a;
				var b;
				var x;
				var y;
				var z;
				if (!prop) {
					x = ver;
					y = x.split(".")[x.split(".").length - 1];
					if (y.toLowerCase() == "css") {
						lib.dbg.element("link", x);
					} else
					if (y.toLowerCase() == "js") {
						lib.dbg.element("script", x);
					} else {
						lib.dbg.element("script", x, "text/" + y);
					}
				} else {
					x = ver;
					y = x.split(".")[x.split(".").length - 1];
					z = Object.keys(prop);
					a = Object.getOwnPropertyNames(prop);
					b = Math.random();

					if (y.toLowerCase() == "css") {
						lib.dbg.elementId(b, "link", x);
					} else
					if (y.toLowerCase() == "js") {
						lib.dbg.elementId(b, "script", x);
					} else {
						lib.dbg.elementId(b, "script", x, "text/" + y);
					}

					for (i = 0; i < z.length; i++) {
						var j = i + 1;
						if (j != z.length) {
							if (z[i] != "id") {
								document.getElementById(b).setAttribute(z[i], prop[z[i]]);
							}
						} else {
							document.getElementById(b).setAttribute(z[i], prop[z[i]]);
							document.getElementById(b).removeAttribute("id");
						}
					}

				}
			}
		},
		get: function(func) {
			if (func) {
				if (this.e != "select-all" && this.e != "select-css" && this.e != "select-js" && this.e != "select-scripts") {
					var xmlhttp = new XMLHttpRequest();
					var url = "https://api.cdnjs.com/libraries?search=" + this.e;
					xmlhttp.open('GET', url, true);
					xmlhttp.onreadystatechange = function() {
						if (xmlhttp.readyState == 4) {
							if (xmlhttp.status == 200) {
								var cdn = JSON.parse(xmlhttp.responseText);
								var x;
								var y;
								var z;
								var a;
								var b;
								x = cdn.results[0].latest;
								y = x.split(".")[x.split(".").length - 1];
								if (y.toLowerCase() == "css") {
									func(document.getElementsByTagName("link"));
								} else
								if (y.toLowerCase() == "js") {
									lib.dbg.element("script", x);
								} else {
									lib.dbg.element("script", x, "text/" + y);
								}
							}
						}
					}
					xmlhttp.send(null);		
				}
			} else {
				console.log("Please include a function: _('" + this.e + "').get('function(myElement){ myElement.setAttribute('data-test', 'true') });");
			}
		}
	};

	var $all = "nocdn:select-all";
	var $css = "nocdn:select-css";
	var $js = "nocdn:select-js";
	var $scripts = "nocdn:select-scripts";
	var $local = "nocdn:create-local";
	var $url = "nocdn:create-url";
	
	_("bootswatch").add();