/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#vert').on('click',function(){
    activeDesactiveClassSurSelecteur(this, this.id);
});

$('#grande-police').on('click',function(){
    activeDesactiveClassSurSelecteur(this, this.id);
});

function activeDesactiveClassSurSelecteur(selecteur,classCss){
    if($(selecteur).hasClass(classCss)){
        $(selecteur).removeClass(classCss);
    }else{
        $(selecteur).addClass(classCss);
    }
}

$('#reset').on('click',function(){
    $("input").removeClass();
});

$('#all').on('click',function(){
    $("input[type='button']").addClass("vert grande-police");
});



