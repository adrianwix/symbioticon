const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BudgetSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	budget: {
		type: Number
	},
	expended: {
		type: Number
	},
	color: {
		type: String
	}
});

/** n */
module.exports = Ahoi = mongoose.model("budget", BudgetSchema);
