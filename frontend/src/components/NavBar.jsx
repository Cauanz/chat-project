export default function NavBar() {
  /*   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; */

  return (
    <>
      <nav className="w-full h-full bg-gray-800 flex items-center justify-between">
        <div className="flex items-center pl-4">{/* Your other navbar content */}</div>
        <div className="flex items-center pr-4">
          <button className="text-white">PERFIL</button>
        </div>
      </nav>
    </>
  );
}
