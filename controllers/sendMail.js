const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "oma.thompson52@ethereal.email",
      pass: "3MdkDn2mFnBCt7F8VM",
    },
  });

  let info = await transporter.sendMail({
    from: '" ritu kumari 👻" <ritu@gmail.com>', // sender address
    to: "shamyadav@gmail.com", // list of receivers
    subject: " Hardwork!!!!", // Subject line
    text: "do practice !!! you will success", // plain text body
    html: "<b>Hello , you are doing well!!!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports=sendMail;
