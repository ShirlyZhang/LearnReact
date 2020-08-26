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
  //v17可能会废弃 一定要用就加 UNSAFE_ 前缀
  componentWillMount(){
    console.log("componentWillMount")
  }

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
  //v17可能会废弃 一定要用就加 UNSAFE_ 前缀
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
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
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps" , nextProps);
  }
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

