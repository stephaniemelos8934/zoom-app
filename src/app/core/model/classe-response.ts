export type ClasseResponse = {
    idClass: string,
    className: string,
    teacherAdmin: string,
    students: {
        [ra: string]: Estudante
    }
}

export type Estudante = {
    name: string,
    faltas: number,
    sobrenome: string,
    imagem: string
}