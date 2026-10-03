import { SectionLabel } from '../components/SectionLabel'
import { education } from '../data/experience'
export function Education() {
  return (
    <section id="education" className="section">
      <div className="container ed-grid">
        <div className="ed-label">
          <SectionLabel>education</SectionLabel>
        </div>
        <div className="ed-main">
          <ul className="edu">
            {education.map((e) => (
              <li key={e.school} className="edu-row">
                <p className="mono edu-when">{e.when}</p>
                <div>
                  <h3 className="edu-school">{e.school}</h3>
                  <p className="edu-detail">{e.detail}</p>
                </div>
                <p className="mono edu-score">{e.score}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
