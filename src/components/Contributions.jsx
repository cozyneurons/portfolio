import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltWrapper from './TiltWrapper';

const GITHUB_USERNAME = 'AnkitaKumariii';

const RepoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
  </svg>
);

const ForkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  default: '#888',
};

const ContribCard = ({ repo, index }) => {
  const langColor = LANG_COLORS[repo.language] || LANG_COLORS.default;
  const orgName = repo.fork && repo.parent ? repo.parent.owner.login : repo.owner.login;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      style={{ display: 'block', height: '100%' }}
    >
      <TiltWrapper options={{ max: 15, scale: 1.03 }}>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="contrib-card"
        >
          <div className="contrib-card-header">
            <span className="contrib-repo-icon"><RepoIcon /></span>
            <span className="contrib-repo-name">{repo.name}</span>
            <span className="contrib-fork-icon"><ForkIcon /></span>
          </div>

          <p className="contrib-description">
            {repo.description || 'No description provided.'}
          </p>

          <div className="contrib-card-footer">
            <span className="contrib-owner">
              <RepoIcon />
              {orgName}
            </span>
            <div className="contrib-meta">
              {repo.language && (
                <span className="contrib-lang">
                  <span className="lang-dot" style={{ background: langColor }} />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="contrib-stars">
                  <StarIcon /> {repo.stargazers_count}
                </span>
              )}
            </div>
          </div>

          <span className="contrib-external"><ExternalIcon /></span>
        </a>
      </TiltWrapper>
    </motion.div>
  );
};

const INITIAL_VISIBLE = 3;

const Contributions = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const data = await res.json();

        // Get forked repos and fetch their parent details
        const forkedRepos = data.filter((r) => r.fork);
        const withParents = await Promise.all(
          forkedRepos.map(async (repo) => {
            try {
              const detail = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}`);
              const d = await detail.json();
              return { ...repo, parent: d.parent };
            } catch {
              return repo;
            }
          })
        );

        setRepos(withParents);
      } catch (err) {
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const visible = showAll ? repos : repos.slice(0, INITIAL_VISIBLE);

  return (
    <motion.section
      id="contributions"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container">
        <div className="contributions-header-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <h2 style={{ marginBottom: 0 }}>Contributions</h2>
            
            {/* Heart Doodle (Open Source Love) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              whileInView={{ opacity: 0.8, scale: 1, rotate: 10 }}
              transition={{ type: 'spring', duration: 1, delay: 0.5 }}
              style={{ position: 'absolute', right: '-45px', top: '-15px', color: '#ff4b4b' }}
            >
              <svg width="35" height="35" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 85 C 50 85, 15 55, 15 30 C 15 15, 30 10, 45 20 C 50 25, 50 25, 50 25 C 50 25, 50 25, 55 20 C 70 10, 85 15, 85 30 C 85 55, 50 85, 50 85 Z" />
              </svg>
            </motion.div>

            {/* Plus Doodle (Adding Value) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              whileInView={{ opacity: 0.5, scale: 1, rotate: -10 }}
              transition={{ type: 'spring', duration: 1, delay: 0.7 }}
              style={{ position: 'absolute', left: '-40px', bottom: '0px', color: 'var(--accent-color)' }}
            >
              <svg width="25" height="25" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                <path d="M 50 15 L 50 85 M 15 50 L 85 50" />
              </svg>
            </motion.div>
          </div>
          <p className="contributions-subtitle" style={{ marginTop: '1rem' }}>Open-source contributions and community involvement.</p>
        </div>

        {loading ? (
          <div className="contrib-loading">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="contrib-skeleton" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--accent-color)' }}>No forked repositories found.</p>
        ) : (
          <>
            <div className="contrib-grid">
              <AnimatePresence>
                {visible.map((repo, i) => (
                  <ContribCard key={repo.id} repo={repo} index={i} />
                ))}
              </AnimatePresence>
            </div>

            {repos.length > INITIAL_VISIBLE && (
              <div className="contrib-view-all">
                <button className="contrib-view-btn" onClick={() => setShowAll(!showAll)}>
                  <span>{showAll ? '↑ Show Less' : '↓ View All'}</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </motion.section>
  );
};

export default Contributions;
