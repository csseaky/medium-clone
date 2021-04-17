import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import MorePosts from "./components/MorePosts";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Trending />
      <MorePosts />
    </div>
  );
}

export default App;
