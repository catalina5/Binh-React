import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import ProductRating from 'src/components/ProductRating/ProductRating'
import {
	formatK,
	formatMoney,
	getIdFromNameId,
	rateSale
} from 'src/utils/helper'
import { getProductDetail } from './productDetail.slice'
import * as S from './productDetail.style'

export default function ProductDetail() {
	const [product, setProduct] = useState()
	const dispatch = useDispatch()
	const { idProduct } = useParams()
	useEffect(() => {
		const realId = getIdFromNameId(idProduct)
		dispatch(getProductDetail(realId))
			.then(unwrapResult)
			.then(res => {
				setProduct(res.data)
			})
	}, [idProduct, dispatch])
	return (
		<div>
			{product && (
				<div className="container">
					<S.ProductBriefing>
						<S.ProductImages>
							<S.ProductImageActive>
								<img src={product.image} alt="" />
							</S.ProductImageActive>
							<S.ProductImageSlider>
								<S.ProductIconPrev>
									<svg
										enableBackground="new 0 0 13 20"
										viewBox="0 0 13 20"
										x={0}
										y={0}
										className="shopee-svg-icon icon-arrow-left-bold"
									>
										<polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
									</svg>
								</S.ProductIconPrev>
								{product.images.map((image, index) => (
									<S.ProductImage key={index}>
										<img src={image} alt="" />
									</S.ProductImage>
								))}
								<S.ProductIconNext>
									<svg
										enableBackground="new 0 0 13 21"
										viewBox="0 0 13 21"
										x={0}
										y={0}
										className="shopee-svg-icon icon-arrow-right-bold"
									>
										<polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
									</svg>
								</S.ProductIconNext>
							</S.ProductImageSlider>
						</S.ProductImages>
						<S.ProductMeta>
							<S.ProductTitle>{product.name}</S.ProductTitle>
							<S.ProductMeta1>
								<S.ProductRating>
									<span>{product.rating}</span>
									<ProductRating rating={product.rating} />
								</S.ProductRating>
								<S.ProductSold>
									<span>{formatK(product.sold)}</span>
									<span>đã bán</span>
								</S.ProductSold>
							</S.ProductMeta1>
							<S.ProductPrice>
								<S.ProductPriceOriginal>
									đ{formatMoney(product.price_before_discount)}
								</S.ProductPriceOriginal>
								<S.ProductPriceSale>
									đ{formatMoney(product.price)}
								</S.ProductPriceSale>
								<S.ProductPriceSalePercent>
									{rateSale(product.price_before_discount, product.price)} giảm
								</S.ProductPriceSalePercent>
							</S.ProductPrice>
						</S.ProductMeta>
					</S.ProductBriefing>
				</div>
			)}
		</div>
	)
}