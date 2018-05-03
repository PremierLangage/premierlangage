$(document).ready(function(){
  
    var c=1;
    $('.block-chart').each(function(){
        var thisId = 'chart'+c;
        $(this).attr('id',thisId);
        makeChart('#'+thisId);
        c++;
    })
  
    function makeChart(id){
        $(id).empty();
        var masterArray = $(id).data('numbers');
        var theTotal = masterArray[0][0];
        var blockArray = [];
        var nb_line = getNbLine(masterArray[0][0]);
        var div_height = masterArray[0][1];
        for(i=1; i<masterArray.length; i++)
            blockArray = addBlocks(id, masterArray[i][1], masterArray[i][2], masterArray, blockArray, nb_line, div_height);
        
        addBlock(id, blockArray, 0, 15);
    }
  
    function addBlock(id,blockArray,i,timeout){
        if(i<blockArray.length){
            $(id).append(blockArray[i]);
            i++;
            timeout += 0.5;
            setTimeout(function(){ addBlock(id,blockArray,i,timeout); },timeout)
        }
    }
  
    function addBlocks(id, noOfBlocks, classBlock, masterArray, blockArray, nb_line, div_height){
        //~ blindness = "";
        //~ if (masterArray[0][2] === "PR")
            //~ blindness = "-protanopia";
        //~ else if (masterArray[0][2] === "TR")
            //~ blindness = "-tritanopia";
        //~ else if (masterArray[0][2] === "DE")
            //~ blindness = "-deuteranopia";
            
        for(b=0;b<noOfBlocks;b++){
            if (masterArray[i][0])
                blockArray.push('<div style="width: '+90/nb_line+'%; height: '+div_height/nb_line+'px;" class="block '+classBlock+'"><p>'+ masterArray[i][0] +'</p></div>');
            else
                blockArray.push('<div style="width: '+90/nb_line+'%; height: '+div_height/nb_line+'px;" class="block '+classBlock+'"></div>');
        }
        return blockArray;
    }
  
    function calcTotal(id,array){
        var masterTotal=0;
        for(i=1;i<array.length;i++)
            masterTotal += array[i][1];
        return masterTotal;
    }
  
    function getNbLine(nb_square) {
        i = 0;
        while (i*i < nb_square) {
            i++;
        }
        return i;
    }
})
