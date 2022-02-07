import { useEffect } from 'react';
import { fetchAllProducts } from './productListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { Product } from '../../interfaces';
import { RootState } from '../../app/store';

// export interface ProductsListProps {
// }

export const ProductsList = (): JSX.Element => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);
    const productsList = useSelector((state: RootState) => state.products.productsList);
    return (<div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
    )
};
