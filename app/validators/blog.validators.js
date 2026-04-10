const Joi = require("joi")

const blogSchema = Joi.object({
    title: Joi.string().required().min(5),
    content: Joi.string().required()
})

module.exports = blogSchema