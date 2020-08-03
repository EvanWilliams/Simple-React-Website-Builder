import React from 'react';

import classes from './PageContent.module.scss';

const FreshFish = (props) => (
                <div id={classes["main"]}>
                    <div id={classes["primary"]}>
                        <div id={classes["content"]}>
                            <article className={classes["henrty"]}>
                                {props.children}
                            </article>
                        </div>
                    </div>
                </div>
);

export default FreshFish;