export default {
  description: `
    Zoom icon.
    <f-menu-icon />
    <p />
  `,
  props: {
    fill: { default:"white", type: String }
  },
  template: `
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- <rect width="16" height="16" fill="white"/> -->
    <path d="M14 14L11 11" :stroke="fill" stroke-width="2" stroke-linecap="round"/>
    <circle cx="7" cy="7" r="5" :stroke="fill" stroke-width="1.5"/>
    <path d="M7 9V5" :stroke="fill" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M5 7H9" :stroke="fill" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `
};
