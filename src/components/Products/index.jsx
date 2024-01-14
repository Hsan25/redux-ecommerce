import { useDispatch, useSelector } from "react-redux";
import { showDetailProduct } from "../../redux/slices/viewSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  if (products.length == 0) {
    return (
      <>
        <h1 className="text-slate-400 text-xl font-medium">NO PRODUCT</h1>
      </>
    );
  }
  return products.map((product, idx) => {
    return (
      <div
        onClick={() => dispatch(showDetailProduct({ status: true, product }))}
        className="group relative cursor-pointer"
        key={idx}>
        <div className="aspect-h-1 h-72 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-72">
          <img
            src={product.image}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-contain lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-300">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Category: {product.category}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Rating {product.rating.rate} || Review {product.rating.count}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-400">${product.price}</p>
        </div>
      </div>
    );
  });
};
export default Products;
