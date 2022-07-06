const User = require("../models/User")

module.exports = {
    index: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Hello World",
        })
    },


    signup: async (req, res) => { }

}
