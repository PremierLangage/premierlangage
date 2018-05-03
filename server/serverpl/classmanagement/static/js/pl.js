$( "#navbar" ).on('show.bs.collapse', function () {
    $( "#content" ).css("padding-top", 220);
})

$( "#navbar" ).on('hidden.bs.collapse', function () {
    $( "#content" ).css("padding-top", 0);
})
