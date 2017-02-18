var indexOfPhier = 0;
var phinalIndex = 18;

$(document).ready(function(){

  $.get('/data',function(data){
    phinalIndex = data.phirephiters.length - 1;
    showInDOM(data.phirephiters[indexOfPhier].name);
  });

  $('#next').on('click', function(){
    if(indexOfPhier==17){
      indexOfPhier=0;
    } else{
    indexOfPhier++;
    }

    $.get('/data',function(data){
      showInDOM(data.phirephiters[indexOfPhier].name);
    })

  });

  $('#previous').on('click', function(){
    if(indexOfPhier==0){
      indexOfPhier=17;
    } else{
    indexOfPhier--;
    }

    $.get('/data',function(data){
      showInDOM(data.phirephiters[indexOfPhier].name);
    })

  });


    function showInDOM(person){
      $('#people').text(person);
    }
});

// Upon page load, get the data from the server
// $.ajax({
//   type: "GET",
//   url: "/data",
//   success: function(data){
//     // yay! we have data!
//     console.log('returned data from server: ', data);
//     showInDOM(data.phirephiters[indexOfPhier].name)
//   }
// });
