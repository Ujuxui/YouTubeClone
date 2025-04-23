import React, { useEffect, useState } from "react";
import Header from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import VideoGrid from "../components/VideoGrid";
import SideBar from "../components/SideBar";
import SideBarCollapsed from "../components/SideBarCollapsed";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("http://localhost:8000/videos");
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header
        onSearch={setSearchTerm}
        toggleMenu={() => setMenuOpen((prev) => !prev)}
      />
      <div className="flex flex-col lg:flex-row">
        <div className="hidden xl:block fixed z-20">
          {menuOpen ? <SideBar /> : <SideBarCollapsed />}
        </div>
        <div
          className={`flex-1 md:mt-20 transition-all duration-300 w-full ${
            menuOpen ? "xl:ml-60" : "xl:ml-20"
          }`}
        >
          <div className="mt-20 px-4">
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          <div className="mt-4 px-4">
            <VideoGrid videos={filteredVideos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;