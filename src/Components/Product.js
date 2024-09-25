import React from 'react';

const products = [
  {
    id: 1,
    title: 'Yail wrist watch',
    price: '$299',
    img: 'https://i.imgur.com/pjITBzX.jpg',
  },
  {
    id: 2,
    title: 'Analog Classic Watch',
    price: '$199',
    img: 'https://i.imgur.com/pjITBzX.jpg',
  },
  {
    id: 3,
    title: 'Sporty Digital Watch',
    price: '$149',
    img: 'https://i.imgur.com/pjITBzX.jpg',
  },
  {
    id: 4,
    title: 'Luxury Leather Watch',
    price: '$499',
    img: 'https://i.imgur.com/pjITBzX.jpg',
  },
  {
    id: 5,
    title: 'Minimalist Gold Watch',
    price: '$399',
    img: 'https://i.imgur.com/pjITBzX.jpg',
  },
];

function Product() {
  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="card mx-auto col-md-3 col-10 mt-5">
            <img
              className="mx-auto img-thumbnail"
              src={product.img}
              alt={product.title}
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="card-body text-center mx-auto">
              <div className="cvp">
                <h5 className="card-title font-weight-bold">{product.title}</h5>
                <p className="card-text">{product.price}</p>
                <a href="#" className="btn details px-auto">
                  view details
                </a>
                <br />
                <a href="#" className="btn cart px-auto">
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
