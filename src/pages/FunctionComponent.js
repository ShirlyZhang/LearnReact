import React, { useState, useEffect } from 'react'

export function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  useEffect(()=>{
    //相当于componentDidMount componentWillUnmount
    console.log("useeffect");
    const timer = setInterval(()=>{
      setDate(new Date())
    },1000)
    return ()=>clearInterval(timer);
  },[])//依赖项 谁的值变了需要再次执行 componentDidUpdate生命周期
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{ date.toLocaleTimeString() }</p>
    </div>
  )
}