export type MembrosGruposResponse = {
    admin: string,
    members: [
        {
            email: string,
            first_name: string,
            id: string,
            last_name: string,
            type: number
        }
    ]
}