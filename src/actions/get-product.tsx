import { Product } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (productId: string): Promise<Product> => {
    try {
        const res = await axios.get(`${URL}/${productId}`);
        return res?.data as Product;
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default getProduct;