export default function NavBar() {
  /*   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; */

  //TODO- Criar o navbar e todos os componentes novamente, tentando usando o Mantine, mas em busca de um UI LIB que tenho componentes prontos e simples de usar

  return (
    <>
      <nav className="w-full h-full bg-gray-800 flex items-center justify-between">
        <div className="flex items-center pl-4">{/* Your other navbar content */}</div>
        <div className="flex items-center pr-4">
          <button>PERFIL</button>
        </div>
      </nav>
    </>
  );
}
