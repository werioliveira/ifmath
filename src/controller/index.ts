import { Response, Request } from 'express'
import EmailService from '../services/emailService'

export default {
  async index (req: Request, res: Response) {
    const emailService = new EmailService()
    emailService.sendMail({
      to: {
        email: 'teste',
        name: 'teste2'
      },
      message: {
        body: 'try send email',
        subject: 'welcome'
      }
    })
  }
}
