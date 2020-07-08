import React from 'react';

export default ({ count, setCount }) => {

  React.useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [setCount])

  return (
    <div>
      <p className="output">输出：{count}</p>
    </div>
  )
}
