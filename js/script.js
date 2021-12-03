$(document).on('click','.th-click', function(){
    var id = $(this).attr('id') ;
    console.log(id);
    $(this).append('x');


 });