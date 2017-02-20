var indexOfPhier = 0;
var phinalIndex = 17;

$(document).ready(init);

function init(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){

      phinalIndex = data.phirephiters.length - 1;
      createTrackBar(data);
      showInDom(data);

    $('#nav').on('click', 'button', function(){
        if($(this).attr('id')=='next'){
          if(indexOfPhier==phinalIndex){
            indexOfPhier=0;
          } else {
            indexOfPhier++;
            }
          showInDom(data);
        } else if($(this).attr('id')=='previous'){
            console.log('previous clicked');
            if(indexOfPhier==0){
              indexOfPhier=phinalIndex;
            } else {
              indexOfPhier--;
              }
          showInDom(data);
          };
      });

    }
  });
}

function showInDom(serverData){
  displayPhier(serverData.phirephiters[indexOfPhier]);
  highlightCurrentField();
}

function createTrackBar(serverData){
  for (var i = 0; i < serverData.phirephiters.length; i++) {
    $('#trackingBar').append('<div class="marker"></div>');
  }
}

function highlightCurrentField(){
  $('.marker').not('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'gray', 'border-top': '1px solid blue'});
  $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'blue', 'border-top': '1px solid red'});
}

function displayPhier(person){
  $('#people').fadeOut(200, function(){
    $('#people').find('h1').text(person.name);
    $('#people').find('h2').text('https://github.com/' + person.git_username);
    $('#people').find('h3').text('"'+ person.shoutout + '"');
  });
  $('#people').fadeIn(200);
}

// $(document).ready(function(){
//   $.get('/data',function(data){
//     phinalIndex = data.phirephiters.length - 1;
//     showInDOM(data.phirephiters[indexOfPhier]);
//     for (var i = 0; i < data.phirephiters.length; i++) {
//       $('#trackingBar').append('<div class="marker"></div>');
//     }
//     $('.marker:eq(' + indexOfPhier + ')').prev().css({'background-color': 'gray', 'border-top': '1px solid blue'});
//     $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'blue', 'border-top': '1px solid red'});
//     $('.marker:eq(' + indexOfPhier + ')').next().css({'background-color': 'gray', 'border-top': '1px solid blue'});
//   });
//
//   // intervalScroll();
//
//   $('#next').on('click', nextPerson);
//
//   $('#previous').on('click', function(){
//     if(indexOfPhier==0){
//       indexOfPhier=phinalIndex;
//       $('.marker:eq(0)').css({'background-color': 'gray', 'border-top': '1px solid blue'});
//     } else{
//       indexOfPhier--;
//     }
//
//     $.get('/data',function(data){
//       showInDOM(data.phirephiters[indexOfPhier]);
//       console.log(data);
//     })
//
//     $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'blue', 'border-top': '1px solid red'});
//     $('.marker:eq(' + indexOfPhier + ')').next().css({'background-color': 'gray', 'border-top': '1px solid blue'});
//   });
//
//
//   function intervalScroll(){
//     setInterval(nextPerson, scrollInterval);
//   }
//
//   function nextPerson(){
//       if(indexOfPhier==phinalIndex){
//         indexOfPhier=0;
//         $('.marker:eq(' + phinalIndex +')').css({'background-color': 'gray', 'border-top': '1px solid blue'});
//       } else{
//         indexOfPhier++;
//       }
//
//       $.get('/data',function(data){
//         showInDOM(data.phirephiters[indexOfPhier]);
//       })
//
//       $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'blue', 'border-top': '1px solid red'});
//       $('.marker:eq(' + indexOfPhier + ')').prev().css({'background-color': 'gray', 'border-top': '1px solid blue'});
//   }
//
//   function showInDOM(person){
//     $('#people').fadeOut(function(){
//       $('#people').find('h1').text(person.name);
//       $('#people').find('h2').text('https://github.com/' + person.git_username);
//       $('#people').find('h3').text('"'+ person.shoutout + '"');
//     })
//     $('#people').fadeIn();
//   }
//
// });
