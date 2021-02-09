import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const Stripebutton= ({price}) => {
    const publishablekey ='pk_test_51H4QE0GcFhhvf78e30Pl8mfONvZtp2SXfnTcb5SUvUQdMRSRhnu06JD6L2RtNlRbgBtSG12qcSXxzCKwP0LlFNe100jhDbH2lX'
   const onToken = token =>{
        console.log(token);
        alert("payment successful");
    }
        return (
          <StripeCheckout
          label="Pay Now"
          name="Shopping Cart" // the pop-in header title
          description={`Your total price is ${price}`} // the pop-in header subtitle
          image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
          panelLabel="Pay Money" // prepended to the amount in the bottom pay button
          amount={price} // cents
          shippingAddress
          billingAddress
          token ={onToken}
          stripeKey={publishablekey} />

        )
    }


export default Stripebutton
