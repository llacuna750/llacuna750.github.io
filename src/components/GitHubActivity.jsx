import { useEffect, useMemo, useState } from 'react'

const contributionLevels = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

function GitHubActivity({ username }) {
  const [calendar, setCalendar] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadCalendar() {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}github-contributions.json`,
          { signal: controller.signal },
        )

        if (!response.ok) throw new Error('Contribution data is unavailable')

        const data = await response.json()
        if (!Array.isArray(data.weeks)) throw new Error('Invalid contribution data')

        setCalendar(data)
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('unavailable')
      }
    }

    loadCalendar()
    return () => controller.abort()
  }, [])

  const days = useMemo(
    () => calendar?.weeks.flatMap((week) => week.contributionDays) ?? [],
    [calendar],
  )

  return (
    <section
      className="content-section activity-section"
      id="activity"
      aria-labelledby="activity-title"
    >
      <div className="section-wrap">
        <div className="section-intro activity-heading">
          <div>
            <p className="eyebrow">GitHub / Contributions</p>
            <h2 id="activity-title">A year of learning by building.</h2>
          </div>
          <a
            className="text-link"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            @{username} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={`activity-card ${status}`} aria-live="polite">
          {status === 'loading' && (
            <p className="activity-summary">Loading GitHub contributions…</p>
          )}
          {status === 'unavailable' && (
            <p className="activity-summary">
              The contribution calendar is temporarily unavailable. Visit the GitHub profile to view it.
            </p>
          )}
          {status === 'ready' && (
            <>
              <p className="activity-summary">
                {calendar.totalContributions} contributions in the last year
              </p>
              <div
                className="activity-grid"
                aria-label={`${calendar.totalContributions} GitHub contributions in the last year`}
                role="img"
              >
                {days.map((day) => (
                  <span
                    className={`activity-day level-${contributionLevels[day.contributionLevel] ?? 0}`}
                    key={day.date}
                    title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount === 1 ? '' : 's'}`}
                  />
                ))}
              </div>
              <p className="activity-caption">
                Each square represents one day. This calendar refreshes daily from GitHub’s public contribution data.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default GitHubActivity
