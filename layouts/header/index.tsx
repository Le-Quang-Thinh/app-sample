import Menu from './components/menu'
import {
  useRecoilValue
} from 'recoil';
import { menuState } from "@provides/recoilState";

function Header() {
  const listMenu = useRecoilValue(menuState);
  return (
    <header>
      <nav className="flex justify-between">
        <div>Lgo</div>
        <Menu listMenu={listMenu} />
      </nav>
    </header>
  );
}

export default Header
