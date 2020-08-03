import React from 'react';
import WrappedComponent from '../../../hoc/WrappedComponent/WrappedComponent';
import classes from './unorderedList.module.scss';
const UnorderedList = (props) =>
(
    <WrappedComponent>
        <div className={classes["column-wrapper"]}>
            {props.children}
            {(props.disclaimer) ?  <hr/> : null}
        </div>
        {(props.disclaimer) ? <p id={classes["disclaimer"]}>Notes: Bay Port Fish catch in <strong>bold</strong>, <em>Round</em> means the whole fresh fish</p> : null}
    </WrappedComponent>
);

export default UnorderedList