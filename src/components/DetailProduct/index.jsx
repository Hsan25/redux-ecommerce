import { useSelector, useDispatch } from "react-redux";
import { showDetailProduct } from "../../redux/slices/viewSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState } from "react";
const DetailProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.view.showDetailProduct);
  const [quantity, setQuantity] = useState(1);
  const handleAddCart = () => {
    dispatch(
      addToCart({ ...product, totalPrice: product.price * quantity, qty: quantity })
    );
    dispatch(showDetailProduct({ status: false, product: {} }));
  };

  return (
    <>
      <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(showDetailProduct({ status: false, product: {} }))
                  }
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 h-48 md:h-60 mx-auto aspect-w-2 overflow-hidden rounded-lg bg-white sm:col-span-4 lg:col-span-5">
                    <img
                      src={product.image}
                      alt="Two each of gray, white, and black shirts arranged on table."
                      className="object-cover h-full object-center"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {product.title || "Basic Tee 6-Pack"}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">${product.price}</p>

                      <div className="rating flex gap-x-2 items-center">
                        Rating{" "}
                        <svg
                          className="text-yellow-300 h-5 w-5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {product.rating.rate}
                      </div>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <div className="description">
                        {product.description ||
                          `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis optio dolorum soluta, deleniti voluptate
                        numquam!`}
                      </div>
                      <div className="flex justify-center items-start gap-2 my-5">
                        <div className="me-4">Quantity: </div>
                        <button className="text-lg border-2 hover:border-black px-[.6rem] "
                          onClick={() =>
                            setQuantity(quantity > 1 ? quantity - 1 : quantity)
                          }>
                          -
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          className="inline-block w-10 text-center"
                          disabled
                          readOnly
                        />
                        <button className="text-lg border-2 hover:border-black px-[.6rem] " onClick={() => setQuantity(quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button
                        onClick={handleAddCart}
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add to Cart
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
