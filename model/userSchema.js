const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Proposed_Role:{
        type:String,
        
    },
    Name_of_Resource:{
        type:String,
        
    },
    Location:{
        type:String,
        
    },
    Date_of_Joining:{
        type:String,
        
    },
    Employee_code:{
        type:String,
        
    },
    Email_iD_personal:{
        type:String,
        
    },
    Email_iD_Official:{
        type:String,
        
    },
    Contact_number:{
        type:String,
        
    },
    Emergency_contact_number:{
        type:String,
        
    },
    Business_Unit:{
        type:String,
        
    },
    Department:{
        type:String,
       
    },
    Reporting_Manager:{
        type:String,
        
    }

})

const User = mongoose.model('USER', userSchema);

module.exports = User;