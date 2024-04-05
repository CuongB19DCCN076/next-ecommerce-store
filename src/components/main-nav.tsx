"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Category } from "@/types";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();
    const routes = data.map((route) => ({
        href: `category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav className={cn(
            "mx-6 flex items-center space-x-4",
            "lg:space-x-6"
        )}>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Thể loại</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {routes.map((route) => (
                                <NavigationMenuLink key={route.href}>
                                    <Link
                                        href={`/${route.href}`}
                                        className={cn("text-sm font-medium transition-colors hover:text-primary block w-max px-4 py-2",
                                            route.active ? "text-black dark:text-white" : "text-muted-foreground"
                                        )}
                                    >
                                        {route.label}
                                    </Link>
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </nav>
    )
}

export default MainNav