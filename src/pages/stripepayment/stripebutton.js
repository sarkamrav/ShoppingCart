import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPrice } from '../cart/cartselector'
import { finalCheckout,porder} from '../cart/cartaction';
const Stripebutton = ({ amount, finalcheckout ,pOrder,cartdata}) => {
    console.log("cartdata",cartdata)
    const logout = () => {
        pOrder(cartdata)
        debugger;
        finalcheckout();
        // localStorage.removeItem('persist:root');
        // localStorage.removeItem('loggedIn');
        // window.location.reload();
        window.location.href = "http://localhost:3000/";
    }
    const publishablekey = 'pk_test_51H4QE0GcFhhvf78e30Pl8mfONvZtp2SXfnTcb5SUvUQdMRSRhnu06JD6L2RtNlRbgBtSG12qcSXxzCKwP0LlFNe100jhDbH2lX'
    const onToken = token => {
        logout();

    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Shopping Cart" // the pop-in header title
            description={`Your total price is ${amount}rs. `} // the pop-in header subtitle
            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
            panelLabel="Pay Money" // prepended to the amount in the bottom pay button
            amount={amount * 100} // cents
            shippingAddress
            billingAddress
            token={onToken}
            stripeKey={publishablekey} />

    )
}
const mapStateToProps =state =>({
    amount : getPrice(state),
    cartdata:state.cartReducer.cartitems,
})

const mapDispatchToProps = dispatch => ({
    finalcheckout: () => { dispatch(finalCheckout()) },
    pOrder: (data) => { dispatch(porder(data)) },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stripebutton));
