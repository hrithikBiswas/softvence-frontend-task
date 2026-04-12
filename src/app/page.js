import Footer from '@/components/footer';
import Header from '@/components/header';
import Client from '@/components/home/client';
import Cta from '@/components/home/cta';
import Hero from '@/components/home/hero';
import Products from '@/components/home/products';
import TrainLikeChampion from '@/components/home/train-like-champion';

export default function Home() {
    return (
        <div className="max-h-fit overflow-hidden">
            <Header />
            <Hero />
            <Products />
            <TrainLikeChampion />
            <Client />
            <Cta />
            <Footer />
        </div>
    );
}
