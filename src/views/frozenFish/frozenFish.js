import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import classes from './frozenFish.module.scss';

import imageContainer, { ImageContainer } from '../../containers/ImageContainer/ImageContainer';
import FrozenFilletWalleye from '../../assets/images/FrozenFilletsWalleye.jpg';
import FrozenYellowPerch from '../../assets/images/FrozenYellowPerch.jpg';
import PackagedFrozenWhitefish from '../../assets/images/PackagedFrozenWhitefish.jpg';
class FrozenFish extends Component {

    constructor() {
        super();
        this.state = {
            toggleClass: false
        }
        this.handleClick = (event) => {
            event.preventDefault();
        }
    }

    render(){
        return(
                <div id={classes["main"]}>
                    <div id={classes["primary"]}>
                        <div id={classes["content"]}>
                            <article className={classes["henrty"]}>
                                <div className={classes["entry-content"]}>
                                    <header className={classes["entry-header"]}>
                                        <h1 className={classes["entry-title"]}>Frozen Fish</h1>
                                        <div className={classes["page-description"]}>
                                            <div className={classes["page-description-body"]}>We offer most of our popular fillets in a vacuum sealed frozen bag. Fish are frozen within 48 hours of catch to ensure the best quality when thawing. Stock your freezer with freshly frozen fillets today!
                                            </div>
                                            {/* <p className={classes["disclaimer"]}>Go <Link to="/quote">here</Link> to get a shipping quote!</p> */}
                                        </div>
                                    </header>
                                </div>
                                <div className={classes["entry-content"]}>
                                    <div className={classes["entry-content"]}>
                                        <div className={classes["frozen-image-wrapper"]}>
                                            <ImageContainer
                                                image={FrozenYellowPerch}
                                                alt="frozen yellow prech fillets"
                                                caption="Frozen Yellow Perch."
                                            />
                                            <ImageContainer
                                                image={FrozenFilletWalleye}
                                                alt="frozen walleye fillets"
                                                caption="Frozen Walleye and Lake Trout."
                                            />
                                        </div>
                                        <div className={classes["frozen-wrapper"]}>
                                            <div className={classes["left-column"]}>
                                                <h3>Frozen Vacuum-Sealed Fillets</h3>
                                                <ul>
                                                    <li><strong>Yellow Perch Fillets</strong></li>
                                                    <li>Lake Walleye Fillets</li>
                                                    <li><strong>Lake Whitefish Fillets</strong></li>
                                                    <li>Lake Trout Fillets</li>
                                                    <li>MI Chinook Salmon Fillets</li>
                                                    <li>Atlantic Salmon Fillets</li>
                                                    <li><strong>White Perch Fillets</strong></li>
                                                    <li><strong>Catfish Fillets</strong> </li>
                                                    <li><strong>Burbot Fillets</strong> (Freshwater Cod)</li>
                                                    <li><strong>White Bass Fillets</strong></li>
                                                    <li><strong>Sheepshead Fillets</strong></li>
                                                </ul>
                                            </div>
                                            <div className={classes["right-column"]}>
                                                <h3>Other Frozen Products</h3>
                                                <ul>
                                                    <li>U.S. wild Jumbo Shell on Shrimp, 12 count</li>   
                                                    <li>U.S. wild Dry Jumbo Scallops, 10 count</li> 
                                                    <li><strong>Whitefish Caviar</strong></li>
                                                    <li>Lake Trout Caviar</li>
                                                    <li>Crawdads</li> 
                                                    <li>King Crab Legs</li>
                                                    <li>Snow Crab Legs</li>
                                                    <li>Alligator Tail Meat</li>
                                                    <li>Frog Legs</li>
                                                    <li>Squid Tubes & Tentacles</li>
                                                    <li>Fish pin-bone meat available for canning.</li>
                                                </ul>
                                            </div>
                                            <hr/>
                                        </div>
                                        <p>(Our catch in <strong>bold</strong>)</p>
                                        <p>*All Frozen Fish are wild-caught with the exception of the Atlantic Salmon</p>
                                        <p>**Special orders can be placed.</p>
                                        {/* <figure>
                                            <img alt="Packaging frozen whitefish" src={PackagedFrozenWhitefish}></img>
                                        </figure>
                                        <figcaption className={classes["caption"]}>
                                            Whitefish packed to be frozen.
                                        </figcaption> */}
                                        <ImageContainer
                                            image={PackagedFrozenWhitefish}
                                            alt="Package frozen whitefish"
                                            caption="Whitefish packed to be frozen"
                                        />
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
        );
    }
}

export default FrozenFish;