$(document).ready(function(){
                  
                  
        $('#search').click(function(){
          
          var search=$('#searchTerm').val();
         
          
          $.ajax({
                type: "GET",
                url: "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + search + "&callback=?",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (data) {
                 console.log('this work');
                  
                 clearHistory(); 
                 populateField(data);
                    
                },
                error: function (errorMessage) {
                    console.log(errorMessage + "dosent work");
                }
                
             

       
          });//ajax
         
     

        });//click    
  
  $('#searchTerm').keypress(function(e){
    if(e.which==13){
      $('#search').click();
    }
  });

  
                  
   function populateField(nesto) {
     
     for(var i=0; i<nesto[1].length; i++){
       
       $('#output').prepend("<div 'class='col-sm-8 col-sm-offset-2'><a href='"+nesto[3][i]+"' target='_blank'><div class='datadisplay'><h1>"+nesto[1][i]+ "</h1></a><p>"+nesto[2][i]+"</p></div></div>");
        
       
        }
    }  //populeteField            
       function clearHistory(){
         
          $('#output').html(" ");
       }//clearHistory           
                  
});//doc