
import React from 'react';
import classes from './WrappedComponent.module.scss';

const WrappedComponent = (props) => (
    <div className={classes["entry-content"]}>
        {props.children}
    </div>
);

export default WrappedComponent;