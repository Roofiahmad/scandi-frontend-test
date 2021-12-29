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
                    <div block={item.name}>
                    <div block={item.name} elem="bar-container">
                    <div block={item.name} elem="bar" mods={{isActive : isBarActive}}>
                    </div>
                    </div>
                    <div block={item.name} elem="status">
                        <p block={item.name} elem="numb" mods={{isActive : isBarActive}} >
                            {isBarComplete ? (<button block={item.name} elem="checklist">&#8515;</button>) : (<span>{index+1}</span>)}
                       </p>
                        <p block={item.name} elem="info" mods={{isActive : isBarActive}} >{item.displayText}</p>
                    </div>
                </div>
                )
            } )
        )
    }

    renderEndBar(){
        const {checkoutStep} = this.props;
        const checkoutCode = CHECKOUT_CODE[checkoutStep]
        const isBarActive = checkoutCode >=3
        return (
            <div block="Endbar">
                <div block="Endbar" elem="bar" mods={{isActive : isBarActive}}></div>
            </div>
        )
    }

    render() {
        return (
            <div block="ProgressBar">
                {this.renderStepBar()}
                {this.renderEndBar()}
            </div>
        );
    }
}

export default ProgressBar;
