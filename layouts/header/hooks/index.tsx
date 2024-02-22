import { useEffect, useState, useRef, useMemo, useCallback } from 'react'

const useMenuAction = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const handleClickListMenu = useCallback(() => {
    setOpenMenu(!isOpenMenu)
  }, [isOpenMenu])

  useEffect(() => {
    console.log(isOpenMenu)
  },[isOpenMenu])

  return {
    handleClickListMenu,
    isOpenMenu
  }
}

export default useMenuAction
