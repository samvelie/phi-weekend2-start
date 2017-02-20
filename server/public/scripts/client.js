//setting initial variables based on known data
var indexOfPhier = 0;
var phinalIndex = 17;

$(document).ready(init); //mimicking Scott's single function on DOM ready

function init(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){  //on successful server transfer, all this happens:

      phinalIndex = data.phirephiters.length - 1; //updates index length based on server data
      createTrackBar(data); //creates the visual tracking bar based on the data length
      showInDom(data);  // displays the initial person's data on the DOM and highlights the initial tracking field

      $('#nav').on('click', 'button', function(){
        if($(this).attr('id')=='next'){
          nextPerson();
          showInDom(data);
        } else if($(this).attr('id')=='previous'){
          if(indexOfPhier==0){
            indexOfPhier=phinalIndex;
          } else {
            indexOfPhier--;
          }
          showInDom(data);
        } //end else if
      }); // end click listener
    } // end success function in ajax
  }); // end ajax request
} //end init function


function nextPerson(){            //created this function to try recreating the timed scrolling
  if(indexOfPhier==phinalIndex){
    indexOfPhier=0;
  } else{
    indexOfPhier++;
  }
}

function showInDom(serverData){                       //the dynamic displaying function
  displayPhier(serverData.phirephiters[indexOfPhier]);
  highlightCurrentField();
}

function createTrackBar(serverData){  // creates the visual tracking bar
  for (var i = 0; i < serverData.phirephiters.length; i++) {
    $('#trackingBar').append('<div class="marker"></div>');
  }
}

function highlightCurrentField(){      // this could be done in less code, maybe by setting another css class to cycle between?
  $('.marker').not('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'CornflowerBlue', 'border-top': '1px solid blue'});
  $('.marker:eq(' + indexOfPhier + ')').css({'background-color': 'coral', 'border-top': '1px solid red'});
}

function displayPhier(person){ // displays the data at set points in the html
  $('#people').fadeOut(200, function(){
    $('#people').find('h1').text(person.name);
    $('#people').find('h2').text('https://github.com/' + person.git_username);
    $('#people').find('h3').text('"'+ person.shoutout + '"');
  });
  $('#people').fadeIn(100);
}
