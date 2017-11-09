(function(){
  var baseURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=max&search="
  var userSearch = "android"
  var callApi = baseURL + userSearch;
  
  /*$.get(callApi, function(response){
    console.log(response);
  });*/
  
  $.ajax({}, function(response){
    
  });
})();