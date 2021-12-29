import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBar.style';

import { CHECKOUT_CODE, checkPointList} from './ProgressBar.config';

export class ProgressBar extends PureComponent {
    static propTypes = {
        checkoutStep: PropTypes.string.isRequired
    };


    renderStepBar(){
        const {checkoutStep} = this.props;
        return (
            checkPointList.map((item, index) => {
                const isBarActive = CHECKOUT_CODE[checkoutStep] >= item.activeCode;
                const isBarComplete = CHECKOUT_CODE[checkoutStep] >= item.completeCode;
                  return (
                    <div block={'Stepbar'}>
                    <div block={'Stepbar'} elem="bar-container">
                    <div block={'Stepbar'} elem="bar" mods={{isActive : isBarActive}}>
                    </div>
                    </div>
                  {item.isCheckPointRender && (
                    <div block={'Stepbar'} elem="status">
                        <p block={'Stepbar'} elem="numb" mods={{isActive : isBarActive}} >
                            {isBarComplete ? (<button block={'Stepbar'} elem="checklist">&#8515;</button>) : (<span>{index+1}</span>)}
                       </p>
                        <p block={'Stepbar'} elem="info" mods={{isActive : isBarActive}} >{item.displayText}</p>
                    </div> )
                   } 
                </div>
                )
            } )
        )
    }

    render() {
        return (
            <div block="ProgressBar">
                {this.renderStepBar()}
            </div>
        );
    }
}

export default ProgressBar;
