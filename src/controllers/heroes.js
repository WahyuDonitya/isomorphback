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

const getNamaHero = async (req,res) => {
    try {
        const results = await Heroes.find().exec();
        const heroNames = results.map(hero => hero.localized_name);
        return res.status(200).json(heroNames);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

const addHero = async (req,res) => {
    let hero = req.body;

    const data = await Heroes.find().exec();
    const length = data.length;

    hero.id = length+1;
    
    const result = await Heroes.create(hero)

    if(result){
        return res.status(200).json({msg : "Berhasil Insert"})
    }else{
        return res.status(400).json({msg : "Gagal Insert"})
    } 

}

module.exports = {
    getAll_heroes,
    delete_heroes,
    getNamaHero,
    addHero
}