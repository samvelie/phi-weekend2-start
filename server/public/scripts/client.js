var indexOfPhier = 0;

$(document).ready(function(){

  $('#next').on('click', function(){
    if(indexOfPhier==17){
      indexOfPhier=0;
    } else{
    indexOfPhier++;
    }
    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        // yay! we have data!
        console.log('returned data from server: ', data);
        showInDOM(data.phirephiters[indexOfPhier].name)
      }
    });
  })

  $('#previous').on('click', function(){
    if(indexOfPhier==0){
      indexOfPhier=17;
    } else{
    indexOfPhier--;
    }
    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        // yay! we have data!
        console.log('returned data from server: ', data);
        showInDOM(data.phirephiters[indexOfPhier].name)
      }
    });
  })



    function showInDOM(person){
      $('#people').text(person);
    }
});
