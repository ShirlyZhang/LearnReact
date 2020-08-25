import React, { Component } from 'react'

export default class ClassConponent extends Component {
  constructor(props) {
    super(props);
    // 使⽤state属性维护状态，在构造函数中初始化状态
    this.state = { 
      date: new Date() 
    };//当前的时间
  }
  //组件挂载完成之后执行
  componentDidMount(){
    this.timer = setInterval(()=>{
      //更新state，不能直接用this.state赋值
      this.setState({
        date: new Date()
      })
    },1000)
  }
  //组件卸载前执行  停止定时器
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    const {date} = this.state;
    return (
      <div>
        <h3>ClassConponent</h3>
        <p>{ date.toLocaleTimeString() }</p>
      </div>
    )
  }
}