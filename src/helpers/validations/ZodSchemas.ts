export default class ZodSchemas {

  constructor(private readonly zod: any) { }

  credentials () {
    return this.zod.object({
      email: this.zod.string().email({ message: 'E-mail inválido' }),
      password: this.zod.string().min(6, { message: 'Senha inválida' })
    })
  }

  registration () {
    return this.zod.object({
      name: this.zod.string().min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
      lastName: this.zod.string().min(3, { message: 'O sobrenome deve ter no mínimo 3 caracteres' }),
      email: this.zod.string().email({ message: 'Digite um email válido' }),
      // .refine(
      //   async (email) => {
      //     const user = await userRepository.get({ email })
      //     return !user.length
      //   },
      //   { message: 'Este e-mail já está em uso' }
      // ),
      password: this.zod.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
      passwordConfirm: this.zod.string().default(''),
      terms: this.zod.boolean().default(false),
    })
      .refine((data: any) => data.password === data.passwordConfirm, {
        message: 'As senhas devem ser iguais.',
        path: ['passwordConfirm'],
      })
      .refine((data: any) => data.terms, {
        message: 'Você deve concordar com os termos e condições',
        path: ['terms'],
      })
  }
}
