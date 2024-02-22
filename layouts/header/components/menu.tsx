
// import * as type from '@constants/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import type { GetStaticProps, NextPage } from "next";
import * as types from '@constants/index'
import MenuItem from './menuItem'
import useMenuAction from '../hooks'
import classNames from 'classnames';

const Menu: NextPage<{ listMenu: types.MenuItems }> = ({ listMenu }) => {
  const {handleClickListMenu, isOpenMenu} = useMenuAction()
  return (
    <>
      <div className={classNames('flex cursor-pointer')}>
        <FontAwesomeIcon icon={faBars} onClick={handleClickListMenu}/>
        <div className={classNames('flex flex-row-reverse justify-center items-start absolute right-0 top-0 transition duration-300 ease-out h-full w-4/6 bg-menuItem', isOpenMenu ? 'translate-y-0' : 'translate-y-visible')}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faClose} onClick={handleClickListMenu}/>
            </li>
            {listMenu?.map((items ,index :number) => {
            return (
              <MenuItem key={`menu-idx-${index}`}  items={items} />
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
