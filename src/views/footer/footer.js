import React,{ Component} from 'react';
import classes from './footer.module.scss';
class Footer extends Component {

    constructor() {
        super();
        this.state = {
            toggleClass: false
        }
        this.handleClick = (event) => {
            event.preventDefault();
            this.setState({toggleClass: !this.state.toggleClass});
        }
    }

    render(){
        let date = new Date();
        let year = date.getFullYear();
        return(
            <div className={classes["footer"]}>
                <div className={classes["websiteby"]}>Copyright {year} &copy; | All Rights Reserved.</div>
            </div>
        );
    }
}

export default Footer;