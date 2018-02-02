$(document).ready(function() {
    
    setCardTextHeightProf(getHighestProf());
    setCardTextHeightTitle(getHighestTitle());
    
    function getHighestTitle() {
        height = 0;
        $(".card-title").each(function() {
            if ($( this ).height() > height)
                height = $( this ).height();
        });
        
        return height;
    }
    
    function setCardTextHeightTitle(height) {
        $(".card-title").each(function() {
            $( this ).height(height);
        });
    }
    
    function getHighestProf() {
        height = 0;
        $(".card-prof").each(function() {
            if ($( this ).height() > height)
                height = $( this ).height();
        });
        
        return height;
    }
    
    function setCardTextHeightProf(height) {
        $(".card-prof").each(function() {
            $( this ).height(height);
        });
    }
})
