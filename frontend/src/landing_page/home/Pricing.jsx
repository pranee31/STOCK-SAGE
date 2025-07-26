import React from 'react'
function Pricing() {
    return ( 
       <div className="container">
        <div className="row">
            <div className="col-4">
                <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                <p>we pioneered the concept of discount broking and price transperenecy in India. Flat fees and no hidden charges.</p>
                <a href="" style={{textDecoration:"none"}}>See pricing -></a>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 text-center border p-4">
                        <h1 className='mb-4'>$0</h1>
                        <p>Free equity delivery and <br /> direct mutual funds</p>
                    </div>
                    <div className="col-6 text-center border p-4">
                        <h1 className='mb-4'>$20</h1>
                        <p>Intrady and F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;