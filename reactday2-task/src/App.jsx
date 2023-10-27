import React, { useState } from 'react';
import './App.css';
import AppCard from './AppCard';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

function App({ Items }) {
    
    const [cart, setCart] = useState(0);

    function addCart() {
        setCart(cart + 1);
        console.log(cart);
    }
  
  return (
      <div>
          <NavBar cart={cart} setCart={setCart}/>
          {/* -- Header-- */}
          <Header />
        {/* <!-- Section--> */}
          <section className="py-5">
              <div className="container px-4 px-lg-5 mt-5">
                  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      {
                          Items.map((Items) =>
                           <div className="col mb-5" key={Items.id}>
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                        {Items.sale}
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{Items.itemName}</h5>
                                    {/* <!-- Product reviews--> */}
                                    {Items.itemReviws}
                                    {/* <!-- Product price--> */}
                                    {Items.priceDown}
                          {Items.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addCart}>{Items.options } {Items.addCart} </a></div>
                            </div>
                        </div>
                    </div>
                          )
                      }
                      
                  </div>
              </div>
          </section>
          {/* <!-- Footer--> */}
          <Footer />
    </div>
  )
}

export default App;