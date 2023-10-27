import React from 'react';
import './App.css';
import AppCard from './AppCard';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

function App() {

  
  return (
      <div>
          <NavBar />
          {/* -- Header-- */}
          <Header />
        {/* <!-- Section--> */}
          <section className="py-5">
              <div className="container px-4 px-lg-5 mt-5">
                  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      <AppCard />
                      <AppCard />
                      <AppCard />
                      <AppCard />
                      <AppCard />
                      <AppCard />
                      <AppCard />
                      <AppCard />
                  </div>
              </div>
          </section>
          {/* <!-- Footer--> */}
          <Footer />
    </div>
  )
}

export default App;