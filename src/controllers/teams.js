const { response } = require("express");
const { Teams } = require("../models");

const addTeams = async (req,res) => {
    const teamData = req.body;
    
    const result = await Teams.create(teamData)

    if(result){
        return res.status(200).json({msg : "Berhasil Insert"})
    }else{
        return res.status(400).json({msg : "Gagal Insert"})
    } 

}

const getNeedApprove = async (req,res) => {

    const result = await Teams.where("status" , 0).exec()

    return res.status(200).json(result)
}

const getTeamsById = async (req,res) => {
    
    const result = await Teams.findById(req.params.id)

    return res.status(200).json(result)
}

const approved = async (req,res) => {
    const id = req.params.id

    const updateTeams = await Teams.findByIdAndUpdate(id , {status : 1}, {new: true})

    return res.status(201).json({msg : "Berhasil Update"})
    
}

const reject = async (req,res) => {
    const id = req.params.id

    const updateTeams = await Teams.findByIdAndUpdate(id , {status : 2}, {new: true})

    return res.status(201).json({msg : "Berhasil Update"})
    
}

const getCountallApproval = async(req,res) => {
    const countApproval = await Teams.countDocuments()
    const needApproval = await Teams.where("status",0).countDocuments()
    const allApproved = await Teams.where("status",1).countDocuments()
    const allRejected = await Teams.where("status",2).countDocuments()

    return res.status(200).json({data:{countApproval:countApproval,needApproval:needApproval,allApproved:allApproved,allRejected:allRejected}})
}

module.exports = {
    addTeams,
    getNeedApprove,
    approved,
    getTeamsById,
    getCountallApproval,
    reject
}