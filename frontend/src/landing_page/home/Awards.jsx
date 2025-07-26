import React from 'react'
function Awards() {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/media/images/largestBroker.svg' alt="" />
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mt-3'>2+ million Zerodha clients contribute to to over 15% of all retail order volumes in India by trading and investing in :</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>    
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks and IPOS</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='/media/images/pressLogos.png' className='mt-3' style={{width:"90%"}} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Awards;