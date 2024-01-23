import Container from "@/components/ui/container"
import { cn } from "@/lib/utils"
import Link from "next/link"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categories"
import NavbarAction from "@/components/navbar-action"

const Navbar = async () => {
    const categories = await getCategories();
    return (
        <div className="border-b">
            <Container>
                <div className={cn(
                    "relative px-4 flex h-16 items-center",
                    "sm:px-6",
                    "lg:px-8"
                )}>
                    <Link href={'/'} className={cn(
                        "ml-4 flex gap-x-2",
                        "lg:ml-0"
                    )}>
                        <p className="font-bold text-xl">Phoniex</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarAction />
                </div>
            </Container>
        </div>
    )
}

export default Navbar