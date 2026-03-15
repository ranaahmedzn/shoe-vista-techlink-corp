import { brandsData } from "../data/brands";
import BrandCard from "./BrandCard";

const BestSellers = () => {
    return (
        <div>
            <div className="mt-10 mb-2 text-2xl">Best Sellers</div>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {brandsData.map((elem, id) => (
                    <BrandCard key={id} brand={elem} />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;