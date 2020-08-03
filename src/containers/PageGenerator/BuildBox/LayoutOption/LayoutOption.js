import classes from './LayoutOption.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/BuildBox';

const LayoutOption = (props) => {
    const handleDragStart = (event) =>{
        event.target.style.opacity = '0.4';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text', event.target.id);
    }
    const handleDragEnd = (event) =>{
        event.target.layout = true;
        event.target.style.opacity = '1';
    }
    const handleDragEnter = (event) =>{
        event.target.classList.add('over');
    }
    const handleDragLeave = (event) =>{
        event.target.classList.remove('over');
    }
    const handleSelect = (event) => {
        let index = props.selectedLayoutOptions.findIndex((option) => {
            return option.id === event.target.id});
       
        if(index !== -1){
            props.onSelectLayoutOption(index);
        }
    }


    return(
        <div draggable="true" onClick={handleSelect} onDragLeave={handleDragLeave} onDragEnter={handleDragEnter} onDragEnd={handleDragEnd} onDragStart={handleDragStart} id={props.id} className={(props.selected ? classes["selected"] : '')+ ' '+classes["layout-option"]}>
            <div className={classes["type"]}>{props.type}</div>
            <span onClick={() => { debugger; props.onLayoutOptionRemoved(props.id)}} className={classes["cancel"]}>X</span>
        </div>
    )

}
const mapDispatchToProps = dispatch => {
    return {
        onLayoutOptionRemoved: (id) => dispatch(actions.removeLayoutOption(id)),
        onSelectLayoutOption: (index) => dispatch(actions.selectLayoutOption(index))
    };
}

const mapStateToProps = state => {
    return{
        selectedLayoutOptions: state.selectedLayoutOptions
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LayoutOption);