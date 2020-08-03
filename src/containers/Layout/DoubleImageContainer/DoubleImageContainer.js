import React from 'react';
import classes from './DoubleImageContainer.module.scss';
import WrappedComponent from '../../../hoc/WrappedComponent/WrappedComponent';
export const DoubleImageContainer = (props) => {
     return(
         <WrappedComponent>
            <div className={classes["double_image_container"]}>
            {props.children}
            </div>
        </WrappedComponent>
     )
}

export default DoubleImageContainer;