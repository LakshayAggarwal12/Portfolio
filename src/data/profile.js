/**
 * START HERE. This is the one file that holds your contact details.
 *
 * - Anything left as `null` shows up as a clearly marked "pending" placeholder
 *   (hero, contact, footer) instead of a dead link.
 * - Optional items (`leetcode`, `resume`) are simply hidden while they are `null`.
 * - `email` is a plain address, not a mailto: link.
 */
export const profile = {
  name: 'Lakshay Aggarwal',
  brand: 'Lakshay.A',
  links: {
    github: 'https://github.com/LakshayAggarwal12',
    linkedin: null, // e.g. 'https://www.linkedin.com/in/your-handle'
    email: null, // e.g. 'you@example.com'
    leetcode: null, // optional, e.g. 'https://leetcode.com/u/your-handle'
    resume: null, // optional, e.g. '/resume.pdf' (put the file in /public) or a Drive link
  },
}

export const mailto = (email) => (email ? `mailto:${email}` : null)

/** Short, readable form of a URL for display: https://github.com/x/ -> github.com/x */
export const display = (url) => (url ? url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : null)
