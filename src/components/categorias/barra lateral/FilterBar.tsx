import React from 'react'
import Search from './secciones/Search'
import Filters from './secciones/Filters'
import FeaturedProducts from './secciones/FeaturedProducts'

export default function FilterBar() {
  return (
    <div className='w-[300px] font-bold'>
    <Search />
    <Filters />
    <FeaturedProducts/>
    </div>
  )
}
