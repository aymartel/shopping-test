import { useSelector, useDispatch } from 'react-redux';
import { ProductInCart } from '../../interfaces';
import { RootState } from '../../app/store';
import { addProductInShoppingCart, deleteProductInShoppingCart, resetShoppingCart } from './shopingCartSlice';

// export interface ProductsListProps {
// }

export const ShoppingCart = (): JSX.Element => {
    const dispatch = useDispatch()
    const productsInCartList = useSelector((state: RootState) => state.shoppingCart.productsInCartList);

    return (<div className="mt-8">Products in Cart
        <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
                {(!productsInCartList ? <p>Loading...</p> : productsInCartList.map((product: ProductInCart) => (
                    <li key={product.id} className="py-6 flex">
                        <div className="flex flex-row justify-center">

                            <div key={product.id} className="group relative"></div>
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                                    alt="Imagen del Producto"
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href="">{product.id}</a>
                                        </h3>
                                        <p className="ml-4">10</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">Color</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                        <button type="button" className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-1 border border-green-500 hover:border-transparent rounded"
                                            onClick={() => (dispatch(addProductInShoppingCart({ product })))}>+</button>
                                        <button type="button" className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-1 border border-yellow-500 hover:border-transparent rounded"
                                            onClick={() => (dispatch(deleteProductInShoppingCart({ product })))}>-</button>
                                        <button type="button" className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded"
                                            onClick={() => (dispatch(dispatch(resetShoppingCart())))}>reset</button></div>
                                </div>
                            </div>
                        </div>
                    </li>

                )))}
            </ul>
           
        </div>
    </div>)
};
