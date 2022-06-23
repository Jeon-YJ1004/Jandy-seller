import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemList } from '../../../reducers/categoryApi';
import ListSquare1x5 from './ListSquare1x5'

function ListIndexPage() {
  const dispatch = useDispatch();
  const listOptions = useSelector((state) => state.category.listfetchOptions);

  useEffect(() => {
    dispatch(fetchItemList(listOptions))
    console.log(listOptions);
  }, [dispatch, listOptions])
  
 

  return (
    <div>
    <div>{listOptions.categoryId}</div>
    <ListSquare1x5></ListSquare1x5>
    </div>
  )
}

export default ListIndexPage