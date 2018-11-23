const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Ahoi = require("../models/Ahoi");
const Budget = require("../models/Budget");

// @route   GET api/all
// @desc    Get transactions
// @access  Public
(function transactionsSimple() {
	return router.get("/transactionsSimple/all", (req, res) => {
		Ahoi.find(
			{},
			"bookingDate creditor bookingKey budget_category amount.value"
		)
			.sort({ bookingDate: -1 })
			.then(transactions => res.json(transactions))
			.catch(err => res.status(404).json(err));
	});
})();

// @route   GET api/all
// @desc    Create Budget collection - EREASE previous
// @access  Public
(function createBudgets() {
	return router.post("/createbudgets/all", async (req, res) => {
		await Budget.deleteMany({});
		Budget.insertMany(req.body.budget)
			.then(transactions => res.json(transactions))
			.catch(err => res.status(404).json(err));
	});
})();

// @route   GET api/all
// @desc    Get Budget of each subaccount
// @access  Public
(function createBudgets() {
	return router.get("/getbudgets/all", async (req, res) => {
		Budget.find({})
			.then(budgets => res.json(budgets))
			.catch(err => res.status(404).json(err));
	});
})();
module.exports = router;
