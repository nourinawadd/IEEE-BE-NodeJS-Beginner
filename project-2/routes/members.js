const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// display all members
router.get('/', async (req, res) => {
    const members = await Member.find();
    res.render('index', { members });
});

// render form to add a new member
router.get('/add', (req, res) => {
    res.render('add');
});

// handle form submission to add a new member
router.post('/add', async (req, res) => {
    const { name, age, university, email, phone, technicalCommittee, nonTechnicalCommittee, imageUrl } = req.body;
    await Member.create({ name, age, university, email, phone, technicalCommittee, nonTechnicalCommittee, imageUrl });
    res.redirect('/');
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
    res.render('edit', { member });
});

// handle form submission to update a member
router.post('/member/edit/:id', async (req, res) => {
    const { name, age, university, email, phone, technicalCommittee, nonTechnicalCommittee, imageUrl } = req.body;
    await Member.findByIdAndUpdate(req.params.id, { name, age, university, email, phone, technicalCommittee, nonTechnicalCommittee, imageUrl });
    res.redirect(`/member/${req.params.id}`);
});

// delete a member
router.post('/member/delete/:id', async (req, res) => {
    await Member.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;