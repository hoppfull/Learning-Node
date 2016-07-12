export function emailIsValid(email: string) {
    return true
}

export function passwordIsValid(password: string) {
    return true
}

export function depositIsValid(amount: number) {
    return amount > 0
}

export function withdrawIsValid(amount: number) {
    return amount > 0
}

export function parseLoginCredentials(requestBody: any): ILoginCredentials {
    return requestBody.email && requestBody.password
        ? { email: requestBody.email, password: requestBody.password }
        : null
}