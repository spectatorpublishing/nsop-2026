import NsopIllustration from "/nsop-illo.png";
import credits from "../data/credits";
import { EditorLetterCopy } from "../components/LetterFromEditor";

export default function Homepage() {
  return (
    <main className="homepage">
      <section className="homepage-intro">
        <h1>Welcome to Columbia!</h1>
      </section>

      <section className="homepage-letter" aria-labelledby="homepage-letter-title">
        <div className="homepage-letter-copy">
          <EditorLetterCopy />
        </div>
        <div className="homepage-illustration-link">
          <img src={NsopIllustration} alt="Illustration for NSOP 2026" className="homepage-illustration" />
        </div>
      </section>

      <section id="homepage-staff" className="homepage-staff" aria-labelledby="homepage-staff-title">
        <h2 id="homepage-staff-title">The Columbia Daily Spectator staff who made this issue possible</h2>
        <div className="homepage-staff-grid">
          {Object.entries(credits).map(([section, members]) => (
            <div className="homepage-staff-column" key={section}>
              <h3>{section}</h3>
              {members.map(({ name, role }) => <p key={name}>{name}, {role}</p>)}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}