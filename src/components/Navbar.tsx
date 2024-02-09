import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/workout", text: "Workout" },
    { to: "/profile", text: "Profile" },
  ];

  return (
    <nav className="w-full h-16 bg-slate-950 flex items-center justify-between px-4 my-4 rounded-lg">
      <h1 className="font-medium">Workout Organizer</h1>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink className="[&.active]:text-blue-500" to={link.to}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
