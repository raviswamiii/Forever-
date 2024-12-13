import React from 'react'
import { Filters } from '../components/collectionComponents.jsx/Filters'
import { SearchBar } from '../components/collectionComponents.jsx/SearchBar'

export const Collection = () => {
  return (
    <div>
      <SearchBar/>
      <Filters/>
    </div>
  )
}
