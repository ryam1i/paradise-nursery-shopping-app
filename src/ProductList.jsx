import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?q=80&w=600&auto=format&fit=crop",
          description: "Produces oxygen at night and removes harmful airborne toxins like formaldehyde.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484437-31820e39ec14?q=80&w=600&auto=format&fit=crop",
          description: "Resilient and fast-growing, perfect for purifying indoor air and safe for pets.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=600&auto=format&fit=crop",
          description: "Elegant white blooms that filter indoor pollutants and thrive in low lighting.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1628178168239-16629ec23730?q=80&w=600&auto=format&fit=crop",
          description: "Feathery fronds that act as a natural air humidifier and purifier.",
          cost: "$14"
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=600&auto=format&fit=crop",
          description: "Broad, glossy leaves that absorb toxins and make a bold interior statement.",
          cost: "$20"
        },
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600&auto=format&fit=crop",
          description: "Purifies indoor air and provides soothing natural gel for cuts and burns.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=600&auto=format&fit=crop",
          description: "Calming floral fragrance known to reduce stress and encourage restful sleep.",
          cost: "$16"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729986777-497b12861a99?q=80&w=600&auto=format&fit=crop",
          description: "Sweet and intoxicating scent with star-shaped white blossoms.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=600&auto=format&fit=crop",
          description: "Invigorating pine-like herbal aroma, wonderful for kitchens and memory stimulation.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop",
          description: "Crisp, energizing scent that naturally repels insects and freshens the room.",
          cost: "$12"
        },
        {
          name: "English Lavender",
          image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=600&auto=format&fit=crop",
          description: "A sweeter, more compact lavender cultivar with vibrant purple spikes.",
          cost: "$17"
        },
        {
          name: "Gardenia",
          image: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?q=80&w=600&auto=format&fit=crop",
          description: "Luxurious, creamy white flowers renowned for an exquisite floral perfume.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=600&auto=format&fit=crop",
          description: "Packed with antioxidants and carvacrol, known for powerful antimicrobial qualities.",
          cost: "$11"
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=600&auto=format&fit=crop",
          description: "Lemon-scented medicinal herb traditionally brewed to soothe digestion and anxiety.",
          cost: "$13"
        },
        {
          name: "Chamomile",
          image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600&auto=format&fit=crop",
          description: "Gentle daisy-like flowers used globally to brew relaxing bedtime teas.",
          cost: "$14"
        },
        {
          name: "Peppermint",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=600&auto=format&fit=crop",
          description: "High menthol content helps ease tension headaches and digestive discomfort.",
          cost: "$12"
        },
        {
          name: "Basil",
          image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600&auto=format&fit=crop",
          description: "Holy basil / culinary basil with adaptogenic and immune-supporting properties.",
          cost: "$10"
        },
        {
          name: "Calendula",
          image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=600&auto=format&fit=crop",
          description: "Bright golden petals widely celebrated in traditional healing skincare salves.",
          cost: "$15"
        }
      ]
    }
  ];

  // Calculate dynamic total quantity of items in cart
  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const isPlantAdded = (plantName) => {
    return addedToCart[plantName] || cartItems.some((item) => item.name === plantName);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (onHomeClick) {
      onHomeClick();
    } else {
      setShowCart(false);
    }
  };

  return (
    <div>
      {/* Navbar appearing on both Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="luxury" onClick={handleBrandClick}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/628/628283.png"
            alt="Paradise Nursery Logo"
          />
          <a href="/" className="luxury-brand" onClick={handleBrandClick}>
            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link" onClick={handleBrandClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#plants" className="nav-link" onClick={handlePlantsClick}>
              Plants
            </a>
          </li>
          <li>
            <a
              href="#cart"
              className="cart-icon-container"
              onClick={handleCartClick}
              aria-label="Shopping Cart"
            >
              <svg
                className="cart-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Conditional rendering of Shopping Cart or Plant Catalog */}
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, catIdx) => (
            <section key={catIdx} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-list">
                {categoryObj.plants.map((plant, plantIdx) => {
                  const added = isPlantAdded(plant.name);
                  return (
                    <div className="product-card" key={plantIdx}>
                      <img
                        className="product-image"
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                      />
                      <div className="product-info">
                        <h3 className="product-title">{plant.name}</h3>
                        <p className="product-description">{plant.description}</p>
                        <div className="product-price">{plant.cost}</div>
                        <button
                          className="product-button"
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
