$( document ).ready(function() {
 
    alert("hi")
    $("#content").append("<ul> <li id = 'home'><input type = 'button'>Home</li> <li id = 'contact'><input id = 'contact' type = 'button'>Contact</li> <li><input type = 'button'>Menu</li> </ul>")
    $("#content").append("<input type = 'button' onclick = ''>")
    $("#content").append("<h3> Random Ingredients </h3>")
    $("#content").append("<img src = 'src/HotDogCereal.jpg'>")
    $("#content").append("<p> Welcome to Random Ingredients where your meal is just whatever happens to be in the kitchen that day bundled together and maybe microwaved. </p>")
    $("#content").append("<h2> Menu </h2>")
    $("#content").append("<p> $5 Special </p>")
    $("#content").append("<p> Three random ingredients from the kitchen in a bowl. Can be warm or cold based on customer preference </p>")
    $("#content").append("<h2> Customer Reviews </h2>")
    $("#content").append("<p> I got the $5 Special. The ingredients were a poptart, covered with jelly and a slice of pepperjack cheese. I couldn't even stomach it. Would not buy again!")
 
});



$("#contact").click(function() {
  $("#content").append("<p> Contact INFORMATION </p>")
});