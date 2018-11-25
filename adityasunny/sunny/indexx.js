
var rootRef = firebase.database().ref().child("data");

rootRef.on("child_added" , snap => {

	var model = snap.child("Model").val();
	var mpg = snap.child("MPG").val();
	var cylinders = snap.child("Cylinders").val();
	var displacement = snap.child("Displacement").val();
	var horsepower = snap.child("Horsepower").val();
	var weight = snap.child("Weight").val();
	var acceleration = snap.child("Acceleration").val();
	var year = snap.child("Year").val();
	var origin = snap.child("Origin").val();



	$("#table_body").append("<tr><td>" + model + "</td><td>" + mpg + "</td><td>" + cylinders + "</td><td>" + displacement + "</td><td>" + horsepower + "</td><td>" + weight + "</td><td>" + acceleration + "</td><td>" + year + "</td><td>" + origin + "</td></tr>");
	


});
