$.ajax({
  url: "https://tonyspizzafactory.herokuapp.com/api/pizzas",
  headers: {"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4"},
  success: goodResponse,
  error: badResponse
});

function badResponse(){
  console.log("Can't load the Images!");
}

function goodResponse(data){
  var img = $(".ajaxImg");
  var type =  $(".type");
  var ingred =  $(".ingredients");
  var price = $(".price");
  for(var i=0; i < img.length; i++){
    img[i].onload = function(){
      var ratio = this.width / this.height;
      if (ratio > 1) {
        this.width = 260 * ratio;
        this.height = 260;
        var offset = -1 * (this.width - 260) / 2;
        this.style.margin = "-5px 0px 0px " + offset + "px";
      } else {
        this.width = 260;
        this.height = 260 * (1 / ratio);
        var offset = -1 * (this.height - 260) / 2;
        this.style.margin = offset + "px 0px 0px -5px";
      }
    }
    img[i].src = data[i].imageUrl;
    type[i].innerHTML = data[i].name;
    ingred[i].innerHTML = "";
    for (var j=0; j < data[i].ingredients.length; j++){
      ingred[i].innerHTML += data[i].ingredients[j] + ", ";
    }
    ingred[i].innerHTML = ingred[i].innerHTML.substring(0, ingred[i].innerHTML.length-2);
    price[i].innerHTML = data[i].prize;
  }
}