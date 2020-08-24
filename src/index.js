import React from 'react';//负责逻辑控制 控制虚拟dom 数据=>vdom ；用到jsx时候必须要引入 虽然下面看起来没有用到
import ReactDOM from 'react-dom';//渲染实际dom vdom=>dom
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// 基本使用 表达式用{}包裹
const name  = "react!"
const obj = {
  firstName: 'Harry',
  lastName : "Potter"
}
// 函数
function formatName(name){
  return name.firstName + " " + name.lastName;
}
// JSX对象
const greet = <div>good</div>
// 条件语句
const show = true;
// 数组
const a = [0,1,2];
const jsx = <div>
  <div>hello,{name}</div>
  <div>{formatName(obj)}</div>
  {greet}
  {show? greet : "登录"}
  {show && greet} 
  {/* show为真才展示greet */}
</div>

ReactDOM.render(jsx,document.getElementById("root"));

// 基本使用 表达式用{}包裹
// 函数
// JSX对象
// 条件语句
// 数组
// 属性
// 模块化