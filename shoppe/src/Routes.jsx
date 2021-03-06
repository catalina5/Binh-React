import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Fallback from './components/Fallback/Fallback'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import NotFound from './pages/NotFound/NotFound'

const Home = lazy(() => import('./pages/Home/Home'))
const User = lazy(() => import('./pages/User/User'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))
const Login = lazy(() => import('./pages/Auth/Login/Login'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))

export default function Router() {
	return (
		<Routes>
			<Route
				path={path.home}
				element={
					<MainLayout>
						<Suspense fallback={<Fallback />}>
							<Home />
						</Suspense>
					</MainLayout>
				}
				// exact
			></Route>
			<Route
				path={path.productDetail}
				element={
					<MainLayout>
						<Suspense fallback={<Fallback />}>
							<ProductDetail />
						</Suspense>
					</MainLayout>
				}
				// exact
			></Route>
			<Route
				path={path.login}
				element={
					<UnAuthenticatedGuard>
						<RegisterLayout title="Đăng nhập">
							<Suspense fallback={<Fallback />}>
								<Login />
							</Suspense>
						</RegisterLayout>
					</UnAuthenticatedGuard>
				}
			></Route>
			<Route
				path={path.register}
				element={
					<UnAuthenticatedGuard>
						<RegisterLayout title="Đăng ký">
							<Suspense fallback={<Fallback />}>
								<Register />
							</Suspense>
						</RegisterLayout>
					</UnAuthenticatedGuard>
				}
			></Route>
			<Route
				path={path.user + '/*'}
				element={
					<AuthenticatedGuard>
						<MainLayout>
							<Suspense fallback={<Fallback />}>
								<User />
							</Suspense>
						</MainLayout>
					</AuthenticatedGuard>
				}
			/>

			<Route
				path={path.cart}
				element={
					<AuthenticatedGuard>
						<CartLayout>
							<Suspense fallback={<Fallback />}>
								<Cart />
							</Suspense>
						</CartLayout>
					</AuthenticatedGuard>
				}
			/>
			<Route path={path.notFound} element={<NotFound />}></Route>
		</Routes>
	)
}
