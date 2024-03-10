import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  const products = [
    {
      id: 1,
      image: "/images/tv.jpg",
      name: "TV",
      price: 60000,
      description:
        "High-definition LED TV with a sleek design, offering immersive entertainment. Various screen sizes available for diverse room setups.",
    },
    {
      id: 2,
      image: "/images/refrigerator.jpg",
      name: "Refrigerator",
      price: 45000,
      description:
        "Energy-efficient refrigerator with ample storage space, suitable for households of various sizes. Available in different styles such as top-freezer, bottom-freezer, side-by-side, or French door.",
    },
    {
      id: 3,
      image: "/images/washingMachine.jpg",
      name: "Washing Machine",
      price: 40000,
      description:
        "Front-loading or top-loading washing machines designed to efficiently clean clothes while conserving water and energy.",
    },
    {
      id: 4,
      image: "/images/microwaveOven.jpg",
      name: "Microwave Oven",
      price: 15000,
      description:
        "Countertop or built-in microwave ovens for quick and efficient cooking, reheating, and defrosting.",
    },
    {
      id: 5,
      image: "/images/airConditioner.jpg",
      name: "Air Conditioner",
      price: 60000,
      description:
        "Split or window air conditioners offering efficient cooling and climate control for homes or offices.",
    },
    {
      id: 6,
      image: "/images/vacuumCleaner.jpg",
      name: "Vacuum Cleaner",
      price: 15000,
      description:
        "Bagless or bagged vacuum cleaners for thorough cleaning of floors and surfaces.",
    },
    {
      id: 7,
      image: "/images/dishwasher.jpg",
      name: "Dishwasher",
      price: 80000,
      description:
        "Built-in or portable dishwashers designed to clean dishes effectively with minimal water usage.",
    },
    {
      id: 8,
      image: "/images/electricIron.png",
      name: "Electric Iron",
      price: 3000,
      description:
        "Steam irons or steam generator irons for efficient wrinkle removal from clothing.",
    },
    {
      id: 9,
      image: "/images/toaster.jpg",
      name: "Toaster",
      price: 3500,
      description:
        "Two-slice or four-slice toasters for quick and consistent toasting of bread, bagels, and more.",
    },
    {
      id: 10,
      image: "/images/electricKeetle.jpg",
      name: "Electric Kettle",
      price: 3000,
      description:
        "Electric kettles designed to quickly heat water for various purposes such as making tea, coffee, or instant noodles.",
    },
    {
      id: 11,
      image: "/images/blender.png",
      name: "Blender",
      price: 6000,
      description:
        "High-powered blenders suitable for making smoothies, shakes, soups, and sauces.",
    },
    {
      id: 12,
      image: "/images/coffeeMaker.jpg",
      name: "Coffee Maker",
      price: 8000,
      description:
        "Coffee machines designed for brewing various types of coffee, from espresso to drip coffee.",
    },
    {
      id: 13,
      image: "/images/foodProcessor.jpg",
      name: "Food Processor",
      price: 7000,
      description:
        "Versatile food processors designed for chopping, slicing, shredding, and pureeing various ingredients.",
    },
    {
      id: 14,
      image: "/images/hairDryer.jpg",
      name: "Hair Dryer",
      price: 3500,
      description:
        "Hair dryers equipped with multiple heat and speed settings for quick and efficient hair drying and styling.",
    },
    {
      id: 15,
      image: "/images/electricShaver.jpg",
      name: "Electric Shaver",
      price: 4500,
      description:
        "Electric razors designed for shaving facial or body hair efficiently and comfortably.",
    },
  ];

  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-blue-500">
          <h1 className="text-3xl text-white font-bold p-4">
            ElectroHome Appliance Store
          </h1>
        </div>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/product/:id"
              element={<Product products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
