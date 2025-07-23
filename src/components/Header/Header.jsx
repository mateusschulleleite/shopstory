import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header d-flex p-3 ps-4">
      <div className="d-flex w-25 position-relative">
        <div className="icon-search d-flex align-items-center fs-4 position-absolute top-50 translate-middle-y text-danger">
          <IoSearchOutline />
        </div>
        <div className="w-100">
          <input
            className="w-100 rounded-5 border-1 p-2 ps-5 border-danger"
            type="text"
            placeholder="Pesquise a página aqui..."
          />
        </div>
      </div>
    </header>
  );
}
