import DefaultLayout from "../components/layouts/DefaultLayout";
import Button from "../components/ui/Button";
import { features, stats } from "../content/home";


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
                    <h1 className="text-4xl font-bold">Our Departement</h1>
                    <p className="text-sm w-1/2 mt-6">Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="grid grid-cols-3 py-10">
                    <div className="bg-white">
                        <div className="">
                            <img src="https://i.ibb.co/jbJ7mcz/dep-1.png" />
                        </div>
                        <div>
                        <div className="p-4">
                        <div className="flex justify-between mt-3">
                            <h5 className="text-red-500 font-semibold">Painless procedures</h5>
                            <div className="bg-gray-900 text-white rounded-full px-3 py-1 text-sm">4.9</div>
                        </div>
                            <h3 className="text-3xl font-bold">Quick examination</h3>
                            <p className="text-sm my-3">We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.</p>
                            <div className="text-gray-600">15 Sales</div>
                            <div className="text-gray-400 flex font-bold"><h5>$16.48</h5><h5 className="text-green-700">$6.48</h5></div>
                        <Button className="rounded-full border-red-500 border mt-3">
                            Learn More
                        </Button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}
