export function parseLogin(requestBody: any): ILogin {
    return requestBody.email && requestBody.password
        ? { email: requestBody.email, password: requestBody.password }
        : null
}