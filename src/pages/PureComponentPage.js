import React, { Component, PureComponent } from 'react'

// export default class PureComponentPage extends Component { 
//如果用component直接写 不加shouldComponentUpdate限制的话 在内容无更新的情况下render也会一直执行 性能上不是很友好

//pureComponent内置了shouldComponentUpdate的性能优化
//但是PureComponent是浅比较 且必须要用class形式
export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       obj:{num : 0}//没有obj的情况下 可以使用purecomponent可以提高性能
    }
  }
  
  setCount = () => {
    this.setState({ count: 100 , obj:{num:1000} });
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   return nextState.count !== this.state.count;
  // }

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    )
  }
}


//React.PureComponent 与 React.Component 的区别：
//两者的区别在于 React.Component 并未实现 shouldComponentUpdate()
//React.PureComponent 中以浅层对⽐ prop 和 state 的⽅式来实现了该函数

//性能问题：
//如果赋予 React 组件相同的 props 和 state， render() 函数会渲染相同的内容
//某些情况下使⽤ React.PureComponent 可提⾼性能。
