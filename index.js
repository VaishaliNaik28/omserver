const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/messages",(req,res) => {
		let m = ["If you want to achieve greatness stop asking for permission.",
				"Things work out best for those who make the best of how things work out.",
				"To live a creative life, we must lose our fear of being wrong.",
				"If you are not willing to risk the usual you will have to settle for the ordinary.",
				"Trust because you are willing to accept the risk, not because it's safe or certain.",
				"All our dreams can come true if we have the courage to pursue them.",
				"The meaning of life is to find your gift. The purpose of life is to give it away.",
				"Opportunities don't happen, you create them",
				"Successful entrepreneurs are givers and not takers of positive energy.",
				"Success is walking from failure to failure with no loss of enthusiasm.",
				"If you do what you always did, you will get what you always got."];
		let r = parseInt(Math.random() * m.length);
		res.send({"msg":m[r]});
		res.end();
		});
app.listen(9002,() => {console.log("ready @ 9002");});