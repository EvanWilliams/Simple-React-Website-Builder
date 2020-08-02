import React,{ Component} from 'react';
import ImageWrapper from '../../../containers/ImageContainer/ImageContainer'
import PageWrapper from '../../../containers/Layout/PageContent/PageContent'
import classes from './Attention_Image_Info.module.scss';
import FreshFishTub from '../../../assets/images/FreshFishTub.jpg';
import FullFishNet from '../../../assets/images/FullFishNet.jpg';
import FilletedLakeTrout from '../../../assets/images/FilletedSalmon.jpg';
import JumboWF from '../../../assets/images/JumboWF-xl.jpg';
import PageContent from '../../../containers/Layout/PageContent/PageContent';
import PageHeader from '../../../containers/PageHeader/PageHeader';
import DoubleImageContainer from '../../../containers/DoubleImageContainer/DoubleImageContainer';
import DoubleImageContainerVertical from '../../../containers/DoubleImageContainerVertical/DoubleImageContainerVertical';
import UnorderedList from '../../../containers/unorderedList/unorderedList';
class FreshFish extends Component {

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
                <PageContent>
                    <div className={classes["entry-content"]}>
                        <div className={classes["entry-content"]}>
                            <PageHeader
                                title="Demo Header Component"
                                description="This is a sort demo of interesting things you can do without needing to learn to much to make a website. Anyone could could extend this into a short paragraph about the company/project"
                                disclaimer="ATTENTION: Hours of Operation changed due to Covid, New Hours ar 4-7pm"
                            />
                            <DoubleImageContainer>
                                <ImageWrapper
                                    image={FullFishNet}
                                    alt="Whitefish in the Net"
                                    caption="Whitefish in the net."
                                />
                                <ImageWrapper
                                    image={FreshFishTub}
                                    alt="Fresh Whitefish ready for Processing"
                                    caption="Fresh Whitefish ready for Processing."
                                />
                            </DoubleImageContainer>
                            <UnorderedList
                            disclaimer>
                                <div className={classes["left-column"]}>
                                    <ul>
                                        <li><strong>Lake Whitefish</strong> Round, Dressed, or Filleted (Pictured Above)</li>
                                        <li><strong>Lake Yellow Perch</strong> Round, Dressed, or Filleted</li>
                                        <li><strong>Catfish</strong> Round, Dressed, Steaked, or Filleted</li>
                                        <li>Lake Walleye Fillets Only</li>
                                        <li>Lake Trout Fillets only</li>
                                        <li>Smelt (Seasonal)</li>
                                        <li>Atlantic Salmon Fillets only</li>
                                        <li><strong>White Perch</strong> Round, Dressed, or Filleted</li>
                                        <li><a href="http:www.miseagrant.umich.edu/explore/native-and-invasive-species/species/fish-species-in-michigan-and-the-great-lakes/burbot/"><strong>Burbot</strong> </a>or <strong>Freshwater Cod</strong>, Round, Dressed, or Fillet</li>
                                    </ul>
                                </div>
                                <div className={classes["right-column"]}>
                                    <ul>
                                        <li><strong>Lake Whitefish</strong> Round, Dressed, or Filleted (Pictured Above)</li>
                                        <li><strong>Lake Yellow Perch</strong> Round, Dressed, or Filleted</li>
                                        <li><strong>Catfish</strong> Round, Dressed, Steaked, or Filleted</li>
                                        <li>Lake Walleye Fillets Only</li>
                                        <li>Lake Trout Fillets only</li>
                                        <li>Smelt (Seasonal)</li>
                                        <li>Atlantic Salmon Fillets only</li>
                                        <li><strong>White Perch</strong> Round, Dressed, or Filleted</li>
                                        <li><a href="http:www.miseagrant.umich.edu/explore/native-and-invasive-species/species/fish-species-in-michigan-and-the-great-lakes/burbot/"><strong>Burbot</strong> </a>or <strong>Freshwater Cod</strong>, Round, Dressed, or Fillet</li>
                                    </ul>
                                </div>
                            </UnorderedList>
                            <DoubleImageContainerVertical>
                                <ImageWrapper
                                    image={FilletedLakeTrout}
                                    alt="Fresh filleted Lake Trout"
                                    caption="Fresh filleted Lake Trout."
                                />
                                <ImageWrapper
                                    image={JumboWF}
                                    alt="Fresh filleted Lake Trout."
                                    caption="Jumbo Whitefish!"
                                />
                            </DoubleImageContainerVertical>

                        </div>
                    </div>
                </PageContent>
        );
    }
}

export default FreshFish;