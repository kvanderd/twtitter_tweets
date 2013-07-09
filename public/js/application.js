$(document).ready(function() {
	$("form").on("click", function(e) {
		e.preventDefault

		var tweetsUser = $.ajax({
			url: "/",
			type: "post",
			data: $(this).serialize
		});

		function alertFail(tweet) {
			console.log("fail")
		}

		function alertSuccess(tweet) {
			console.log("yay")
		}

		tweetsUser.done(alertSuccess);
		tweetsUser.fail(alertFail);
	})

  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  });


