import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
      <Link to="/" className="font-serif italic text-xl tracking-tight">
        M.M.
      </Link>
      <div className="flex items-center gap-8 text-sm tracking-tight text-lead">
        <Link
          to="/work/c-cloud-b"
          className="hover:text-ink transition-colors"
          activeProps={{ className: "text-ink" }}
        >
          Work
        </Link>
        <a href="/#about" className="hover:text-ink transition-colors">
          About
        </a>
        <a href="mailto:hello@mounika.design" className="hover:text-ink transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}
