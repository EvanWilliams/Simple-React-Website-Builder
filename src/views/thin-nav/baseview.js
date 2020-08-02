import React,{ Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import './baseview.scss';
import LayoutOption from '../../containers/LayoutOption/LayoutOption';
import BuildBox from '../../containers/BuildBox/BuildBox';
class Baseview extends Component {

    constructor() {
        super();
        this.state = {
            toggleClass: false,
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

                <div id="navbar" className="navbar">
                    <nav id="site-navigation" className="navigation main-navigation" role="navigation">
                        <div className="menu-container">
                            <ul id="primary-menu" className={`nav-menu ${this.state.toggleClass ? "active" : "inactive"}`}>
                                <li onClick={(event) => this.handleClick(event)} id="menu-item-31" className={`${this.state.toggleClass ? "active" : "inactive"}`}><a>{caret}</a></li>
                                <li id="menu-item-15" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15"><NavLink exact activeClassName="selectedLink" to="/fresh-fish/">FRESH FISH</NavLink></li>
                            </ul>
                        </div> 
                    </nav>
                </div>
                <div className={`pop-out-pane ${this.state.toggleClass ? "active" : "inactive"}`}>
                    <div className="box-wrapper">
                        <div className="draggable-menu">
                            {this.props.layoutOptions.map((element) => {
                                return(
                                    <LayoutOption
                                    key={element.id + (Math.random() *256)}
                                    id={element.id}
                                    type={element.type}
                                    ></LayoutOption>
                                )
                            })}
                        </div>
                        <BuildBox
                        ></BuildBox>
                        <div className="element-detail striped-box"></div>
                    </div>
                    <div className="sample-rendering">
                        <div className="striped-box"></div>
                    </div>
                </div>
            </header>
        );
    }
}
const mapStateToProps = state => {
    return{
        layoutOptions: state.layoutOptions,
        selectedlayoutOptions: state.selectedLayoutOptions
    };
}
export default connect(mapStateToProps)(Baseview);