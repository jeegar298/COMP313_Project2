function showRestaurants() {
  
  var latestitems = document.getElementById("latest");  
  var dbRef = firebase.database().ref().child("Restaurants").child('1').child('Items');
  window.alert('lol');
  dbRef.on('value', function(datasnapshot) {
    datasnapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    window.alert(childData.Name);
    });
  });
}

function getCartCountAndDisplay() {
  var userid = 1;
  var cartcount = document.getElementById("cartcount");
  var cartRef = firebase.database().ref("Users/"+userid).child("Cart");
  cartRef.on("value", function (snapShot) {
    cartcount.innerHTML = snapShot.numChildren();
  });
   
}