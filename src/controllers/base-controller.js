const User = require("../models/User")

module.exports = {
    index: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Hello World",
        })
    },


    signup: async (req, res) => {

        const { email, gender, username, password, phone } = req.body;

        const newUser = new User({ email, gender, username, password, phone });

        try {
            await newUser.save();

            return res.status(201).json({
                success: true,
                message: "signup successful",
                data: newUser
            });

        } catch (error) {
            return res.status(412).send({
                success: false,
                message: error.message
            })
        }
    }

}
