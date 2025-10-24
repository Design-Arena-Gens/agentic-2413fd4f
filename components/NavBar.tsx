"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/teams', label: 'Teams' },
  { href: '/fixtures', label: 'Fixtures' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' }
];

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">
          <span className="brand-badge" />
          <span>Football Hub</span>
        </div>
        <div className="links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
