import { useSelector } from "react-redux";
import { Icon, Label, Menu } from "semantic-ui-react";

function PrivatePublic() {
  const notlar = useSelector((notKayitlari) => notKayitlari);

  return (
    <div className="header">
      <Menu compact>
        <Menu.Item as="a">
          <Label as="a" color="red" ribbon>
            ÖZEL NOTLAR
          </Label>
          <Label color="red" floating>
            {notlar.length}
          </Label>
        </Menu.Item>
        <Menu.Item as="a">
          <Label as="a" color="grey" ribbon>
            GENEL NOTLAR
          </Label>
          <Label color="grey" floating>
            {notlar.length}
          </Label>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default PrivatePublic;
