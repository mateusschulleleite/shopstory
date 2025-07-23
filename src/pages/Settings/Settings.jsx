import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import "./Settings.scss";

export default function Settings() {
  return (
    <div className="settings d-flex bg-light">
        <Nav />
        <div className="right d-flex flex-column">
            <Header />
        </div>
    </div>
  )
}
