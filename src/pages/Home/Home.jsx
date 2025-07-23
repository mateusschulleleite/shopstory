import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router";
import { RiDeleteBin6Line, RiPagesLine } from "react-icons/ri";

export default function Home({ urls }) {
  return (
    <div className="home d-flex bg-light">
      <Nav />
      <div className="right d-flex flex-column">
        <Header />
        <div className="flex-grow-1 d-flex flex-column overflow-hidden pb-4">
          <h4 className="px-4 pt-4 mb-4">Páginas</h4>
          <ul
            className="px-4 d-flex flex-column gap-3 overflow-auto"
            style={{ maxHeight: "100%" }}
          >
            {urls.map((item, key) => (
              <li
                key={key}
                className="d-flex justify-content-between bg-white p-3 rounded-3"
              >
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex fs-5 align-items-center">
                    <RiPagesLine />
                  </div>
                  <span>{item.urlPage}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Link
                    to={`/editpage/${key}`}
                    className="d-flex fs-5 align-items-center text-danger"
                  >
                    <LuPencil />
                  </Link>
                  <div className="d-flex fs-5 align-items-center text-danger">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
