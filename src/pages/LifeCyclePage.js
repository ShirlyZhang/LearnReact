import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class LifeCyclePage extends Component {
  static defaultProps = {
    // msg: "omg"
  }

  static propTypes = {
    // msg: PropTypes.string.isRequired 
  }
  constructor(props) {
    super(props);
    this.state = { count: 0};
    console.log("construtor")
  }

  //新引入的生命周期函数 调用render方法之前调用 初始挂载及后续更新都会调用
  //返回一个对象更新state 如果返回null 不更新任何内容
  //用新的生命周期函数时 不可以同时用unsafe的那三个 会报错
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps");
    const {count } = state;
    //这个生命周期的作用：可以更新state
    return count > 5 ? {count : 0}:null;
    // return null;
  }

  //v17可能会废弃 一定要用就加 UNSAFE_ 前缀 
  //可以通过命令加 在当前项目目录运行 npx react-codemod rename-unsafe-lifecycles 然后先执行代码合并 后边就直接回车
  // UNSAFE_componentWillMount(){
  //   console.log("componentWillMount")
  // }

  componentDidMount(){
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    //在这里可以做性能的优化
    const { count } = nextState;
    console.log("shouldComponentUpdate", nextState ,this.state);
    return count !== 3;
    // return true;//可以返回 true和false
  }

  //最近一次渲染输出（提交到dom节点）之前调用
  //使组件能在发生更改之前从dom中捕获一些信息（例如滚动位置）
  //返回值作为参数 传给componentDidUpdate(prevProps, prevState, snapshot)
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate",prevProps, prevState);
    return {
      msg:"我是getSnapshotBeforeUpdate"
    }
    // return null;
  }

  //v17可能会废弃 一定要用就加 UNSAFE_ 前缀
  // UNSAFE_componentWillUpdate(){
  //   console.log("componentWillUpdate");
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate",prevProps, prevState, snapshot);
  }

  setCount = () => {
    this.setState({count : this.state.count + 1})
  }

  render() {
    console.log("render", this.props);
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* {count % 2 && <Child count = {count}/>} */}
        <Child count={count}/>
      </div>
    )
  }
}


export class Child extends Component {
  //初次渲染时不会执行，只有咋子已挂载的组件接收新的props的时候，才会执行
  //v17可能会废弃 一定要用就加 UNSAFE_ 前缀
  // UNSAFE_componentWillReceiveProps(nextProps){
  //   console.log("componentWillReceiveProps" , nextProps);
  // }
  componentDidUnMount(){
    console.log("componentDidUnMount");
  }
  render() {
    console.log("child render");
    const { count } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>{ count }</p>
      </div>
    )
  }
}

