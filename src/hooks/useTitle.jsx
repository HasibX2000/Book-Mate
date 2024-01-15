import  { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - xShop`;
    },[title])
  return null
}

export default useTitle