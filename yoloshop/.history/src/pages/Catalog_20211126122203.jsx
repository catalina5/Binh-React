import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'
import colors from '../assets/fake-data/product-color'
import category from '../assets/fake-data/category'
import Checkbox from '../components/Checkbox'
import size from '../assets/fake-data/product-size'
import Button from '../components/Button'
// import { isTSEnumMember } from '@babel/types'

const Catalog = () => {
	const initFilter = {
		category: [],
		color: [],
		size: []
	}

	const productList = productData.getAllProducts()

	const [products, setProducts] = useState(productList)

	const [filter, setFilter] = useState(initFilter)
	const filterSelect = (type, checked, item) => {
		if (checked) {
			switch (type) {
				case 'CATEGORY':
					setFilter({
						...filter,
						category: [...filter.category, item.categorySlug]
					})
					break
				case 'COLOR':
					setFilter({ ...filter, color: [...filter.color, item.color] })
					break
				case 'SIZE':
					setFilter({ ...filter, size: [...filter.size, item.size] })
					break
				default:
			}
		} else {
			switch (type) {
				case 'CATEGORY':
					const newCategory = filter.category.filter(
						e => e !== item.categorySlug
					)
					setFilter({ ...filter, category: newCategory })
					break
				case 'COLOR':
					const newColor = filter.color.filter(e => e !== item.color)
					setFilter({ ...filter, color: newColor })
					break
				case 'SIZE':
					const newSize = filter.size.filter(e => e !== item.size)
					setFilter({ ...filter, size: newSize })
					break
				default:
			}
		}
	}
	return (
		<Helmet title="Sản phẩm">
			{console.log(filter)}
			<div className="catalog">
				<div className="catalog__filter">
					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">
							Danh muc sản phẩm
						</div>
						<div className="catalog__filter__widget__content">
							{category.map((item, index) => (
								<div
									className="catalog__filter__widget__content__item"
									key={index}
								>
									<Checkbox
										label={item.display}
										onChange={input =>
											filterSelect('CATEGORY', input.checked, item)
										}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">Màu sắc</div>
						<div className="catalog__filter__widget__content">
							{colors.map((item, index) => (
								<div
									className="catalog__filter__widget__content__item"
									key={index}
								>
									<Checkbox
										label={item.display}
										onChange={input => filterSelect('COLOR', input.check, item)}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">Kích cỡ</div>
						<div className="catalog__filter__widget__content">
							{size.map((item, index) => (
								<div
									className="catalog__filter__widget__content__item"
									key={index}
								>
									<Checkbox
										label={item.display}
										onChange={input => filterSelect('SIZE', input.check, item)}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__content">
							<Button size="sm">Xóa bộ lọc</Button>
						</div>
					</div>
				</div>
				<div className="catalog__content">
					<Grid col={3} mdCol={2} smCol={1} gap={20}>
						{products.map((item, index) => (
							<ProductCard
								key={index}
								img1={item.image01}
								img2={item.image02}
								name={item.title}
								price={Number(item.price)}
								old_price={Number(item.old_price)}
								slug={item.slug}
							/>
						))}
					</Grid>
				</div>
			</div>
		</Helmet>
	)
}

export default Catalog