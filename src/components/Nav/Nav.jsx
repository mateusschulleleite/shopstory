import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import "./Nav.scss";
import { Link } from "react-router";
import { FaPager } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="nav d-flex flex-column justify-content-between p-5">
      <div>
        <h1 className="text-center fs-1">
          <b className="text-danger">Shop</b>Story
        </h1>
      </div>
      <nav className="flex-grow-1">
        <ul className="d-flex flex-column gap-3">
          <li>
            <Link to="/">
              <div className="d-flex align-items-center fs-4">
                <FaPager />
              </div>
              <span>Páginas</span>
            </Link>
          </li>
          <li>
            <Link to="/newpage">
              <div className="d-flex align-items-center fs-4">
                <FaPager />
              </div>
              <span>Nova página</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav__settings">
        <Link to="/settings" className="d-flex gap-2 mb-2">
          <div className="d-flex align-items-center fs-5">
            <IoMdSettings />
          </div>
          <span>Configurações</span>
        </Link>
        <div className="d-flex gap-2">
          <div className="d-flex align-items-center fs-5">
            <IoIosLogOut />
          </div>
          <span>Sair</span>
        </div>
      </div>
    </div>
  );
}
