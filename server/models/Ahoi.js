const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AhoiSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users"
	},
	bookingDate: {
		type: Date,
		required: true
	},
	budget_category: {
		type: String
	},
	creditor: {
		type: String
	},
	bookingKey: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	},
	amount: {
		type: Object
	}
});

module.exports = Ahoi = mongoose.model("transaction_1134", AhoiSchema);
