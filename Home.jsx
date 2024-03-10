import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import categoriesImage1 from "/images/kitchenAppliances.jpg";
import categoriesImage2 from "/images/homeElectronics.jpg";
import categoriesImage3 from "/images/cleaningAppliances.jpg";

import latestArrivalsImage1 from "/images/electricIron.png";
import latestArrivalsImage2 from "/images/foodProcessor.jpg";
import latestArrivalsImage3 from "/images/vacuumCleaner.jpg";

import allProductsImage1 from "/images/airConditioner.jpg";
import allProductsImage2 from "/images/blender.png";
import allProductsImage3 from "/images/coffeeMaker.jpg";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold">Categories</h2>
        <div className="p-4 flex flex-col items-center mb-5">
          <p className="text-gray-700 mb-4">
            Explore a wide range of product categories to find exactly what you
            need for your home.
          </p>
          <Link
            to="/categories"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore Categories
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <img
            src={categoriesImage1}
            alt="Categories 1"
            className="w-full h-64 object-contain"
          />
          <img
            src={categoriesImage2}
            alt="Categories 2"
            className="w-full h-64 object-contain"
          />
          <img
            src={categoriesImage3}
            alt="Categories 3"
            className="w-full h-64 object-contain"
          />
        </div>
      </div>

      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold">Our Latest Arrivals</h2>
        <div className="p-4 flex flex-col items-center mb-5">
          <p className="text-gray-700 mb-4">
            Discover the newest and most exciting products that have just
            arrived in our store.
          </p>
          <Link
            to="/latest-arrivals"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Latest Arrivals
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <img
            src={latestArrivalsImage1}
            alt="Latest Arrivals 1"
            className="w-full h-64 object-contain"
          />
          <img
            src={latestArrivalsImage2}
            alt="Latest Arrivals 2"
            className="w-full h-64 object-contain"
          />
          <img
            src={latestArrivalsImage3}
            alt="Latest Arrivals 3"
            className="w-full h-64 object-contain"
          />
        </div>
      </div>

      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <div className="p-4 flex flex-col items-center mb-5">
          <p className="text-gray-700 mb-4">
            Explore our diverse range of high-quality home appliances designed
            to enhance your lifestyle.
          </p>
          <Link
            to="/products"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <img
            src={allProductsImage1}
            alt="All Products 1"
            className="w-full h-64 object-contain"
          />
          <img
            src={allProductsImage2}
            alt="All Products 2"
            className="w-full h-64 object-contain"
          />
          <img
            src={allProductsImage3}
            alt="All Products 3"
            className="w-full h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default Home;
