import React from 'react'
import type { quote } from '../lib/resolvers'

interface ITable {
    quotes: quote[]
}

const Table = ({ quotes }: ITable): JSX.Element => {
    return (<div>
        {quotes.map((quote) => {
            return <div key={quote.id}>{quote.id}</div>
        })}
    </div>
    )
}

export default Table
