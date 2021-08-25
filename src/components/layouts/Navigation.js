import { Link } from "react-router-dom"

export default function Navigation () {
    return (
        <header>
            <nav className="px-20">
                <div className="h-20 flex justify-between place-items-center">
                    <div className="w-1/2 flex justify-center h-16">
                        <div>
                            <h3 className="text-3xl font-bold">MedicalRecov</h3>
                        </div> 
                        <ul className="flex">
                            {menus.map((menu, i)=> {
                                return(
                                    <li className="mx-2" key={i}>
                                        <Link to={menu.path}>
                                            {menu.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="w-1/2">
                            test
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
        path: '/',
        name: 'Home',
        exact: true
    },
    {
        path: '/',
        name: 'Home',
        exact: true
    },
    {
        path: '/',
        name: 'Home',
        exact: true
    },
]