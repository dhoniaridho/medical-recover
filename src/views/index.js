import DefaultLayout from "../components/layouts/DefaultLayout";
import ProductCard from "../components/ui/ProductCard";
import Button from "../components/ui/Button";
import Review from "../components/ui/Review";
import { features, stats } from "../content/home";
import * as Ai from 'react-icons/ai'

export default function Index() {
    return (
        <DefaultLayout>
            <section className="px-28 pb-10 bg-gray-50">
                <div className="flex justify-between place-items-center">
                    <div className="w-1/2">
                        <h1 className="text-red-500 font-bold">Join Us</h1>
                        <h1 className="text-5xl font-bold mt-7">
                            A Great Place to Receive Care
                        </h1>
                        <p className="text-gray-500 mt-7">Medical Recover is most focused in helping you
                            discover your most beauiful smile
                        </p>
                        <div className="mt-5">
                            <Button className="mr-2" type="primary">
                                Get Quote Now
                            </Button>
                            <Button className="mr-2" type="secondary">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/4WKmQ7g/hero.png" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10 -mt-10">
                    {features.map((f, i) => {
                        return (
                            <div className="bg-white shadow-lg py-6 px-3" key={i}>
                                <img src={f.image} alt={f.title} />
                                <h1 className="font-semibold mt-2">{f.title}</h1>
                                <div className="border-b-2 border-red-500 w-1/4 my-3" />
                                <p className="text-gray-400 text-sm w-3/4">{f.paragraph}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="px-28">
                <div className="grid grid-cols-4 text-center py-20">
                    {stats.map((s, i) => {
                        return (
                            <div>
                                <h1 className="text-red-500 text-3xl font-semibold">{s.count}</h1>
                                <h1>{s.title}</h1>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-between py-20">
                    <div className="w-1/2">
                        <div className="border-t-4 border-red-500 w-1/5"></div>
                        <h1 className="text-4xl font-bold mt-10">Meet Our Experts</h1>
                        <p className="mt-5 w-3/4">Problems trying to resolve the conflict between
                            the two major realms of Classical physics:
                            Newtonian mechanics </p>
                        <div className="mt-5">
                            <a href="/" className="text-red-500 font-semibold ">Learn More ></a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/JtKx1TL/meet.png" alt="meet" />
                    </div>
                </div>
            </section>
            <section className="py-20 px-28 bg-green-50">
                <div>
                    <h4 className="text-red-500 font-bold">Pratice Advice</h4>
                    <h1 className="text-4xl font-bold mt-3">Our Departement</h1>
                    <p className="text-sm w-1/2 mt-6">Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="grid grid-cols-3 py-10 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
            <section className="py-20 px-28 bg-white">
                <div>
                    <h4 className="text-red-500 font-bold">Pratice Advice</h4>
                    <h1 className="text-4xl font-bold mt-3">Leading Medicine</h1>
                    <p className="text-sm w-1/2 mt-6">Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics  </p>
                </div>
                <div className="grid grid-cols-3 px-10 py-20 gap-20">
                    <Review />
                    <Review />
                    <Review />
                </div>
            </section>
        </DefaultLayout>
    )
}
