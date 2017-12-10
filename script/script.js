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
   /*var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if(this.readyState == 4){
       console.log(this.responseText);
     }
   };
   xhttp.addEventListener("load", resListener)
   xhttp.open("GET", url, true);
   xhttp.send();*/
   
   $.getJSON("url", function(response){
     console.log(response);
   });
 }
 
})();