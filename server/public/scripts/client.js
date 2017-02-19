var indexOfPhier = 0;
var phinalIndex = 17;

$(document).ready(function(){
  $.get('/data',function(data){
    phinalIndex = data.phirephiters.length - 1;
    showInDOM(data.phirephiters[indexOfPhier]);
    for (var i = 0; i < data.phirephiters.length; i++) {
      $('#trackingBar').append('<div class="marker"></div>');
    }
    $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'blue', 'border-top': '1px solid red'});
  });

  $('#next').on('click', function(){
    if(indexOfPhier==phinalIndex){
      indexOfPhier=0;
      $('.marker:eq(' + phinalIndex +')').css({'background-color': 'gray', 'border-top': '1px solid blue'});
    } else{
      indexOfPhier++;
    }

    $.get('/data',function(data){
      showInDOM(data.phirephiters[indexOfPhier]);
    })

    $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'blue', 'border-top': '1px solid red'});
    $('.marker:eq(' + indexOfPhier + ')').prev().css({'background-color': 'gray', 'border-top': '1px solid blue'});
  });

  $('#previous').on('click', function(){
    if(indexOfPhier==0){
      indexOfPhier=phinalIndex;
      $('.marker:eq(0)').css({'background-color': 'gray', 'border-top': '1px solid blue'});
    } else{
      indexOfPhier--;
    }

    $.get('/data',function(data){
      showInDOM(data.phirephiters[indexOfPhier]);
      console.log(data);
    })

    $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'blue', 'border-top': '1px solid red'});
    $('.marker:eq(' + indexOfPhier + ')').next().css({'background-color': 'gray', 'border-top': '1px solid blue'});
  });


  function showInDOM(person){
    $('#people').fadeOut(function(){
      $('#people').find('h1').text(person.name);
      $('#people').find('h2').text('https://github.com/' + person.git_username);
      $('#people').find('h3').text('"'+ person.shoutout + '"');
    })
    $('#people').fadeIn();
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
