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
    linkedin: 'https://www.linkedin.com/in/lakshay-aggarwal-dev',
    email: 'lakshaydev1205@gmail.com', 
    leetcode: 'https://leetcode.com/u/Lakshay_Aggarwal12', // optional, e.g. 'https://leetcode.com/u/your-handle'
    resume: '../public/resume.pdf'
  },
}

export const mailto = (email) => (email ? `mailto:${email}` : null)

/** Short, readable form of a URL for display: https://github.com/x/ -> github.com/x */
export const display = (url) => (url ? url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : null)
