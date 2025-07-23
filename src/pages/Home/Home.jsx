import "./Home.scss";
import { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Contents from "../../components/Contents/Contents";



export default function Home() {
  useEffect(() => {
    async function readDatabase() {
      try {
        const result = await listPages();
        console.log(result, "ok");
      } catch (err) {
        console.log(err)
      }
    }

    readDatabase();
  }, []);

  return (
    <div className="home d-flex bg-light">
      <Nav />
      <div className="right d-flex flex-column">
        <Header />
        <Contents />
      </div>
    </div>
  );
}
