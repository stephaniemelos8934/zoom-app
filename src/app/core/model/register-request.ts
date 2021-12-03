export type RegisterRequest = {
    email: string,
    password: string,
    celular?: string,
    nome: string,
    sobrenome?: string,
    /* 
        1 = estudante
        2 = professor
        3 = admin
    */
    tipo: 1 | 2 | 3,
    identificacao?: string
}