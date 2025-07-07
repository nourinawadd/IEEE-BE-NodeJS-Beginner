module.exports = function validateInput(req, res, next) {
  const { name, age, university, email, phone } = req.body;
  const errors = [];

  if (!name || !age || !university || !email || !phone) {
    errors.push("All required fields must be filled.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Invalid email format.");
  }

  if (!/^\d{11}$/.test(phone)) {
    errors.push("Phone number must be 11 digits.");
  }

  if (errors.length > 0) {
    const view = req.originalUrl.includes("edit") ? "edit" : "add";
    const context = view === "edit"
      ? { errors, member: { ...req.body, _id: req.params.id } }
      : { errors, data: req.body };

    return res.render(view, context);
  }

  next();
};
