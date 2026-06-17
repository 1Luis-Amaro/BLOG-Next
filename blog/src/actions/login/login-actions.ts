'use server'

import { verifyPassword } from "@/lib/login/mangae-login";
import { asyncDelay } from "@/utils/async-delay"

type loginActionState = {
  username: string;
  error: string;
}

export async function loginAction(state: loginActionState, formData: FormData) {
  await asyncDelay(5000) //Vou manter dessa forma pra quem tentar atacar o sistema nao consiga por exemplo

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos'
    }
  }

  //Dados que o usuário digitou no form
  const username = formData.get('username')?.toString().trim() || '' //o trim tira espaços
  const password = formData.get('password')?.toString().trim() || ''

  if (!username || !password) {
    return {
      username,
      error: "Digite o usuário e a senha"
    }
  }

  //Aqui eu checaria se o usuário existe na base de dados
  const isUsernameValid = username === process.env.LOGIN_USER
  const isPasswordValid = await verifyPassword(password, process.env.LOGIN_PASS || '')

  if (!isUsernameValid || !isPasswordValid) {
    return {
      username,
      error: 'Usuário ou senha inválidos'
    }
  }

  //Aqui o usuário e senha não são válidos
  //Criar o cookie e redirecionar a página

  return {
    username: '',
    error: 'USUÁRIO LOGADO COM SUCESSO'
  }
}