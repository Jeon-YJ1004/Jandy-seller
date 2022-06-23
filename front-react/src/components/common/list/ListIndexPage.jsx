import React from 'react'
import { useSelector } from 'react-redux'

function ListIndexPage() {
    const listIndex = useSelector((state) => state.category.selected);
  return (
    <div>ListIndexPage</div>
  )
}

export default ListIndexPage