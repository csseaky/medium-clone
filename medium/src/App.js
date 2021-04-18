import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import MorePosts from "./components/MorePosts";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Trending />
      <MorePosts />
      <Modal/>
    </div>
  );
}

export default App;
