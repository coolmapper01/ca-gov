{
    "moduleId" : "coolmapper01/ca-gov",
    "title" : "CA.GOV",
    "subtitle" : "quickmap.dot.ca.gov",
    
    "backButton" : true,
    "enableGPS" : true,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http",
    "shouldOverrideUrlLoading2" : "https",

    "loadDataWithBaseUrl1" : "http://quickmap.dot.ca.gov/maps/traffic",    
    "loadDataWithBaseUrl3" : "text/html",
    "loadDataWithBaseUrl4" : "utf-8",
    "loadDataWithBaseUrl5" : null,
    
    "loadDataWithBaseUrl2" : "
<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script>
    
$.getScript('http://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js', function(){
  var str = $.cookie('lyrs');
                            
  if (str == null) {    
    strOut = 'traffic;cctv;chp;;lcs;cms;cc';
    // $.cookie('ll', '40.58%2C-122.39');
    $.cookie('lyrs', strOut);
    // $.cookie('z', '12');
    window.location.href='http://quickmap.dot.ca.gov/maps/traffic/mwebview.html?z=#zoom#&ll=#lat#,#lng#';
            
  } else {        
    window.location.href='http://quickmap.dot.ca.gov/maps/traffic/mwebview.html?z=#zoom#&ll=#lat#,#lng#';
  } 
   
});



</script>
",

    "onPageFinishedLoadUrl" : "",
    			
    "browserLaunchLink" : "http://quickmap.dot.ca.gov/maps/traffic/mwebview.html?z=#zoom#&ll=#lat#,#lng#"
}
