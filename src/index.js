import React from 'react';//负责逻辑控制 控制虚拟dom 数据=>vdom ；用到jsx时候必须要引入 虽然下面看起来没有用到
import ReactDOM from 'react-dom';//渲染实际dom vdom=>dom
import './index.css';
import styles from './index.module.scss'
import logo from "./logo.svg"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// // 基本使用 表达式用{}包裹
// const name  = "react!"
// const obj = {
//   firstName: 'Harry',
//   lastName : "Potter"
// }
// // 函数
// function formatName(name){
//   return name.firstName + " " + name.lastName;
// }
// // JSX对象
// const greet = <div>good</div>
// // 条件语句
// const show = true;
// // 数组
// const a = [0,1,2];
// const arr = [{
//   index:0,
//   name:"张三"
// },{
//   index:1,
//   name:"李四"
// },{
//   index:2,
//   name:"王二"
// }];
// //属性

// const jsx = (
//   <div className={styles.app}>
//     <div>hello,{name}</div>
//     <div>{formatName(obj)}</div>
//     {greet}
//     {show? greet : "登录"}
//     {show && greet}
//     {/* show为真才展示greet */}
//     <ul>
//       {/* diff时候（当前react 虚拟dom进行一个diff ）首先比较type，然后是key，所以同级同类型元素，key必须唯一 */}
//       {a.map(item =>(
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//     <div>
//       {arr.map(item=>(<p key={item.index}>{item.name}</p>))}
//     </div>
//     {/* eslint-disable-next-line */}
//     <img src={logo} className={styles.logo} style={{width:"50px",height:"30px"}}/>
//   </div>
// )

// ReactDOM.render(jsx,document.getElementById("root"));

// 基本使用 表达式用{}包裹
// 函数
// JSX对象
// 条件语句
// 数组
// 属性
// 模块化