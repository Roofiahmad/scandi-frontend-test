export const SHIPPING_STEP = 'SHIPPING_STEP';
export const BILLING_STEP = 'BILLING_STEP';
export const DETAILS_STEP = 'DETAILS_STEP';
export const CHECKOUT_CODE = {
    [SHIPPING_STEP]:1,
    [BILLING_STEP]:2, 
    [DETAILS_STEP]:3
};

export const checkPointList = [
    {name: 'Shipping', activeCode: 1, completeCode:2, displayText: 'Shipping'},
    {name: 'Payment', activeCode: 2, completeCode:3, displayText: 'Review & Payment'},
]
