//business logic
function Ticket(movie, time, age, cost) {
  this.movieName = movie;
  this.time = time;
  this.age = age;
  this.cost = cost;
}

Ticket.prototype.Cost = function(movieName, time, age) {
  if(movieName === 'Wonder Woman' || movieName === 'Cars 3') {
    this.cost +=10;
  } else {
    this.cost +=6;
  }
  if(time === '9:00 AM - 12:00 PM') {
    this.cost +=1;
  } else if(time === '12:00 PM - 15:00 PM') {
      this.cost +=3;
    } else {
      this.cost +=5;
  }
  if(age === '60 +') {
    this.cost -= 5;
  } else {
    this.cost += 0;
  }
  return this.cost
}

// user interface logic
$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    var selectedMovieName = $("select#movie").val();
    var selectedTime = $("select#time").val();
    var selectedAge = $("select#age").val();

    var newTicket = new Ticket(selectedMovieName, selectedTime, selectedAge, 0)
    var newCost = newTicket.Cost(selectedMovieName, selectedTime, selectedAge)

    $("#result").append("<h3>" + "You've chosen " + newTicket.movieName + ", " + newTicket.time + ", " + " age " + newTicket.age + "." + "</h3>" + "<h3>" + "The cost of one ticket" + " is $ " + newCost + "." + "</h3>");
  });
});
