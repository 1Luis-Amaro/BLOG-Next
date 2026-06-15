'use server'

import { asyncDelay } from "@/utils/async-delay"

export async function logoutAction() {
  await asyncDelay(5000) //Vou manter dessa forma pra quem tentar atacar o sistema nao consiga por exemplo

}