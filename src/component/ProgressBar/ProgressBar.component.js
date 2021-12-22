import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBar.style';

export class ProgressBar extends PureComponent {
    static propTypes = {
        checkoutStep: PropTypes.string.isRequired
    };

    render() {
        console.log(this.props)
        const {checkoutStep} = this.props;
        return (
            <div block="ProgressBar">
             <div block="Shipping">
                 <div block="Shipping" elem="bar-container">
                 <div block="Shipping" elem="bar" mods={{isActive : checkoutStep === 'SHIPPING_STEP' || checkoutStep === 'BILLING_STEP'}}>
                 </div>
                 </div>
                 <div block="Shipping" elem="status">
                     <p block="Shipping" elem="numb" mods={{isActive : checkoutStep === 'SHIPPING_STEP' || checkoutStep === 'BILLING_STEP'}} >
                         {checkoutStep === 'BILLING_STEP' ? (<button block="Shipping" elem="checklist">&#8515;</button>) : (<span>1</span>)}</p>
                     <p block="Shipping" elem="info" mods={{isActive : checkoutStep === 'SHIPPING_STEP' || checkoutStep === 'BILLING_STEP'}} >Shipping</p>
                 </div>
             </div>
             <div block="Payment">
                 <div block="Payment" elem="bar-container">
                 <div block="Payment" elem="bar" mods={{isActive : checkoutStep === 'BILLING_STEP'}}></div>
                 </div>
                 <div block="Payment" elem="status">
                     <p block="Payment" elem="numb" mods={{isActive : checkoutStep === 'BILLING_STEP'}}>2</p>
                     <p block="Payment" elem="info" mods={{isActive : checkoutStep === 'BILLING_STEP'}} >Review & Payments</p>
                 </div>
             </div>
             <div block="Endbar">
                 <div block="Endbar" elem="bar" mods={{isActive : false}}>
                 </div>
             </div>
            </div>
        );
    }
}

export default ProgressBar;
