import { useSelector } from "react-redux";
import { Icon, Label, Menu } from "semantic-ui-react";

function Header() {
  const notlar = useSelector(notKayitlari => notKayitlari);

  return (
    <div className='header'>
      <Menu compact>
        <Menu.Item as="a">
          <Label as="a" color="red" ribbon>
            NOTLARIM
            ({notlar.length})
          </Label>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;