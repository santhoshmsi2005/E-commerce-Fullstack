import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/Product/ProductCard'
import { getAllProducts } from '../../api/ProuductApi'
import ProductCardSkeleton from './ProductCardSkeleton'

const ProductsSection = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts()
        setProducts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className='max-w-full bg-PageBackground py-10'>
      <div className="w-[90%] md:w-[96%] mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-Playfair font-bold">
            Shop Products
          </h1>

          <p className="text-slate-500 mt-2 font-DMSans">
            Immerse yourself in our curated collection of premium products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? [...Array(8)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
            : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection