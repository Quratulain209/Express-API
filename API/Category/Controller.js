require('dotenv').config()
const Category = require('./Schema')
const { connect } = require('mongoose')

const CreateCategory = async (req, res) => {
    const { CategoryName, CategoryImage } = req.body

    if (!CategoryName || !CategoryImage) {
        res.status(403).json({
            message: "Missing Required Field"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI )
           
            
            res.json({
                message: "DB CONNECTED"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Database Connection Failed"
            });
        }
    }

}

const getCategoryByName = (req, res) => {
    try {

    } catch (error) {

    }
}

const getCategoryById = (req, res) => {
    try {

    } catch (error) {

    }
}

const UpdateCategory = (req, res) => {
    try {

    } catch (error) {

    }
}

const DeleteCategory = (req, res) => {
    try {

    } catch (error) {

    }
}

module.exports = { CreateCategory, getCategoryById, getCategoryByName, UpdateCategory, DeleteCategory }