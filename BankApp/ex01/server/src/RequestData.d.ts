interface ILogin {
    email: string
    password: string
}

interface IRegister {
    email: string
    password: string
}

interface IWithdrawal extends ISession {
    amount: number
}

interface IDeposition extends ISession {
    amount: number
}
