import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <header>
            <nav className="px 5 sm:px-10 md:px-28 bg-gray-50">
                <div className="h-20 flex justify-between place-items-center">
                    <div className="w-1/2 flex justify-around">
                        <div>
                            <h3 className="text-xl md:text-3xl font-bold">MedicalRecov</h3>
                        </div>
                        <ul className="hidden sm:flex place-items-center font-semibold">
                            {menus.map((menu, i) => {
                                return (
                                    <li className="mx-2" key={i}>
                                        <NavLink activeClassName="text-red-500" to={menu.path}>
                                            {menu.name}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="w-1/2 flex place-items-center justify-center">
                        <ul className="hidden sm:flex place-items-center font-semibold -mr-16">
                            <li className="mx-4">
                                <a href="/" className="text-red-500">Login</a>
                            </li>
                            <li className="mx-4">
                                <a href="/" className="bg-red-500 rounded-md text-white px-3 py-2 uppercase">Join Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const menus = [
    {
        path: '/',
        name: 'Home',
        exact: true
    },
    {
        path: '/product',
        name: 'Product',
        exact: true
    },
    {
        path: '/pricing',
        name: 'Pricing',
        exact: true
    },
    {
        path: '/contact',
        name: 'Contact',
        exact: true
    },
]