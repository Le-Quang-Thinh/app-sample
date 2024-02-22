
import * as type from '@constants/index'

function MenuItem({ items }: { items: type.MenuItem }) {
  return (
    <li key={`menu-id-${items.id}`} className="grou text-[22px] before:content-['Festivus']  font-sans p-1 relative hover:text-[#50d71e] cursor-pointer ">
      <p>{items.name}</p>
    </li>
  );
}

export default MenuItem;