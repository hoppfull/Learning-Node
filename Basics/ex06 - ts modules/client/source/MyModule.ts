function f(x: number): number {
    return x * 2
}

export function g(x: number): number {
    return x + 10
}

export function h(x: number): number {
    return f(g(x))
}