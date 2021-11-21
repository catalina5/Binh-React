import React from 'react'
import Checkbox from 'src/components/Checkbox/Checkbox'
import * as S from './cart.style.js'

export default function Cart() {
	return (
		<div className="container">
			<div>
				<S.ProductHeader>
					<S.ProductHeaderCheckbox>
						<Checkbox />
					</S.ProductHeaderCheckbox>
					<S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
					<S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
					<S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
					<S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
					<S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
				</S.ProductHeader>
				<S.ProductSection>
					<S.CartItem>
						<S.CartItemCheckbox>
							<Checkbox />
						</S.CartItemCheckbox>
						<S.CartItemOverview>
							<S.CartItemOverviewImage to="">
								<img src="https://cf.shopee.vn/file/0c6b05420dd5d32f15ccbc212796fe3a_tn"">
							</S.CartItemOverviewImage>
						</S.CartItemOverview>
					</S.CartItem>
				</S.ProductSection>
			</div>
		</div>
	)
}
