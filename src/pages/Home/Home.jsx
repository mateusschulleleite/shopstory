import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import { FaPager } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router";

export default function Home({urls}) {
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
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex fs-5 align-items-center">
                    <FaPager />
                  </div>
                  <span>{item.urlPage}</span>
                </div>
                <Link to={`/editpage/${key}`} className="d-flex fs-5 align-items-center text-danger">
                  <LuPencil />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
