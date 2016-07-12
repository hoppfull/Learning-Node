interface ILogin {
    email: string
    password: string
}

interface IAccount extends ILogin {
    balance: number
}
