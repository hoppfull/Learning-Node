import { h } from './MyModule'
import { createStore, applyMiddleware } from 'redux'
import * as React from 'react'
import { render } from 'react-dom'
import { default as thunk } from 'redux-thunk'

export namespace App {
    export function main(args: string[]) {
        console.log(args[0])
        console.log(h(5)) // 30
        const store = createStore<number>(() => 0, applyMiddleware(thunk))
        console.log(store.getState())

        interface MyTagAttributes {
            title?: string
        }
        const MyTag = ({ title }: MyTagAttributes) =>
            <h1>{title || "Default title!"}</h1>

        render(<MyTag />, document.body)
    }
}
