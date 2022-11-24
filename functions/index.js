const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })

admin.initializeApp()

let { useremail, password } = functions.config().gmail

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: useremail,
    pass: password,
  },
})

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const mailOptions = {
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
    }

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send(error.toString())
      }
    })
  })
})
