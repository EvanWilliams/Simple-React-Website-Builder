import React from 'react';
import classes from './PageHeader.module.scss';
import WrappedComponent from '../../../hoc/WrappedComponent/WrappedComponent';

const PageHeader = (props) => (
    <WrappedComponent>
        <header className={classes["entry-header"]}>
            <h1 className={classes["entry-title"]}>{props.title}</h1>
            <div className={classes["page-description"]}>
            <div className={classes["page-description-body"]}>{props.description}</div>
                <p className={classes["disclaimer"]}>{props.disclaimer}</p>
            </div>
        </header>
    </WrappedComponent>
);

export default PageHeader;