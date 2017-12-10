(function(){
  var baseURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=max&search="
  var userSearch = "android"
  var callApi = baseURL + userSearch;
  
 window.onkeyup = function(e){
   var key = e.keyCode;
   
   if (key == 13){
     search(callApi);
   }
 }  
 
 function search(url){
   console.log(url);
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if(this.readyState == 4){
       console.log(this.responseText);
     }
   };
   xhttp.open("GET", url, true);
   xhttp.setRequestHeader('Api-User-Agent', 'WikiViewer_by_Chris/1.0');
   xhttp.setRequestHeader('Origin', 'http://www.chilltec.net');
   xhttp.send();
 }
 
})();