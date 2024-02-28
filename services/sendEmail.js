const nodemailer = require('nodemailer')

const sendEmail = async (data)=>{
   const transporter =  nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'rejinlimbu24@gmail.com',
            pass : 'ehxpjahcepakrhih'
        }
    })
    const mailOptions = {
        from : "EMAILSENDER<rejinlimbu24@gmail.com>",
        to : data.gmail,
        subject : data.subject,
        text : data.message,
        attachments : data.files
    }
    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail