import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBar.style';

export class ProgressBar extends PureComponent {
    static propTypes = {
        checkoutStep: PropTypes.string.isRequired
    };

    renderShipping(){
        const {checkoutStep} = this.props;
        const shippingBar = checkoutStep === 'SHIPPING_STEP' || checkoutStep === 'BILLING_STEP' || checkoutStep === 'DETAILS_STEP';
        const paymentBar = checkoutStep === 'BILLING_STEP' || checkoutStep === 'DETAILS_STEP';
        return (
            <div block="Shipping">
            <div block="Shipping" elem="bar-container">
            <div block="Shipping" elem="bar" mods={{isActive : shippingBar}}>
            </div>
            </div>
            <div block="Shipping" elem="status">
                <p block="Shipping" elem="numb" mods={{isActive : shippingBar}} >
                    {paymentBar ? (<button block="Shipping" elem="checklist">&#8515;</button>) : (<span>1</span>)}
               </p>
                <p block="Shipping" elem="info" mods={{isActive : shippingBar}} >Shipping</p>
            </div>
        </div>
        )
    }

    renderComplete(){
        const {checkoutStep} = this.props;
        const completeBar = checkoutStep === 'DETAILS_STEP';
        return (
            <div block="Endbar">
                <div block="Endbar" elem="bar" mods={{isActive : completeBar}}></div>
            </div>
        )
    }

    renderPayment(){
        const {checkoutStep} = this.props;
        const paymentBar = checkoutStep === 'BILLING_STEP' || checkoutStep === 'DETAILS_STEP';
        const completeBar = checkoutStep === 'DETAILS_STEP';
        return (
            <div block="Payment">
            <div block="Payment" elem="bar-container">
            <div block="Payment" elem="bar" mods={{isActive : paymentBar}}></div>
            </div>
            <div block="Payment" elem="status">
                <p block="Payment" elem="numb" mods={{isActive : paymentBar}}>
                {completeBar? (<button block="Shipping" elem="checklist">&#8515;</button>) : (<span>2</span>)}
                </p>
                <p block="Payment" elem="info" mods={{isActive : paymentBar}} >Review & Payments</p>
            </div>
        </div>
        )
    }

    render() {
        return (
            <div block="ProgressBar">
                {this.renderShipping()}
                {this.renderPayment()}
                {this.renderComplete()}
            </div>
        );
    }
}

export default ProgressBar;
