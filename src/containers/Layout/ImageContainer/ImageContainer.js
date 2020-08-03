import React from 'react';
import classes from './ImageContainer.module.scss';

export const ImageContainer = (props) => {
     return(
        <div>
            <div className={classes["image-wrapper"]}>
                <h3>{props.title}</h3>
                <figure>
                    <img alt={props.alt} src={props.image}></img>
                    <figcaption className={classes["caption"]}>
                        {props.caption}
                    </figcaption>
                </figure>
            </div>
            {props.hr ? <hr/> : null}
        </div>
     )
}

export default ImageContainer;