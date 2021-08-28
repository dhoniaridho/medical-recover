import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="grid md:grid-cols-6 py-20 text-left px-5 sm:px-10 md:px-28">
                <div>
                    <h3 className="font-bold mb-5">Company Info</h3>
                    <ul className="font-semibold">
                        {companyInfo.map((inf, i) => 
                            <li key={i} className="my-2">
                                {inf.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-5">Legal</h3>
                    <ul className="font-semibold">
                        {companyInfo.map((inf, i) => 
                            <li key={i} className="my-2">
                                {inf.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-5">Features</h3>
                    <ul className="font-semibold">
                        {companyInfo.map((inf, i) => 
                            <li key={i} className="my-2">
                                {inf.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-5">Resources</h3>
                    <ul className="font-semibold">
                        {companyInfo.map((inf, i) => 
                            <li key={i} className="my-2">
                                {inf.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="col-span-2">
                    <h3 className="font-bold mb-2">Get In Touch</h3>
                    <ul className="font-semibold">
                        {companyInfo.map((inf, i) => 
                            <li key={i} className="my-2">
                                {inf.name}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="flex justify-between bg-gray-100 px-5 md:px-28">
                <div className="h-16 flex place-items-center text-sm">
                    <p className="whitespace-nowrap">Coded by <a className="text-red-500" href="http://dhoniaridho.vercel.app" target="_blank" rel="noreferrer">dhoniaridho</a></p>
                </div>
                <div className="h-16 bg-gray-100 flex place-items-center md:px-28">
                    <ul className="flex text-red-500  md:text-xl">
                        <li className="mx-2">
                            <FaFacebook />
                        </li>
                        <li className="mx-2">
                            <FaInstagram />
                        </li>
                        <li className="mx-2">
                            <FaTwitter />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

const companyInfo = [
    {
        name: 'About Us',
        path: '/about',
    },
    {
        name: 'Careers',
        path: '/careers',
    },
    {
        name: 'Blog',
        path: '/blog',
    },
]