import express from 'express'
import routes from './routes/index'
import mailer from './config/mailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'

// instance express server
const app = express()

// Using hbs configuration on server
mailer.use('compile', hbs({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/email')
  },
  viewPath: path.resolve('./src/email'),
  extName: '.hbs'
}))
// use server routes
app.use(routes)

app.listen(3333)
