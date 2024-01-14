import { useState } from "react";
import categorys from "../../data/category.json";
import { useDispatch, useSelector } from "react-redux";
import {
  setDefaultProducts,
  setProducts,
} from "../../redux/slices/productSlice";
import { sortData } from "../../helper/sortData.js";

const Filter = ({ showFilter, setShowFilter }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  const handleSearch = () => {
    const newProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    dispatch(setProducts(newProducts));
    setShowFilter(false);
  };

  const handleSortCategories = (e) => {
    if (!e.target.checked) {
      console.log("set default");
      dispatch(setDefaultProducts());
      return;
    }
    const category = e.target.value;
    const newProducts = products.filter((product) => {
      return product.category.toLowerCase() == category.toLowerCase();
    });
    dispatch(setProducts(newProducts));
    setShowFilter(false);
  };

  const handleSelectSort = (e) => {
    const type = e.target.value;
    const newData = sortData([...products], type);
    dispatch(setProducts(newData));
    setShowFilter(false);
  };

  return (
    <>
      <div
        className={`${
          showFilter ? "block absolute w-full inset-0 z-20 top-0" : "hidden"
        }  md:min-w-[20rem] lg:block md:mt-10 rounded bg-slate-600 p-2`}>
        <div className="flex justify-between items-center my-5">
          <div className="text-xl">Filter Search</div>
          <button onClick={() => setShowFilter(false)} className="text-xl">
            close
          </button>
        </div>

        <div className="search flex gap-3">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full rounded text-lg"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-black text-white rounded">
            Search
          </button>
        </div>
        <div className="my-5">
          <div className="text-xl">Categories</div>
          {categorys.map((category, idx) => {
            return (
              <label
                htmlFor={category}
                key={idx}
                className="flex py-2 w-full border-b-2 border-b-black items-center  justify-start gap-6 relative">
                <input
                  onChange={(e) => handleSortCategories(e)}
                  type="checkbox"
                  id={category}
                  value={category}
                  className="right-0"
                />
                <div className="items-end text-lg font-medium">{category}</div>
              </label>
            );
          })}
        </div>

        <div className="my-5">
          <h1 className="text-xl font-medium">Sort</h1>
          <select
            id="sort"
            onChange={(e) => handleSelectSort(e)}
            className="bg-white w-[70%] border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-gray-400 focus:border-gray-400 block  p-2">
            <option value="">Random</option>
            <option value="ASCENDING">A-Z Selections</option>
            <option value="DISCENDING">Z-A Selections</option>
            <option value="HIGHEST">Highest Priced</option>
            <option value="LOWEST">Lowest Priced</option>
            <option value="TOPRATED">Top Rated</option>
            <option value="MOSTREVIEWS">Most Reviews</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
