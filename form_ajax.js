function sendFeedback() {
  //Create JSON from Input
  var data = {
    "id": 0,
    "pizzaRating": "",
    "prizeRating": "",
    "name": document.getElementsByName("User")[0].value,
    "email": document.getElementsByName("Mail")[0].value,
    "feedback": document.getElementsByName("Text")[0].value
  };
  for (var i=1; i<3; i++) {
    var x = document.getElementsByName(Object.keys(data)[i]);
    var j = 0;
    while (j<x.length) {
      if (x[j].checked == true) {
        data[Object.keys(data)[i]] = x[j].value;
        j = x.length;
      } else {
        j++; 
      }
    }
  }
  //Post JSON to Server
  var xhr = new XMLHttpRequest();
  var url = "https://tonyspizzafactory.herokuapp.com/api/feedback";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
  xhr.send(JSON.stringify(data));
  getStatistic(url);
}

function getStatistic(url) {
  //Get JSON from Server
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange= function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      createStatistic(json);
    }
  };
  xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
  xhr.send(null);
}

function createStatistic(json) {
  //Create Statistic for Pizza-Rating
  var pizza = {
    "awesome": 0,
    "good": 0,
    "okay": 0,
    "poor": 0
  };
  for (var i=0; i<json.length; i++) {
    if (json[i].id == 0) {
      for (var j=0; j<Object.keys(pizza).length; j++) {
        if (json[i].pizzaRating == Object.keys(pizza)[j]) {
          pizza[Object.keys(pizza)[j]]++;
          break;
        }
      }
    }
  }
  //Create Statistic for Prize-Rating
  var prize = {
    "fair": 0,
    "okay": 0,
    "expensive": 0
  };
  for (var i=0; i<json.length; i++) {
    if (json[i].id == 0) {
      for (var j=0; j<Object.keys(prize).length; j++) {
        if (json[i].prizeRating == Object.keys(prize)[j]) {
          prize[Object.keys(prize)[j]]++;
          break;
        }
      }
    }
  }
  //Fill Result in Statistic-Table
  var x = document.getElementById("result");
  for (var i=0; i<x.rows.length; i++) {
    if(x.rows[i].getElementsByClassName("pizza").length > 0) {
      var y = x.rows[i].getElementsByClassName("pizza");
      for (var j=0; j<Object.keys(pizza).length; j++) {
        if (Object.keys(pizza)[j] == y[0].innerHTML) {
          x.rows[i].lastElementChild.innerHTML = pizza[y[0].innerHTML];
        }
      }
    } else if (x.rows[i].getElementsByClassName("prize").length > 0) {
      var y = x.rows[i].getElementsByClassName("prize");
      for (var j=0; j<Object.keys(prize).length; j++) {
        if (Object.keys(prize)[j] == y[0].innerHTML) {
          x.rows[i].lastElementChild.innerHTML = prize[y[0].innerHTML];
        }
      }
    }
  }
  $("#result").show();
  $("form").hide();
  alert("Thank's for your feedback!");
}