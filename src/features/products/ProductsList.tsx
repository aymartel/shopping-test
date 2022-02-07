import { useEffect, useState } from 'react';
import { fetchProducts } from './productListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { Product } from '../../interfaces';
import { RootState } from '../../app/store';
import Badges from '../../app/ui/Badges';
import { InfinityScroll } from '../../app/ui/InfiniteScroll';

// export interface ProductsListProps {
// }

export const ProductsList = (): JSX.Element => {
    const dispatch = useDispatch()

 
      
    

    const productsList = useSelector((state: RootState) => state.products.productsList);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const hasMoreData = productsList.length < 20;

    const loadMoreNumbers = () => {
        
        setLoading(true);
        setTimeout(() => {
            dispatch(fetchProducts(`https://test2.sionic.ru/api/Products?sort=["name","ASC"]&range=[${page},${page + 10}]`));
          setLoading(false);
        }, 300);
        setPage((page) => page + 11);
      };

  
      return (
        <InfinityScroll
          hasMoreData={hasMoreData}
          isLoading={loading}
          onBottomHit={loadMoreNumbers}
          loadOnMount={true}
        >
          <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Badges/>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                {(!productsList ? <p>Loading...</p> : productsList.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category_id={product.category_id}
                        description={product.description}
                    />
                )))}
            </div>
        </div>
    </div>
        </InfinityScroll>
      );

//    return (<div className="bg-white">
//         <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//             <Badges/>
//             <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

//             <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

//                 {(!productsList ? <p>Loading...</p> : productsList.map((product: Product) => (
//                     <ProductCard
//                         key={product.id}
//                         id={product.id}
//                         name={product.name}
//                         category_id={product.category_id}
//                         description={product.description}
//                     />
//                 )))}
//             </div>
//         </div>
//     </div>
//     )
};