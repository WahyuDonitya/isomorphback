const { mongoose, Schema } = require("mongoose");

const TeamsSchema = new Schema({
    // name: { type: String, required: true },
    // value: { type: String, required: true },
    // teamleader : {type: String, required: true},
    // status : {type: Number, required: true},
    // teamName : {type: String, required: true}
    teamName: {
        type: String,
        required: true
      },
      teamMembers: [
        {
          name: String,
          value: String,
          teamleader: String,
          status: Number
        }
      ],
    status : 0
    
});

const Teams = mongoose.model("teams", TeamsSchema, "teams");

module.exports = Teams;
