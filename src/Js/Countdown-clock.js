import React from 'react';

var d = null;
var h = null;
var m=  null;
var s = null;
var timeout = null;
function start() {
    if(d === null){
        d=11;
        h=12;
        m=45;
        s=59;
    }
    if( h === -1 ){
        d -= 1;
        h = 12;
        m = 45;
        s = 59;
    }
    if (s === -1) {
        m -= 1;
        s = 59;
    }
    if (m === -1) {
        h -= 1;
        m = 59;
    }
    if (d === -1) {
        clearTimeout(timeout);
        return false;
    }
    document.getElementById("d").innerText = d.toString();
    document.getElementById("h").innerText = h.toString();
    document.getElementById("m").innerText = m.toString();
    document.getElementById("s").innerText = s.toString();

    timeout = setTimeout(function (){
        s-=1;
        start();
    }, 1000)
}







