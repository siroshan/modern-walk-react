import { IProduct } from "../../../types/models/Product"

export type ProductCardContainerProps = {
    products: IProduct[];
    isLoading: boolean;
}