import PillNav from "../naves/PillNav";
import logo from "../assets/HywgxSg0a-main.jpeg";
export default function Header() {
  return (
    <header className="w-full">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "cart", href: "/cart" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </header>
  );
}
