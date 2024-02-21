import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export default function NavBar() {
  /*   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; */

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ]; // EXEMPLO PARA MENU TER ITENS PARA DEMO

  return (
    <>
      <nav className="w-full h-full bg-gray-800 flex items-center justify-between">
        <div className="flex items-center pl-4">{/* Your other navbar content */}</div>
        <div className="flex items-center pr-4">
          {/* <button className="text-white">PERFIL</button> */}
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()} className="text-white cursor-pointer">
              <Space>PERFIL</Space>
            </a>
          </Dropdown>
        </div>
      </nav>
    </>
  );
}
