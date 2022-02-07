export interface Product {
    id: number;
    name: string;
    category_id: number;
    description: string;
}

export interface ProductInCart {
    id: number;
    quantity?: number;
}

export interface Category {
    id: number;
    name: string; 
}
    