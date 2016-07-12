interface ILoginCredentials {
    email: string
    password: string
}

interface IAccount extends ILoginCredentials {
    balance: number
}
