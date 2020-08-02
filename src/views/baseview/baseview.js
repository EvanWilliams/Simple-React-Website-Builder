import React,{ Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import './baseview.scss';
class Baseview extends Component {

    constructor() {
        super();
        this.state = {
            toggleClass: false
        }
        this.handleClick = (event) => {
            event.preventDefault();
            this.setState({toggleClass: !this.state.toggleClass});
        }
        this.closeMenu = (event) => {
            event.preventDefault();
            if(this.state.toggleClass){
                this.setState({toggleClass: !this.state.toggleClass});
            }
        }
    }

    render(){
        let caret = (<FontAwesomeIcon icon={faCaretDown} />)
        if(this.state.toggleClass){
            caret = (<FontAwesomeIcon icon={faCaretUp} />)
        }
        return(
            <header id="masthead" className="site-header">
                <a className="home-link" href="/" title="Bay Port Fish Company">
                    <h1 className="site-title">Bay Port Fish Company</h1>
                    <h2 className="site-description">Where the fish caught the man</h2>
                </a>

                <div id="navbar" className="navbar">
                    <nav id="site-navigation" className="navigation main-navigation" role="navigation">
                    <button onClick={(event) => this.handleClick(event)} className={`menu-toggle ${this.state.toggleClass ? "active" : "inactive"}`}>Menu {caret}</button>
                        <a className="screen-reader-text skip-link" href="#content" title="Skip to content">Skip to content</a>
                        <div className="menu-container">
                            <ul id="primary-menu" onClick={(event) => this.closeMenu(event)} className={`nav-menu ${this.state.toggleClass ? "active" : "inactive"}`}>
                                <li id="menu-item-31" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-30 current_page_item menu-item-31"><NavLink exact activeClassName="selectedLink" to="/">About Us</NavLink></li>
                                <li id="menu-item-15" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15"><NavLink exact activeClassName="selectedLink" to="/fresh-fish/">Fresh Fish</NavLink></li>
                                <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><NavLink exact activeClassName="selectedLink" to="/frozen-fish/">Frozen Fish</NavLink></li>
                                <li id="menu-item-29" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><NavLink exact activeClassName="selectedLink" to="/smoked-fish/">Smoked Fish</NavLink></li>
                                {/* <li id="menu-item-14" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><NavLink exact activeClassName="selectedLink" to="/quote/">Get a Quote</NavLink></li> */}
                                <li id="menu-item-34" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"><NavLink exact activeClassName="selectedLink" to="/fish-sandwich-festival/">Fish Sandwich Festival</NavLink></li>
                                <li id="menu-item-14" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><NavLink exact activeClassName="selectedLink" to="/contact-us/">Contact Us</NavLink></li>
                            </ul>
                        </div> 
                    </nav>
                </div>
            </header>
        );
    }
}

export default Baseview;