import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter: 0
    }
  }
  componentDidMount(){
    // this.changeValue(1);
    // console.log(this.state.counter,"生命周期 也是异步的")

    //原生事件中也是同步的
    document.getElementById("test").addEventListener("click",this.setCounter)
  }
  setCounter = () => {
    //setstate在合成事件中 是异步的，这里说的异步其实是批量更新，达到了优化性能的目的
    // this.changeValue(1);

    //实现同步？
    //setstate在setTimeout中是同步的
    // setTimeout(() => {
      this.changeValue(1);
      this.changeValue(2);//后面的会覆盖前面的 这样写只能+2 批量更新

      this.changeValue(3);
    // }, 0);
  }
  changeValue = (v) => {
    // this.setState({
    //   counter:this.state.counter + v
    // })

    //第二个参数 callback
    // this.setState({
    //   counter:this.state.counter + v
    // },()=>{
    //   //callback就是在state更新完成之后再执行
    //   console.log(this.state.counter,"callback")
    // })

    // console.log(this.state.counter,"setCounter通过在这里打印可以看出是异步的，比上面慢一步");

    this.setState((state)=>{
      return {
        counter: state.counter + v
      }
    })
  }
  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        {/* 原生事件 */}
        <button id="test">原生事件：{this.state.counter}</button>
      </div>
    )
  }
}
