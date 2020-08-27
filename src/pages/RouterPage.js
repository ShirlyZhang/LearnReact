import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          {/* link是一个跳转 类似a标签 */}
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>

          {/* 独占路由 只能匹配一个 */}
          <Switch>
            {/* exact 精确匹配 不然只要包含字符串就显示 */}
            {/* 渲染方法共三种 
            1、component  优先级中 根据location匹配时渲染
            2、children children优先级最高 是一个function 同时出现时只显示children 而且children和当前路由（location）无关系 在别的页面也会显示
            3、render 是一个function 优先级最低 根据location匹配 只在当前页面显示
            */}
            <Route exact path="/" 
              // component={HomePage}
              // children = {()=> <div>children</div>}
              render = {()=> <div>render</div>}
            />
            <Route path="/user" component={UserPage}/>

            {/* 404 这样写如果不处理 每个页面都显示内容 所以见上方 独占路由 */}
            <Route component={emptyPage}/>
          </Switch>

        </Router>
      </div>
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    )
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    )
  }
}

class emptyPage extends Component {
  render() {
    return (
      <div>
        <h3>emptyPage - 404</h3>
      </div>
    )
  }
}
