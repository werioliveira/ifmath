interface IMailTo{
  name: string,
  email: string
}
interface IMailMessage{
  subject: string,
  body: string,
  attachment?: string[]
}
interface DTOMessage{
  to: IMailTo,
  message: IMailMessage
}
class EmailService {
  sendMail ({ to, message }: DTOMessage) {
    console.log('email enviado')
  }
}

export default EmailService
