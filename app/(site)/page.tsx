import Image from 'next/image';
import { getFixtures, getNews } from '../../lib/data';

export default async function HomePage() {
  const [fixtures, news] = await Promise.all([
    getFixtures(),
    getNews()
  ]);

  return (
    <div className="grid">
      <section className="card" style={{ gridColumn: '1 / -1' }}>
        <div className="hero">
          <div>
            <h1 style={{ marginTop: 0 }}>Welcome to Football Hub</h1>
            <p style={{ opacity: .9 }}>Your home for fixtures, teams, and the latest news across the league.</p>
            <div style={{ marginTop: 12 }}>
              <span className="badge">Live · Updated hourly</span>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 160 }}>
            <Image src="/images/hero-ball.png" alt="Football" fill priority sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Upcoming Fixtures</h2>
        <div className="table">
          {fixtures.map((f, i) => (
            <div key={i} className="row">
              <div>{new Date(f.date).toLocaleDateString()}</div>
              <div style={{ fontWeight: 700 }}>{f.home} vs {f.away}</div>
              <div>{f.venue}</div>
              <div>{f.time}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ gridColumn: 'span 2' }}>
        <h2 className="section-title">Latest News</h2>
        <div className="table">
          {news.map((n, i) => (
            <div key={i} className="row">
              <div style={{ fontWeight: 700 }}>{n.title}</div>
              <div style={{ opacity: .9 }}>{n.summary}</div>
              <div className="badge">{new Date(n.date).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      </section>

      <aside className="card">
        <h2 className="section-title">Quick Links</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li><a href="/teams">Teams</a></li>
          <li><a href="/fixtures">Fixtures</a></li>
          <li><a href="/news">News</a></li>
        </ul>
      </aside>
    </div>
  );
}
