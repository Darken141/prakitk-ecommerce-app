import React, { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkout/checkout.context'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import SectionHeading from '../../components/section-heading/section-heading.component'
import CheckoutCart from '../../components/checkout-cart/checkout-cart.component'
import CheckoutShippingAndPayment from '../../components/checkout-shipping-and-payment/checkout-shipping-and-payment.component'
import CheckoutAddress from '../../components/checkout-address/checkout-address.component'
import CheckoutSummary from '../../components/checkout-summary/checkout-summary.component'

import './checkout.styles.scss'


const CheckoutPage = () => {
    const match = useRouteMatch()
    const { activeStep } = useContext(CheckoutContext)

    return (
        <section className='checkout-page'>
            <div className='checkout-progress'>
                <div className={`${activeStep === '' ? "active" : ""} progress-step `}>
                    <p>1. Košík</p>
                </div>
                <div className={`${activeStep === 'doprava-a-platba' ? "active" : ""} progress-step`}>
                    <p>2. Doprava a platba</p>
                </div>
                <div className={`${activeStep === 'dodacie-udaje' ? "active" : ""} progress-step`}>
                    <p>3. Dodacie údaje</p>
                </div>
                <div className={`${activeStep === 'zhrnutie-objednavky' ? "active" : ""} progress-step `}>
                    <p>4. Zhrnutie objednávky</p>
                </div>
            </div>
            <SectionHeading>
                Skontrolujte si svoj nákupný košík
            </SectionHeading>

            <div className='checkout-form'>

                <Switch>
                    <Route exact path={`${match.url}/`} component={CheckoutCart} />
                    <Route path={`${match.url}/doprava-a-platba`} component={CheckoutShippingAndPayment} />
                    <Route path={`${match.url}/dodacie-udaje`} component={CheckoutAddress} />
                    <Route path={`${match.url}/zhrnutie-objednavky`} component={CheckoutSummary} />
                </Switch>

            </div>


        </section>
    )
}

export default CheckoutPage
