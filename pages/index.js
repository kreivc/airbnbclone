import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
    return (
        <div className="">
            <Head>
                <title>Kreivc Airbnb</title>
                <link
                    rel="icon"
                    href="http://lh3.googleusercontent.com/BQnvuZR500pg2ulvv3FBmRI93ODz3AjNfbz92hCieuJLvmbGY36AKhETMTTfTDgpPQI"
                />
            </Head>

            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>

                    {/* Pull sone data fron server - API endpoints */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {exploreData?.map(({ img, distance, location }) => (
                            <SmallCard
                                key={img}
                                img={img}
                                distance={distance}
                                location={location}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold py-8">
                        Live Anywhere
                    </h2>
                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                        {cardsData?.map(({ img, title }) => (
                            <MediumCard key={img} img={img} title={title} />
                        ))}
                    </div>
                </section>

                <LargeCard
                    img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb."
                    buttonText="Get Inspired"
                />
            </main>

            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then(
        (res) => res.json()
    );

    const cardsData = await fetch("https://jsonkeeper.com/b/VHHT").then((res) =>
        res.json()
    );

    return {
        props: {
            exploreData,
            cardsData,
        },
    };
}
