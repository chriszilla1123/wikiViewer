(function(){
  var numSearch = 10
  var baseURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit="
      + numSearch + "&search="
  var userSearch;
  
  window.onkeyup = function(e){
    var key = e.keyCode;
   
    if (key == 13 && document.getElementById("input").value.length != 0){
      clearResults();
      userSearch = encodeURI(document.getElementById("input").value);
      var callApi = baseURL + userSearch;
      search(callApi);
    }
 }  
 
  function search(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4){
        var json = JSON.parse(this.response);
        var numEntries = json[1].length;
        for(i=0; i < numEntries; i++){
          document.getElementById('result' + i).setAttribute('href', json[3][i]);
          document.getElementById('result' + i).setAttribute('target', '_blank');
          document.getElementById('result' + i).innerHTML = (
              '<div class="result">'
              + '<h3>' + json[1][i] + '</h3>'
              + '<p>' + json[2][i] + '</p>'
              + '</div>'
              );
          document.getElementById('input').value = "";
          document.getElementById('input').focus();
        }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
  function clearResults(){
    for(i=0; i < numSearch; i++) {
      document.getElementById('result' + i).removeAttribute('href');
      document.getElementById('result' + i).removeAttribute('target');
      document.getElementById('result' + i).removeAttribute('default');
      document.getElementById('result' + i).innerHTML = "";
    }
  }
})();