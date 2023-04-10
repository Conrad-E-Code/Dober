import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js'
function AutoPayEnroll() {
    const stripe = useStripe()
    const elements = useElements()


    return(
        <div>AutopayEnroll
            <br/>
            <form>
            <PaymentElement  />
            </form>
        </div>
    )
}
export default AutoPayEnroll