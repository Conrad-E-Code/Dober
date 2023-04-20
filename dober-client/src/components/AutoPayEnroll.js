import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js'
import CheckOutForm from './CheckOutForm';
function AutoPayEnroll() {
    const stripePromise = loadStripe('pk_test_51MvBGHCYo2SbxIAC89ULSbeNEYN8xoMTUrJLoTZMoTWbVEohXNNg5KDv2AYTFWxqxFwZFh4sn5jvUvMx1PMyBkTx00Tmk7MPSO')


    return(
        <div>AutopayEnroll
            <br/>
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
        </div>
    )
}
export default AutoPayEnroll