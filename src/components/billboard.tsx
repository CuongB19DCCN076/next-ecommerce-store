import { cn } from "@/lib/utils"
import { Billboard as BillboardType } from "@/types"

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="p-4 rounded-xl overflow-hidden sm:p-6 lg:p-8">
            <div className={cn(
                "rounded-xl relative aspect-square overflow-hidden bg-cover"
                , "md: aspect-[2.4/1]"
            )}
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-red-500">
                        {data?.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard
