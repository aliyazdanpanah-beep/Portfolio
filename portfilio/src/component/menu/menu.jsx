import Nav from '../navbar/navbar';
import './menu.css'

const Menu = () => {
  return (
    <>
      <Nav />
      <div className="MenuIcon">
        <div className="MenuWrapper">
          <div className="MenuLine"></div>
          <div className="MenuLine"></div>
        </div>
      </div>
    </>
  );
}

export default Menu