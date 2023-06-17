const { Heroes } = require("../models");

const getAll_heroes = async (req,res) => {
    const result = await Heroes.find().exec()
    return res.status(200).json(result)
}

const delete_heroes = async (req,res) => {

    const id = req.params.id
    
    const result = await Heroes.deleteOne({ _id: id });

    if (result) {
        return res.status(200).json({ msg: "Berhasil Delete", result: result });
    } else {
        return res.status(500).json({ msg: "Gagal Delete" });
    }
}

module.exports = {
    getAll_heroes,
    delete_heroes
}