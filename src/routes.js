import { Route, Switch } from 'react-router-dom'
import Home from './views'

const ROUTES = [
    {
        path: '/',
        key: 'index',
        component : Home,
        exact: true
    },
]
export default ROUTES

function RouteWithSubRoutes(route) {
    return(
        <Route 
            path={route.path}
            exact={route.exact}
            render={props=> <route.component {...props} routes={route.routes} /> }
        />
    )
}
export function RenderRoutes({routes}) {
    return(
        <Switch>
            {routes.map((route, i)=>  {
                return <RouteWithSubRoutes key={i} {...route} />
            })}
        </Switch>
    )
}