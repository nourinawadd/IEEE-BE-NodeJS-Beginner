const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const validateInput = require("../middlewares/validateInput");

// display all members
router.get('/', async (req, res) => {
    const members = await Member.find();
    res.render('index', { members });
});

// render form to add a new member
router.get('/add', (req, res) => {
    res.render("add", { errors: [], data: {} });
});

// handle form submission to add a new member
router.post('/add', validateInput, async (req, res) => {
    try {
    const member = new Member(req.body);
    await member.save();
    res.redirect("/");
  } catch (err) {
    if (err.code === 11000) {
      return res.render("add", {
        errors: ["Email already exists."],
        data: req.body,
      });
    }

    const validationErrors = Object.values(err.errors || {}).map(e => e.message);
    res.render("add", {
      errors: validationErrors.length ? validationErrors : ["Unknown error."],
      data: req.body,
    });
  }
});

// display a single member's details
router.get('/member/:id', async (req, res) => {
    const member = await Member.findById(req.params.id);
    if (!member) {
        return res.status(404).send('Member not found');
    }
    res.render('member', { member });
});

// render form to edit a member
router.get('/member/edit/:id', async (req, res) => {
    const member = await Member.findById(req.params.id);
    if (!member) {
        return res.status(404).send('Member not found');
    }
    res.render("edit", { errors: [], member });
});

// handle form submission to update a member
router.post('/member/edit/:id', validateInput, async (req, res) => {
    try {
    await Member.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    res.redirect(`/member/${req.params.id}`);
  } catch (err) {
    const member = { ...req.body, _id: req.params.id };

    if (err.code === 11000) {
      return res.render("edit", {
        errors: ["Email already exists."],
        member,
      });
    }

    const validationErrors = Object.values(err.errors || {}).map(e => e.message);
    res.render("edit", {
      errors: validationErrors.length ? validationErrors : ["Unknown error."],
      member,
    });
  }
});

// delete a member
router.post('/member/delete/:id', async (req, res) => {
    await Member.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;