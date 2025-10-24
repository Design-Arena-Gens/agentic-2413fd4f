export const metadata = { title: 'News' };

export default async function NewsPage() {
  const { getNews } = await import('../../../lib/data');
  const news = await getNews();
  return (
    <section className="card">
      <h1 className="section-title">News</h1>
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
  );
}
