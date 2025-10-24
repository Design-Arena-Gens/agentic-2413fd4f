export const metadata = { title: 'Fixtures' };

export default async function FixturesPage() {
  const { getFixtures } = await import('../../../lib/data');
  const fixtures = await getFixtures();
  return (
    <section className="card">
      <h1 className="section-title">Fixtures</h1>
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
  );
}
