import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (query: String): Promise<Category> => {
    const res = await axios.get(`${URL}/${query}`);
    return res?.data;
}

export default getCategory;