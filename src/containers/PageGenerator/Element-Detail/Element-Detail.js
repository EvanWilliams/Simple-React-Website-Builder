import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/BuildBox';
import Input from '../../../components/UI/Input/Input';
import classes from './Element-Detail.module.scss';

class ElementDetail extends Component {
    constructor() {
        super();
        this.state = {
            layoutElements: []
        }
        this.onChange = (value, key) => {
            debugger;
            let updatedLayoutDetail = {...this.props.selectedLayoutDetail};
            updatedLayoutDetail["detail_data"][key] = value;
            this.props.onSelectedDetailChanged(updatedLayoutDetail)
        }
        
    }
     
    render(){
        debugger;
        return(
            <div className={classes["element-detail"]+" "+(this.props.selectedLayoutDetail ? "" : classes["striped-box"])}>
                {this.props.selectedLayoutDetail ? Object.entries(this.props.selectedLayoutDetail.detail_data).map((detail) =>{
                    return(
                        <div>
                            <Input elementType="input" changed={(event) => {this.onChange(event.target.value,detail[0])}} label={detail[0]} value={detail[1]}></Input>
                        </div>
                    )
                }): null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedDetailChanged: (updatedDetail) => dispatch(actions.updateSelectedLayoutOption(updatedDetail))
    };
}
const mapStateToProps = state => {
    return{
        selectedLayoutDetail: state.selectedLayoutDetail
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ElementDetail);