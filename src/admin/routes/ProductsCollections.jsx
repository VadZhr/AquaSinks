import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LinkAddNew from '../components/linkAddNew'
import { getAllProducts, productsFiltering } from '../features/product/product.Slice'
import { useDispatch, useSelector } from 'react-redux'
import SkeletonLoading from '../components/skeletonLoading'
import { getCategoryPage } from '../features/category/categorySlice'



export default function ProductsCollections() {
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.productSlice.allProducts)
    const allCategories = useSelector(state => state.categorySlice.allCategories)
    const products = useSelector(state => state.productSlice)
    const [filter, setFilter] = useState('')
    
    useEffect(() => {
        dispatch(getAllProducts()).then(data => console.log(data))
        dispatch(getCategoryPage()).then(data => console.log(data))        
    }, [])

    function filterProducts(filterName){
        dispatch(productsFiltering(filterName))
    }

    return (
        <>
            {products.isLoading ?
                <SkeletonLoading /> :
                <section className="products-collection" >
                    <select name="" id="" onChange={(e) => filterProducts(e.target.value)}>
                        <option selected disabled hidden>Выберите Категорию</option>
                        <option value={''}>Все продукты</option>
                        {allCategories.map(el => <option key={el.id} value={el.id}>{el.categoryName}</option>)}
                    </select>
                    <div className="products">
                        {allProducts.length > 0 && allProducts?.map((element, i) => (
                            <Link key={i} className="products-card" to={`/admin/products/${element._id}`}>
                                <h1>{element.productName}</h1>
                            </Link>
                        ))}
                    </div>
                </section>
            }
            <LinkAddNew toPage={'/products/'} />
        </>

    )
}
