import * as Ai from 'react-icons/ai'

export default function Review() {
    return(
        <div>
        <div className="flex justify-center">
            <Ai.AiTwotoneStar className="text-yellow-400" />
            <Ai.AiTwotoneStar className="text-yellow-400" />
            <Ai.AiTwotoneStar className="text-yellow-400" />
            <Ai.AiTwotoneStar className="text-yellow-400" />
            <Ai.AiTwotoneStar className="text-yellow-400" />
        </div>
        <div className="mt-5">
        <p className="text-center w-3/4 mx-auto"> Slate helps you see
            how many more days
            you need to work to
            reach your financial
            goal for the month
            and year.
        </p>
        </div>
        <div className="flex mt-8 justify-center">
            <img className="object-scale-down" src="https://i.ibb.co/0nNjgxQ/testimonial-user-cover-202.png" alt="profile"/>
            <div className="mx-2">
                <h4 className="font-bold text-red-500">Regina Miles</h4>
                <h6>Designer</h6>
            </div>
        </div>
    </div>
    )
}