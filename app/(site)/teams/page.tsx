export const metadata = { title: 'Teams' };

export default async function TeamsPage() {
  const { getTeams } = await import('../../../lib/data');
  const teams = await getTeams();
  return (
    <section className="card">
      <h1 className="section-title">Teams</h1>
      <div className="table">
        {teams.map((t, i) => (
          <div key={i} className="row">
            <div style={{ fontWeight: 700 }}>{t.name}</div>
            <div>Founded {t.founded}</div>
            <div>{t.stadium}</div>
            <div className="badge">Mgr: {t.manager}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
