const validateUsers = (req, res, next) => {
    const { firstname, lastname, email, city, language} = req.body;
    const errors = [];
    const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

    if(firstname == null) {
        errors.push({ field: "firstname", message: "this field is required"})
    } else if (firstname.length >= 255) {
        errors.push({ field: "firstname", message: "this field should contain less than 255 characters"})
    } 
    if(lastname == null) {
        errors.push({ field: "lastname", message: "this field is required"})
    } else if (lastname.length >= 255) {
        errors.push({ field: "lastname", message: "this field should contain less than 255 characters"})
    }
    if (!emailRegex.test(email)) {
        errors.push({ field: 'email', message: 'Invalid email' });
    }
    if(city == null) {
        errors.push({ field: "city", message: "this field is required"})
    } else if (city.length >= 255) {
        errors.push({ field: "city", message: "this field should contain less than 255 characters"})
    }
    if(language == null) {
        errors.push({ field: "language", message: "this field is required"})
    } else if (language.length >= 255) {
        errors.push({ field: "language", message: "this field should contain less than 255 characters"})
    }
    if (errors.length) {
        res.status(422).json({ validationErrors: errors });
      } else {
        next();
      }
} 

module.exports = {
    validateUsers,
};