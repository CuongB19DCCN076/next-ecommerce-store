import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;


const createOrder = async (data: object): Promise<object> => {
    try {
        const res = await axios.post(URL, { ...data });
        return res;
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default createOrder;