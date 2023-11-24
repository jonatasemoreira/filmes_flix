import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCameraReels , BsSearch  } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BsCameraReels className="icon-logo"/> Filmes Flix
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BsSearch/>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
