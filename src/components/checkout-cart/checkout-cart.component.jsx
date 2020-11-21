import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart/cart.context'

import CheckoutItem from '../checkout-item/checkout-item.component'
import CheckoutControls from '../checkout-controls/checkout-controls.component'


import './checkout-cart.styles.scss'

const CheckoutCart = ({ history, match }) => {
    const { cartItems } = useContext(CartContext)

    return (
        <React.Fragment>

            <div className='checkout-cart'>
                <div className='checkout-table-header'>
                    <div className='header-block'>
                        <p>Obrázok</p>
                    </div>
                    <div className='header-block'>
                        <p>Názov</p>
                    </div>
                    <div className='header-block'>
                        <p>Množstvo</p>
                    </div>
                    <div className='header-block'>
                        <p>Cena</p>
                    </div>
                    <div className='header-block'>
                        {" "}
                    </div>
                </div>
                <div>
                    {cartItems.length ? cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )) : (
                            <div className='empty-message'>
                                <p>Košík je prázny</p>
                            </div>
                        )
                    }
                </div>

            </div>
            {/* <CheckoutControls disablePrev handleNextClick={() => history.push(`${match.path}doprava-a-platba`)} slug='' /> */}
        </React.Fragment>
    )
}

export default CheckoutCart
