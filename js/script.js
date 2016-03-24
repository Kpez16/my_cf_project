//Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Facebook
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//Current Projects
var myProjects = [ { title: "First Project", pic: "http://www.fillmurray.com/g/200/300"}, { title: "Second Project", pic: "http://www.fillmurray.com/g/200/300"}, { title: "Third Project", pic: "http://www.fillmurray.com/g/200/300" }, {title: "Fourth Project", pic: "http://www.fillmurray.com/g/200/300"}];

//Google Map API v3
/*var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
};*/

//Google Map APIv3 Styled
function initialize() {

  // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    scrollwheel: false,
    zoom: 13,
    center: new google.maps.LatLng(28.385233, -81.5660627),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
    //Marker
    var myLatLng = { lat:28.385233, lng: -81.5660627}

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'I am going to Disney World!'
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
};



//DOM Ready
$(document).ready(function() {
    //Smooth Scrolling
    var $root = $('html, body');
        $('.navbar-nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });
    
    //Stellar Parallax
    $.stellar();
    
    //Tooltips
    $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    $(function () {
            $('#item1').tooltip();
        });
    
    //Button
    $('#button').on("click", function() {
        //Code
        //Variable for comment value
         var comment = $('#message-box').val().toUpperCase();
        //Conditional to make message box red if left blank
        if(comment === "") {
           $('#message-box').css("border", "2px solid red");
        }
        else {
        console.log(comment);
        $('#visible-comment').append(comment);
        $('#appreciation').append("Thank you for submitting!");
        $('#name, #phone, #email, #message-box, .submit').hide();
        //End code
        return false;
            };
    });
    
    //Character Count
    $('#message-box').on("keyup", function() {
        console.log("keyup happened!"); //Checking to see if keyup is working
        var charCount = $('#message-box').val().length;
        console.log(charCount); //checking value
        $('#char-count').html(charCount);
        if(charCount > 50) {
            $('#char-count').css("color", "red");
        }
        else {
            $('#char-count').css("color", "black");
        };
    });
    
    //Feature Table
    var rows = $('.my-row');
    console.log(rows);
    //A Loop comin Up
    for(i=0; i < rows.length; ++i) {
        if(i%2 === 0) {
            $(rows[i]).css("background-color", "coral");
        };
    };
    
    //Current Projects Background IMGs
    for(var i=0; i < myProjects.length; ++i) {
        $('#' + i).css("background-image", "url(" + myProjects[i].pic + ")");
    };
    
    //Current Project info on hover
    $('.image').mouseenter( function() {
        //Checking code
        console.log(myProjects[this.id].title);
        $(this).html("<p class='project-sum'><span class='project-title'>Title:</span>" + myProjects[this.id].title + "</p>");
    }).mouseleave( function() {
        $("p.project-sum").html("");
    });
});