import { Response, Request } from 'express'
import EmailService from '../services/emailService'

export default {
  async index (req: Request, res: Response) {
    const emailService = new EmailService()
    const variable = 'try send email'
    emailService.sendMail({
      to: {
        email: 'werioliveira@hotmail.com',
        name: 'teste2',
        from: 'wsantos@hotmail.com'
      },
      message: {
        body: 'try send email',
        subject: 'welcome',
        context: {
          variable: variable
        },
        template: 'newemail'

      }
    })
  }
}
