var meetup = require('../lib/meetup')(['getStreamEventComments']),
	count = 1;

var ws = meetup.getStreamEventComments()
	.on('data', function(obj) {
		if (count > 10) {
			ws.abort();
		}
		console.log("%s - %s coments: %s",
			count,
			obj.member.member_name,
			obj.comment
		);
		count++;
	})
	.on('close', function() {
		console.log("done!")
	});