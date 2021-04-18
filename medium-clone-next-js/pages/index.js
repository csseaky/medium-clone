import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import MorePosts from "../components/MorePosts";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Trending />
      <MorePosts />
      <Modal />
    </div>
  );
}
