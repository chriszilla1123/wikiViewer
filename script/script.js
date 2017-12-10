(function(){
  var numSearch = 10
  var baseURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit="
      + numSearch + "&search="
  var userSearch = "google"
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
       var json = JSON.parse(this.response);
       for(i=0; i < numSearch; i++){
          document.getElementById("result" + i).innerHTML = ("<h3>" + json[1][i] + "</h3>"
              + "<p>" + json[2][i] + "</p>"
              + "<a href='" + json[3][i] + "'>Link</a>");
       }
     }
   };
   xhttp.open("GET", url, true);
   xhttp.send();
 }
 
})();