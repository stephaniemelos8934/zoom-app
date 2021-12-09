export type LoginResponse = {
    login?: boolean,
    message?: {
        account_id: string
        created_at: string
        first_name: string
        group_ids: []
        id: string
        im_group_ids: []
        language: string
        last_name: string
        login_types: []
        phone_country: string
        phone_number: string
        role_name: string
        status: string
        type: number
        verified: number
    },
    type: number
}