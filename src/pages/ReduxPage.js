import React, { Component } from 'react'
import store from "../store/index"
export default class ReduxPage extends Component {
  componentDidMount(){
    //或者在外层index.js做一个订阅 也可以做到视图刷新

    // store.subscribe(()=>{
    //   console.log("state发生变化了");
    //   this.forceUpdate();
    // })
  }
  render() {
    console.log("store",store );
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={()=>{
          store.dispatch({type:"ADD"})
        }}>add</button>
        <button onClick={()=>{
          store.dispatch({type:"MINUS"})
        }}>minus</button>
      </div>
    )
  }
}

// 1. createStore 创建store
// 2. reducer 初始化、修改状态函数
// 3. getState 获取状态值
// 4. dispatch 提交更新
// 5. subscribe 变更订阅