$(function() {
  var ref = new Firebase("https://ndt3blogcomments.firebaseio.com/"),
    postRef = ref.child(slugify(window.location.pathname));

    postRef.on("child_added", function(snapshot) {
      var newPost = snapshot.val();
      $(".comments").prepend('<div class="comment">' +
        '<span class="success">' + escapeHtml(newPost.name) + '</span> posted <span class="date">' + moment(newPost.postedAt).toString() + '</span>' +
        '<table style="margin: 0px auto;"><td><span class="profile-image"><img src="http://www.gravatar.com/avatar/' + escapeHtml(newPost.md5Email) + '?s=100&d=retro"/></span></td> ' +
        '<td><span>' + escapeHtml(newPost.message)  + '</span></td></table></div>');
    });

    $("#submitbtn").click(function() {
	if ($("#message").val() && $("#email").val() && $("#name").val()) {
		console.log("OK");

      var a = postRef.push();
	console.log(a);
      
      a.set({
        name: $("#name").val(),
        message: $("#message").val(),
        md5Email: md5($("#email").val()),
        postedAt: Firebase.ServerValue.TIMESTAMP
      });

      $("input[type=text], textarea").val("");
      return false;
} else {
document.getElementById("jsresponse").innerHTML = "All fields are required";
//document.location = "#jsresponse";

}
    });
});

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}


function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
