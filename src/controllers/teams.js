const { Teams } = require("../models");

const addTeams = async (req,res) => {
    const teamData = req.body;
    
    const result = Teams.create(teamData)

    if(result){
        return res.status(200).json({msg : "Berhasil Insert"})
    }else{
        return res.status(400).json({msg : "Gagal Insert"})
    } 

}

module.exports = {
    addTeams
}