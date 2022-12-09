import Navbar from "../../components/navbar/navbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/rightbar";
import Leftbar from "../../components/leftbar/leftbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Rightbar />
        <Feed/>
        <Leftbar />
      </div>
    </>
  );
}