import Link from "next/link";
import { BsCart } from "react-icons/bs";

const links = [
  {
    label: "Sobre nosotros",
    route: "/sobre-nosotros",
  },
];

const Navigation = () => {
  return (
    <div className="flex items-center justify-between max-w-8xl bg-celestito px-6 pb-2 pt-4 md:pt-6">
      <Link href="/">
        <div className="flex-shrink-0">
          <img src="./apsj.png" alt="Logo" className="w-16 h-16 object-cover" />
        </div>
      </Link>

      <ul className="hidden md:flex gap-5 font-ubu mx-auto">
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              <div className="text-cerulean">{label}</div>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/cart">
        <div className="flex-shrink-0">
          <BsCart size={24} className="text-cerulean" />
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
