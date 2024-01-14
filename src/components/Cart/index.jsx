import { useSelector, useDispatch } from "react-redux";
import { addQuantityProduct, deleteQuantityProduct, deleteToCart } from "../../redux/slices/cartSlice";
const Carts = ({ showCart = false, setShowCart }) => {
  const { cartItems,totalPriceCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      {showCart && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div
                id="carts"
                className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full md:pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title">
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setShowCart(false)}
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
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
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((cart) => {
                              return (
                                <>
                                  <li className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={cart.image}
                                        alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1  flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{cart.title}</a>
                                          </h3>
                                          <p className="ml-4">${cart.totalPrice.toFixed(2)}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          Blue
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          Quantity: {cart.qty}
                                        </p>
                                        <div className="flex justify-center items-center gap-1">
                                          <button
                                            onClick={() =>
                                              dispatch(
                                                deleteQuantityProduct({
                                                  qty: 1,
                                                  productId: cart.id,
                                                })
                                              )
                                            }
                                            className="text-lg border-2 hover:border-black px-[.4rem] ">
                                            -
                                          </button>
                                          <input
                                            type="text"
                                            value={cart.qty}
                                            className="inline-block w-10 text-center"
                                            disabled
                                            readOnly
                                          />
                                          <button
                                            onClick={() =>
                                              dispatch(
                                                addQuantityProduct({
                                                  qty: 1,
                                                  productId: cart.id,
                                                })
                                              )
                                            }
                                            className="text-lg border-2 hover:border-black px-[.4rem] ">
                                            +
                                          </button>
                                        </div>

                                        <div className="">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              dispatch(
                                                deleteToCart({ id: cart.id })
                                              )
                                            }
                                            className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </>
                              );
                            })}
                            {!cartItems.length && <p className="text-center text-lg mt-20">keranjangmu masih kosong</p>}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPriceCart}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            onClick={() => setShowCart(false)}
                            className="font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;
