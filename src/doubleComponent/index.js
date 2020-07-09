import React from 'react';
import InputComp from './InputComp';
import OutputComp from './OutputComp';

export default ({ initCount = 0 }) => {
    const [ count, setCount ] = React.useState(initCount);
    return (
        <div>
            <h1>双组件版</h1>
            <InputComp count={ count } setCount={ setCount } />
            <OutputComp count={ count } setCount={ setCount } />
        </div>
    )
}
