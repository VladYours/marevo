"use strict";

b4w.register("example_main", function(exports, require) {

var m_tex    = require("textures");
var m_data   = require("data");
var m_app    = require("app");
var m_main   = require("main");
var m_sfx    = require("sfx");
var m_scenes  = require("scenes");



exports.init = function() {
    m_app.init({
        canvas_container_id: "canvas3d",
        callback: init_cb,
        physics_enabled: false,
        alpha: true,
        autoresize: true
    });
}

exports.ct = function(nf) {
    
    var obj = m_scenes.get_object_by_name("Mesh-0");
    var tex = new Image();
    tex.src = nf;
    m_tex.replace_image(obj, "tx0", tex);
    
}

exports.ct1 = function(nf) {
    
    var obj = m_scenes.get_object_by_name("Mesh-1");
    var tex = new Image();
    tex.src = nf;
    m_tex.replace_image(obj, "tx1", tex);
    
}

exports.ct2 = function(nf) {
    
    var obj = m_scenes.get_object_by_name("Mesh-2");
    var tex = new Image();
    tex.src = nf;
    m_tex.replace_image(obj, "tx2", tex);
    
}

function init_cb(canvas_elem, success) {

    if(!success) {
        console.log("b4w init failure");
        return;
    }
    // m_app.enable_controls(canvas_elem);
    window.onresize = on_resize;
    on_resize();
    load();
}

function load() {
    m_data.load("untitled.json", load_cb);
}

function load_cb(data_id) {
    m_app.enable_camera_controls();
    load_data();
}

function load_data() {
    var obj = m_scenes.get_object_by_name("Mesh-0");
    var obj1 = m_scenes.get_object_by_name("Mesh-1");
    var obj2 = m_scenes.get_object_by_name("Mesh-2");
    
    var tex = new Image();
    tex.src = "leather_baseColor.jpg";
    m_tex.replace_image(obj, "tx0", tex);
    
    tex = new Image();
    tex.src = "metall_baseColor.jpg";
    m_tex.replace_image(obj1, "tx1", tex);
    
    tex = new Image();
    tex.src = "strap_baseColor.jpg";
    m_tex.replace_image(obj2, "tx2", tex);
    
	document.getElementById("load").style.display = "none";
}


function on_resize() {
	
    var w = parseInt(document.getElementById("canvas3d").style.width);
    var h = parseInt(document.getElementById("canvas3d").style.height);
	
   /* var w = window.innerWidth;
    var h = window.innerHeight;*/
    // m_main.resize(w, h);
	//alert(w+"/"+h+"/"+w1+"/"+parseInt(h1));
	
}

});

b4w.require("example_main").init();
