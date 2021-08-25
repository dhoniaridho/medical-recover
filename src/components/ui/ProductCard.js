import Button from "./Button";
import * as Ai from 'react-icons/ai'

export default function ProductCard() {
    return (
        <div className="bg-white">
            <div className="">
                <div className="py-0.5 px-1 text-white text-sm font-semibold bg-red-500 m-3 absolute">
                    SALE
                </div>
                <img className="w-full" src="https://i.ibb.co/jbJ7mcz/dep-1.png" alt="dept-1" />
                <div className="-mt-16 flex place-items-center justify-center bg-transparent z-10">
                    <div className="bg-white mx-1 rounded-full p-2">
                        <Ai.AiOutlineHeart className="text-xl" />
                    </div>
                    <div className="bg-white mx-1 rounded-full p-2">
                        <Ai.AiOutlineShoppingCart className="text-xl" />
                    </div>
                    <div className="bg-white mx-1 rounded-full p-2">
                        <Ai.AiOutlineEye className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="p-4">
                    <div className="flex justify-between my-3">
                        <h5 className="text-red-500 font-semibold">Painless procedures</h5>
                        <div className="bg-gray-900 text-white rounded-full px-3 py-1 text-sm flex place-items-center flex-row"><Ai.AiTwotoneStar className="text-yellow-400" /><h3 className="ml-1">4.9</h3></div>
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
    )
}