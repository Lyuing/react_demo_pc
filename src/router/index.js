import Auth from '../view/auth/Auth'
import View from '../view'
import Info from '../view/info'
import Product from '../view/product'

const viewRouteList = [
  {
    path: '/view/info',
    component: Info,
    exact: true,
  },
  {
    path: '/view',
    redirect: '/view/info',
    exact: true,
  },
  {
    path: '/view/product',
    component: Product,
    exact: true,
  },
]
const routeList = [
  {
    path: '/',
    component: Auth,
    exact: true,
  },
  {
    path: '/view',
    component: View,
    children: viewRouteList
  },
]
export { viewRouteList}
export default routeList;