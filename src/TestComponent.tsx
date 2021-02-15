import React, { useState } from 'react'
import PropTypes from 'prop-types'

interface Props {
    text: string
}
interface User {
    id: number;
    name: string;
}

const TestComponent: React.FC<Props> = (props) => {
    const [ count, setCount ] = useState<number | null>(null);
    const [ user, setUser ] = useState<User>({id:1, name: "dummy"});

    return (
        <div>
            <h1>{ props.text }</h1>
            <h1>{count}</h1>
            <h3>{user.name}</h3>
        </div>
    )
}

export default TestComponent
