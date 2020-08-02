import classes from './LayoutOption.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/BuildBox';

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



    return(
        <div draggable="true" onDragLeave={handleDragLeave} onDragEnter={handleDragEnter} onDragEnd={handleDragEnd} onDragStart={handleDragStart} id={props.id} className={classes[props.id]+' '+ classes["layout-option"]}>
            <div className={classes["type"]}>{props.type}</div>
            <div onClick={() => { debugger; props.onLayoutOptionRemoved(props.id)}} className={classes["cancel"]}>X</div>
        </div>
    )

}
const mapDispatchToProps = dispatch => {
    return {
        onLayoutOptionRemoved: (id) => dispatch(actions.removeLayoutOption(id)),
    };
}

export default connect(null,mapDispatchToProps)(LayoutOption);