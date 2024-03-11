import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/client", label: "client" },
  { href: "/query", label: "query" },
  { href: "/drinks", label: "drinks" },
];

const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 p-4">
      <div className="px-8">
        <Link href={"/"}>
          <button className="btn btn-accent">Nextjs</button>
        </Link>
        <ul className="menu menu-horizontal flex gap-3 capitalize md:ml-8">
          {links.map((link) => {
            return (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
