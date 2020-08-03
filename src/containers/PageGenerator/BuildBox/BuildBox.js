import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutOption from './LayoutOption/LayoutOption';
import Guide from '../../Layout/LayoutElementGuide/LayoutElementGuide';

import * as actions from '../../../store/BuildBox';
import classes from './BuildBox.module.scss';

class BuildBox extends Component {
    constructor() {
        super();
        this.state = {
            layoutElements: []
        }
        this.drop = (event) =>{
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            let destination = this.props.selectedLayoutOptions.findIndex((option) => {
                return option.id === event.target.id});
            let source = this.props.selectedLayoutOptions.findIndex((option) => {
                return option.id === data});
            if(source !== -1 && destination !== -1){
                //found both ids in selectedLayoutOptions, swap entries
                this.props.onSwapLayoutOptions(source,destination);
            }
            else{
                //Dragged from the pallet, append layout Option to the end.
                let element = document.getElementById(data);
                this.props.onLayoutOptionAdded({
                    "type":element.innerText,
                    "id":data+Math.floor(Math.random()*4000),
                    "selected": false,
                    "detail_data": {...Guide[element.innerText]}
                })
            }
        }
         this.allowDrop = (event) =>{
            event.preventDefault();
        }
    }
     
    render(){
        return(
            <div className={classes["build-box"]}>
                <div className={classes["build-header"]}>Top of the page</div>
                <div onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} className={classes["construction-box"]}>
                    {this.props.selectedLayoutOptions.map((element) => {
                        return(
                            <LayoutOption
                            id={element.id}
                            type={element.type}
                            selected={element.selected}
                            ></LayoutOption>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLayoutOptionAdded: (element) => dispatch(actions.addLayoutOption(element)),
        onSwapLayoutOptions: (source,destination) => dispatch(actions.swapLayoutOptions(source,destination))
    };
}
const mapStateToProps = state => {
    return{
        layoutOptions: state.layoutOptions,
        selectedLayoutOptions: state.selectedLayoutOptions
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(BuildBox);