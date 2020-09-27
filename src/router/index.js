import Auth from '../view/auth/Auth'
import View from '../view'
import Info from '../view/info'
import Product from '../view/product'
import Authority from '../view/authority'

const viewRouteList = [
  {
    path: '/view/info',
    component: Info,
    exact: true,
  },
  {
    path: '/view/product',
    component: Product,
    exact: true,
  },
  {
    path: '/view/authority',
    component: Authority,
    exact: true,
  },
  {
    path: '/view',
    redirect: '/view/info',
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