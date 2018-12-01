function autoHeight() {
    var messages_height = 0;
    $('#message').each(function(){
        messages_height -= $( this ).height();
    });
    $('#content').css('min-height', 0);
    $('#content').css('min-height', (
        $(document).height() 
        - $('#header').height() 
        - $('#footer').height()
        - messages_height
        + 50
   ));
 }

// onDocumentReady function bind
$(document).ready(function() {
    autoHeight();
});

// onResize bind of the function
$(window).resize(function() {
    autoHeight();
});
