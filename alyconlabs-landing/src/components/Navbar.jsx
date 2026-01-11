import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import vista_logo from "../assets/Vista_Logos/logo-svg-white.svg";
import vista_logo_black from "../assets/Vista_Logos/black-svg.svg";

export default function Navbar({ isDark, setIsDark }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur border-b ${
        isDark
          ? "bg-black/80 border-white/10 text-white"
          : "bg-white/80 border-black/10 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 text-xl font-semibold tracking-tight"
        >
          <img
            src={isDark ? vista_logo_black : vista_logo}
            alt="Alcyon Labs Logo"
            className="h-8 w-8"
          />
          Alcyon<span className="font-bold">Labs</span>
        </button>

        {/* Nav actions */}
        <div className="flex items-center gap-6 text-sm">
          <button onClick={() => handleNavClick("projects")}>
            View Projects
          </button>
          <button onClick={() => handleNavClick("about")}>About Us</button>
          <button onClick={() => handleNavClick("connect")}>Contact Us</button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition ${
              isDark
                ? "bg-white/10 hover:bg-white/20"
                : "bg-black/10 hover:bg-black/20"
            }`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
