import Link from "next/link";
import Card from "./Card";
const links = [
  {
    label: "Sobre nosotros",
    route: "/sobre-nosotros",
  },
];

const Navigation = () => {
  return (
    <div className="flex items-center justify-between max-w-8xl bg-celestito px-6 pb-2 pt-4 md:pt-6">
      <nav className="text-cerulean w-screen">
        <div className="flex gap-5">
          <Link className="font-ubu font-heading cursor-pointer" href="/">
            <img src="./agua-pura.png" className="w-24 h-24 object-cover" />
          </Link>
          <ul className="flex gap-5 font-ubu">
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
          <Link href="#"></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
