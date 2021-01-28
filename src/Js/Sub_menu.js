
function Open_tab_page(e){
    var item=document.getElementsByClassName("sub-menu-page");
    for(var i=0;i<item.length;i++){
        item[i].classList.remove("active");
    }
    e.classList.add("active");
}
function Close_tab_page(e){
    e.classList.remove("active");
}


