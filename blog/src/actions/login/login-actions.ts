'use server'

import { asyncDelay } from "@/utils/async-delay"

type loginActionState = {
  username: string;
  error: string;
}

export async function loginAction(state: loginActionState, formData: FormData) {
  await asyncDelay(5000) //Vou manter dessa forma pra quem tentar atacar o sistema nao consiga por exemplo


  return {
    username: '',
    error: 'Teste de erro'
  }
}