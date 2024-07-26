const e = require("cors");

const sendEmailController = (req, res) => {
    try{
        return res.status(200).json({
            success: true, 
            message: 'Your message is Sent Succesfuly!'
        })
    }catch(error){
        console.log("Error", error);
        return res.status(500).send({
            success: false, 
            message: 'Send Email API Error', 
            error
        })
    }
}

module.exports = {sendEmailController};