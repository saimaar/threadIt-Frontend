import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import {sortItems} from '../../Redux/Actions/cartItemAction'
import {connect} from 'react-redux'

class NavBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleAllOption =(e, { name })=>{
    if (name === 'All') {
      this.props.sortItems('all')
    }
    this.handleItemClick(e, name)
    //i want to refresh the page on click
  }

  render() {
    return (
      <Menu class="menu-bar" secondary>
        <Link to={'/'} ><Menu.Item
          name='Home'
          active={this.state.activeItem === 'Home'}
          onClick={this.handleItemClick}
        /></Link>
      <Link to={'/items'}><Menu.Item
          name='All'
          active={this.state.activeItem === 'All'}
          onClick={this.handleAllOption}
        /></Link>
      <Link to={'/wedding'}><Menu.Item
          name='Wedding'
          active={this.state.activeItem === 'Wedding'}
          onClick={this.handleItemClick}
        /></Link>
      <Link to={'/about'}><Menu.Item
          name='About'
          active={this.state.activeItem === 'About'}
          onClick={this.handleItemClick}
        /></Link>
      </Menu>
    );
  }

}
export default connect(null, {sortItems})(NavBar);
