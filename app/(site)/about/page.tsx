export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <section className="card">
      <h1 className="section-title">About Football Hub</h1>
      <p>Football Hub is a lightweight site showcasing fixtures, teams, and news with a clean design that deploys seamlessly to Vercel.</p>
      <p>Data is loaded from static JSON and can be easily replaced with your own content or an API.</p>
    </section>
  );
}
