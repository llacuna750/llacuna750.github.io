import { useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

function GitHubActivity({ username, colorScheme }) {
  const currentYear = new Date().getFullYear()
  const years = [currentYear, currentYear - 1, currentYear - 2]
  const [selectedYear, setSelectedYear] = useState(currentYear)

  return (
    <section
      className="content-section contribution-section"
      id="activity"
      aria-labelledby="activity-title"
    >
      <div className="section-wrap">
        <div className="activity-header">
          <h2 className="section-label" id="activity-title">Activity</h2>
          <div className="activity-actions">
            <div className="activity-year-toggle" role="group" aria-label="Choose contribution year">
              {years.map((year) => (
                <button
                  className={year === selectedYear ? 'active' : undefined}
                  type="button"
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  aria-label={`Show contribution activity for ${year}`}
                  aria-pressed={year === selectedYear}
                  title={`Show ${year} contribution activity`}
                >
                  {year}
                </button>
              ))}
            </div>
            <a
              className="activity-profile-link"
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>

        <GitHubCalendar
          className="github-calendar"
          username={username}
          blockSize={10}
          blockMargin={3}
          blockRadius={2}
          colorScheme={colorScheme}
          fontSize={12}
          showWeekdayLabels={['mon', 'wed', 'fri']}
          year={selectedYear}
        />
      </div>
    </section>
  )
}

export default GitHubActivity
