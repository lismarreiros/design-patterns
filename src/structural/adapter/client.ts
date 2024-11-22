import { EmailValidatorAdapter } from "./validation/email-validator-adapter";
import { EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validaEmail(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido')
  } else {
    console.log('Email é inválido')
  }
}

validaEmail(new EmailValidatorAdapter(), 'luizgmf@gmail.com')