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
    const [ inputData, setInputData ] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) =>
        setInputData(e.target.value);

    return (
        <div>
            <h1>{ props.text }</h1>
            <h1>{count}</h1>
            <h3>{user.name}</h3>
            <input type="text" value={inputData} onChange={handleInputChange} />
            <h1>{inputData}</h1>
        </div>
    )
}

export default TestComponent
