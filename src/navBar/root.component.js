import React, {Component} from 'react'
import {navigateToUrl} from 'single-spa'
import './navbar.css';

class NavBar extends React.Component {
    constructor () {
        super ()
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: true,
        };

    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render () {
        return (
            <nav id="NavBar">
                <div >
                    {/*<a href="/" onClick={navigateToUrl} className="brand-logo">single-spa</a>*/ }
                    <ul id="nav-mobile" className={this.state.active ? '': "test"} >
                        <li className="disabled"><a href="/" className="waves-effect waves-light disabled"><i
                            className="material-icons right">home</i><span>HOME</span></a></li>
                        <li ><a href="/angularJS" onClick={ navigateToUrl }
                                              className="waves-effect waves-light "><i
                            className="material-icons right">inbox</i><span>WORK ORDERS</span></a></li>
                        <li><a className="waves-effect waves-light disabled"><i
                            className="material-icons right">merge_type</i><span>MAPPING</span></a></li>
                        <li><a href="/" className="waves-effect waves-light"><i
                            className="material-icons right">movie</i><span>ASSETS</span></a></li>
                        <li><a className="waves-effect waves-light disabled"><i
                            className="material-icons right">border_color</i><span>LICENSEES</span></a></li>
                        <li><a className="waves-effect waves-light disabled"><i
                            className="material-icons right">description</i><span>CLIENT PORTAL</span></a></li>
                        <li><a className="waves-effect waves-light disabled"><i
                            className="material-icons right">extension</i><span>ADMIN</span></a></li>
                        <li><a className="waves-effect waves-light disabled"><i
                            className="material-icons right">shopping_cart</i><span>CART</span></a></li>
                        <li><a className="waves-effect waves-light disabled"><i
                            className="material-icons right">inbox</i><span> <br/>QC WORK ORDERS</span></a></li>
                        <li><a className="waves-effect waves-light disabled"><i
                            className="material-icons right">send</i><span>VENDOR PIXEL</span></a></li>
                        {/*<li onClick={this.toggleClass}><a className="waves-effect waves-light"><i*/}
                        {/*    className="material-icons right">touch_app</i><span>TOGGLE INSPECTOR</span></a></li>*/}
                        <li className="framework-info"><a className="waves-effect waves-light"><span className="react-span">Global NavBar Build with React</span></a></li>
                    </ul>
                </div>
            </nav> )
    }
}
export default NavBar
