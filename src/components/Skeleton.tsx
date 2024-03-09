export function Skeleton() {
    return <div className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
        <div className="skeleton h-32 w-full"></div>
        <div className="flex flex-row gap-4">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    </div>;
}