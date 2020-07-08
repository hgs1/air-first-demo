import React from 'react';
import { Input, Button } from 'antd';

export default ({ initCount = 0 }) => {
  const [ count, setCount ] = React.useState(initCount);
  const [ num, setNum ] = React.useState('');

  React.useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  return (
    <div>
      <p className="input">
        输入：
        <Input type="number" className="margin-r10" value={num} onChange={e => setNum(e.target.value)} />
        <Button className="margin-r10" onClick={() => setCount(count + parseInt(num))}>增加</Button>
        <Button onClick={() => setCount(count - parseInt(num))}>减少</Button>
      </p>
      <p className="output">输出：{count}</p>
    </div>
  )
}
