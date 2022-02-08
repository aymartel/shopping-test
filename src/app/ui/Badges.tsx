import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "../../interfaces";
import { useDispatch } from 'react-redux';
import { fetchProducts, resetCategory, resetProductList } from '../../features/products/productListSlice';
const url = "https://test2.sionic.ru/api/Products?"
const CategoryURL = `https://test2.sionic.ru/api/Categories?sort=["name","ASC"]&range=[0,24]`;



export default function Badges() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch()
  const [catActiveId, setCatActive] = useState(-1);

  const [page, setPage] = useState(0);
  const maxPerPage = 5;

  useEffect(() => {
    axios.get(CategoryURL).then((response) => {
      setCategories(response.data);
    })
      .catch((error) => error);
  }, []);

  if (categories.length < 1) return null;

  return (<div className="flex items-center justify-between flex-wrap">

    {

      categories.map((category: Category) => (
        <button key={category.id}
          onClick={
            () => {
              dispatch(resetProductList())
              dispatch(resetCategory(category.id))
            dispatch(fetchProducts({ url, sort: ["name", "ASC"], page, maxPerPage , category:category.id}));
            setCatActive(category.id)

              // dispatch(
              //   fetchProducts(`https://test2.sionic.ru/api/Products?sort=["name","ASC"]&range=[0,24]&filter={"category_id":${category.id}}`));
            }
          }
          className={catActiveId === category.id ?
            "h-10 px-5 text-white transition-colors duration-150 border-2 border-black bg-indigo-800 rounded-full focus:shadow-outline hover:bg-indigo-800 font-semibold"
            :
            "h-10 px-5 text-white transition-colors duration-150 bg-gray-400 rounded-full focus:shadow-outline hover:bg-indigo-800 font-semibold"}
        >
          {category.id}
        </button>


      ))}
  </div>
  );



}

