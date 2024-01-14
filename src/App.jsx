import { useSelector } from "react-redux";
import Carts from "./components/cart/index";
import { useState } from "react";
import Products from "./components/Products/index";
import Navbar from "./components/Navbar/index";
import DetailProduct from "./components/DetailProduct/index";
import Filter from "./components/Filter/index";
const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { status } = useSelector((state) => state.view.showDetailProduct);
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <Navbar />
      {status && <DetailProduct />}
      <div className="flex gap-5 justify-center items-center">
        <button
          className="p-2 mt-3 text-center  bg-slate-300 rounded relative"
          onClick={() => setShowCart(!showCart)}>
          SHOW CART
          <span className="p-1 px-2 text-xs bg-red-500 absolute top-0 rounded-full">
            {cartItems.length}
          </span>
        </button>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="p-2 mt-3 text-center  bg-slate-300 rounded relative">
          Filter
        </button>
      </div>
      <main className="w-full flex px-6 gap-4">
        {/* sidebar */}

        <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
        <div className="mx-auto max-w-2xl py-12  sm:py-10 lg:max-w-4xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            All Products
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3  xl:gap-x-8">
            <Products />
          </div>
        </div>
      </main>

      <Carts showCart={showCart} setShowCart={setShowCart} />
    </>
  );
};

export default App;
