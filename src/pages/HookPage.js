import React, { useState, useEffect } from 'react'

export default function HookPage(props) {
  //定义一个叫count的state变量 初始化为0
  const [count, setCount] = useState(0);

  const [date, setDate] = useState(new Date());

  useEffect(()=>{
    //所有的副作用都写在这里
    console.log("count effect");
    //相当于didmount和didupdate
    //只需要在count改变的时候执行
    document.title = `点击了${count}次`;
  },[count])//第二个参数是依赖项，表示只有这个值发生改变的时候才再次执行

  useEffect(()=>{
    console.log("date effect");
    //条件执行  timer只需要在didmount时执行
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    //清除定时器以防⽌内存泄漏 如果是在class组件中 是在willUnMount中做
    return ()=> clearInterval(timer);//类似willUnmount
  },[])// 只需要在didmount时执行 相当于没有依赖项 []
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count + 1)
      }}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}

// 1.Hook 是什么？ 
// Hook 是⼀个特殊的函数，它可以让你“钩⼊” React 的特性。例如， useState 是允许在 React 函数组件中添加 state 的 Hook。
// 2.什么时候⽤ Hook？ 
// 如果你在编写函数组件并意识到需要向其添加⼀些 state，以前的做法是必须将其它转化为 class，现在可以在现有的函数组件中使⽤ Hook。
// 3.Effect Hook 可以让你在函数组件中执⾏副作⽤操作。
// 数据获取，设置订阅以及⼿动更改 React 组件中的 DOM 都属于副作⽤