import Header from '@/components/header';
import Hero from '@/components/home/hero';
import Products from '@/components/home/products';
import TrainLikeChampion from '@/components/home/train-like-champion';

export default function Home() {
    return (
        <div className="">
            <div className="">
                <div className="relative">
                    <Header />
                    <Hero />
                </div>
                <Products />
                <TrainLikeChampion />
            </div>
        </div>
    );
}
