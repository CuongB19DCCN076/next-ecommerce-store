
import Container from "@/components/ui/container";
import CartList from "./components/cart-list";
import { auth } from "@clerk/nextjs";

const CartPage = () => {
    const { userId } = auth();
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">
                        Giỏ hàng
                    </h1>
                    <CartList userId={userId} />
                </div>
            </Container>
        </div>
    )
}

export default CartPage