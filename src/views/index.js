import DefaultLayout from "../components/layouts/DefaultLayout";
import Button from "../components/ui/Button";
import { features } from "../content/home";


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
            <section className="grid grid-cols-4 px-28">
                <div>
                    
                </div>
            </section>
        </DefaultLayout>
    )
}
