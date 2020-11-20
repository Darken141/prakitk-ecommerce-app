import React from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as Wave } from '../../images/footer-wave.svg'
import logoImg from '../../images/praktik-logo_white.png'

import './footer.styles.scss'

const Footer = () => {
    return (
        <React.Fragment>
            <div>
                <Wave />
            </div>
            <footer className='footer'>
                <div className='row'>
                    <div className='col'>
                        <img alt='Vodoinštalačný materiál Praktik logo' src={logoImg} />
                    </div>

                    <div className='col'>
                        <h3>Otváracie hodiny</h3>
                        <div className='opening-hours'>
                            <p>pondelok - piatok</p>
                            <p>08:00 - 17:00</p>
                            <p>sobota</p>
                            <p>08:00 - 12:00</p>
                            <p>nedeľa | zatvorené</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Kontakt</h3>
                        <address>
                            Hviezdoslavova 28A<br />
                            915 01 Nové Mesto nad Váhom<br />
                            Slovensko<br />
                            <br />
                            +421 949 253 305<br />
                            predajnapraktik@outlook.sk
                        </address>
                    </div>
                    <div className='col'>
                        <h3>Sitemap</h3>
                        <ul>
                            <li>
                                <Link to='/'>Domov</Link>
                            </li>
                            <li>
                                <Link to='/obchod'>Kategórie</Link>
                            </li>
                            <li>
                                <Link to='/prihlasenie'>Prihlasiť sa</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Osobné údaje</h3>
                        <ul>
                            <li>Ochrana osobných údajov</li>
                            <li>Cookies</li>
                            <li>Reklamácia</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
