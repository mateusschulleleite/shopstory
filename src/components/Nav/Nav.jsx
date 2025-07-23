import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import "./Nav.scss";
import { Link } from "react-router";
import Logo from "../Logo/Logo";
import { RiPagesLine } from "react-icons/ri";
import { LuCirclePlus } from "react-icons/lu";

export default function Nav() {
  return (
    <div className="nav d-flex flex-column justify-content-between p-4">
      <Logo />
      <nav className="flex-grow-1">
        <ul className="d-flex flex-column gap-3">
          <li>
            <Link to="/">
              <div className="d-flex align-items-center fs-5">
                <RiPagesLine />
              </div>
              <span className="fs-6">Páginas</span>
            </Link>
          </li>
          <li>
            <Link to="/newpage">
              <div className="d-flex align-items-center fs-5">
                <LuCirclePlus />
              </div>
              <span className="fs-6">Nova página</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav__settings">
        <Link to="/settings" className="d-flex gap-2 mb-2">
          <div className="d-flex align-items-center fs-5">
            <IoMdSettings />
          </div>
          <span className="fs-6">Configurações</span>
        </Link>
        <div className="d-flex gap-2">
          <div className="d-flex align-items-center fs-5">
            <IoIosLogOut />
          </div>
          <span className="fs-6">Sair</span>
        </div>
      </div>
    </div>
  );
}
