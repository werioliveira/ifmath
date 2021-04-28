import transport from '../config/mailer'
interface IMailTo{
  name: string,
  email: string,
  from: string
}
interface IMailMessage{
  subject: string,
  body: string,
  html?: string,
  template?: string,
  context?: Object,
  attachment?: string[]
}
interface DTOMessage{
  to: IMailTo,
  message: IMailMessage
}
class EmailService {
  sendMail ({ to, message }: DTOMessage) {
    const mail = {
      to: to.email,
      from: to.from,
      subject: message.subject,
      text: message.body,
      html: message.html,
      template: message.template,
      context: message.context
    }
    transport.sendMail(mail)
  }
}
export default EmailService
