
import { useDispatch } from 'react-redux';
import { addProductInShoppingCart, deleteProductInShoppingCart, resetShoppingCart } from '../shoppingCart/shopingCartSlice';
import { Product } from '../../interfaces';
// export interface ProductCardProps {
// }


export const ProductCard = (product: Product): JSX.Element => {
    const dispatch = useDispatch()

    return (<div>

        <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt="Producto imagen"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                <h1>{product.category_id}</h1> 
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.id}</p>
                
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                <div className="flex flex-row justify-center">
                    <button type="button" className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-1 border border-green-500 hover:border-transparent rounded"
                        onClick={() => (dispatch(addProductInShoppingCart({ product })))}>+</button>
                    <button type="button" className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-1 border border-yellow-500 hover:border-transparent rounded"
                        onClick={() => (dispatch(deleteProductInShoppingCart({ product })))}>-</button>
                    <button type="button" className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded"
                        onClick={() => (dispatch(dispatch(resetShoppingCart())))}>reset</button></div>
            </div>
        </div>
    </div>)

};