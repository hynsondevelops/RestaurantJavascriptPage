
function loadContact() {
	loadBanner()
 	$("#content").append("<p> Contact Information </p>")
};

function loadBanner() {
	$("#content").empty()
	$("#content").append("<table> <tr> <td id = 'home'><button type = 'button'>home</td> <td id = 'contact'><button id = 'contact' type = 'button'>Contact</td> <td><button id = 'menu' type = 'button'>Menu</td> </ul> </table>")
	$("#content").append("<h3> Random Ingredients </h3>")
	$("#home").click(loadHome)
	$("#contact").click(loadContact)
	$("#menu").click(loadMenu)
}

function loadMenu() {
	loadBanner()
	$("#content").append("<h2> Menu </h2>")
    $("#content").append("<p> $5 Special </p>")
    $("#content").append("<p> Three random ingredients from the kitchen in a bowl. Can be warm or cold based on customer preference </p>")
}

function loadHome() {
	loadBanner()
	$("#content").append("<img src = 'src/HotDogCereal.jpg'>")
    $("#content").append("<p> Welcome to Random Ingredients where your meal is just whatever happens to be in the kitchen that day bundled together and maybe microwaved. </p>")
    $("#content").append("<h2> Customer Reviews </h2>")
    $("#content").append("<p> I got the $5 Special. The ingredients were a poptart, covered with jelly and a slice of pepperjack cheese. I couldn't even stomach it. Would not buy again!")
}

$( document ).ready(function() {
	loadHome()
});

