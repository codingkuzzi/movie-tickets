//business logic
function Ticket(movie, time, age, cost) {
  this.movieName = movie;
  this.time = time;
  this.age = age;
  this.cost = cost;
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

    Ticket.prototype.Cost = function() {
      if(selectedMovieName === 'Wonder Woman' || selectedMovieName === 'Cars 3') {
        this.cost +=10;
      } else {
        this.cost +=6;
      }
      if(selectedTime === '9:00 AM - 12:00 PM') {
        this.cost +=1;
      } else if(selectedTime === '12:00 PM - 15:00 PM') {
          this.cost +=3;
        } else {
          this.cost +=5;
      }
      if(selectedAge === '60 +') {
        this.cost -= 5;
      } else {
        this.cost += 0;
      }
      return this.cost
    }
    $("#result").append("<h3>" + "You've chosen " + newTicket.movieName + ", " + newTicket.time + ", " + " age " + newTicket.age + "." + "</h3>" + "<h3>" + "The cost of one ticket" + " is $ " + newTicket.Cost() + "." + "</h3>");
  });
});
