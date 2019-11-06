import {Css} from "https://designstem.github.io/fachwerk/fachwerk.js";
import { ResponsiveDirective } from "../localutils.js"

export default {
  mixins: [Css],
  directives: {
    responsive: ResponsiveDirective
  },
  cssprops: {
  // "--mobilecols": {
  //   default: "1",
  //   description: "Define columns for narrow layout"
  // },
  // "--rows": {
  //   default: "auto",
  //   description: "Define rows"
  // },
  },
  template: `
  <div  
    v-responsive="{ 'f-csshack--small' : el => el.width <= 800, 'f-csshack--tiny' : el => el.width <= 600 }"
    class="f-csshack"
   ></div>
  `,
  css: `
    
    .menu {
      // background: var(--darkgray);
      border-right: 1px solid var(--lightgray);
    }
    @media (max-width: 800px){
      section{
        padding: 0;
      }
      .cells {
        padding: 8vh 5vw !important;
      }
    }
  `
}
