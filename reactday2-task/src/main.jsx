import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Items = [
    {
        id:1,
        itemName: "Fancy Item",
        price:"$40.00 - $80.00",
        options: "View options"
    },
    {
        id: 2,
        itemName: "Special Item",
        itemReviws: <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
        </div>,
        priceDown: <span className="text-muted text-decoration-line-through">$20.00</span>,
        price: "$18.00",
        sale: <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}
    } >Sale</div>,
        addCart: "Add to cart"
    },
     {
        id:3,
        itemName: "Sale Item",
        priceDown: <span className="text-muted text-decoration-line-through">$50.00</span>,
        price:"$25.00",
         sale:  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}
    } >Sale</div>,
        addCart: "Add to cart"
    },
      {
        id:4,
        itemName: "Popular Item",
        itemReviws: <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
        </div>,
        price:"$40.00",
        addCart: "Add to cart"
    },
       {
        id:5,
        itemName: "Sale Item",
        priceDown: <span className="text-muted text-decoration-line-through">$50.00</span>,
        price:"$25.00",
           sale: <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}
    } >Sale</div>,
        addCart: "Add to cart"
    },
        {
        id:6,
        itemName: "Fancy Item",
        price:"$120.00 - $280.00",
        options: "View options"
    },
         {
        id:7,
        itemName: "Special Item",
        itemReviws: <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
        </div>,
        priceDown: <span className="text-muted text-decoration-line-through">$20.00</span>,
        price:"$18.00",
             sale: <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}
    } >Sale</div>,
        addCart: "Add to cart"
    },
          {
        id:8,
        itemName: "Popular Item",
        itemReviws: <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
        </div>,
        price:"$40.00",
        addCart: "Add to cart"
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App Items={Items} />);
