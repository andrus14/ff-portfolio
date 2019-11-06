import {Css} from "https://designstem.github.io/fachwerk/fachwerk.js";
import { ResponsiveDirective } from "../localutils.js"

export default {
//   description: `
//   Displays a grid of \`f-portfolio-items\`

//   <f-portfolio-wall image="../images/example.jpg" style="min-height:500px; --cols:3">
//    <f-portfolio-tile image="../images/example.jpg" title="First item" cols="2" tint="0.5" />
//     <f-portfolio-tile image="../images/example.jpg" title="Second item" tint="0" />
//     <f-portfolio-tile image="../images/example.jpg" title="Third one" />
//   </f-portfolio-wall>
// `,
  // props: {
  //   cols: { default: '3', type: [String, Number] },
  //   rows: { default: 'auto', type: [String, Number] }
  // },
  // data: () => ({
  //   foo: "bar"
  // }),
  mixins: [Css],
  directives: {
    responsive: ResponsiveDirective
  },
  // computed: {
  //   compColumns(){
  //     const colMap = {
  //       wide : `repeat(${this.cols}, 1fr)`, 
  //       narrow : `repeat(1, 1fr)`
  //     }
  //     if( window.innerWidth <= 800){
  //       return colMap.narrow;
  //     } else {
  //       return colMap.wide;
  //       // return sizeMap[this.size] ? sizeMap[this.size] : sizeMap['narrow']
  //     }
  //   },
  //   compRows(){
  //     return `repeat(${this.rows}, 1fr)`;
  //   }
  // },
  cssprops: {
    "--height": {
      default: "auto",
      description: "Define height"
    },
    "--smallheight": {
      default: "auto",
      description: "Define height for narrow layout"
    },
    "--cols": {
      default: "3",
      description: "Define columns"
    },
    "--smallcols": {
      default: "2",
      description: "Define columns for narrow layout"
    },
    "--tinycols": {
      default: "1",
      description: "Define columns for narrow layout"
    },
    "--rows": {
      default: "auto",
      description: "Define rows"
    },
  },
  template: `
  <div  
    v-responsive="{ 'f-wall--small' : el => el.width <= 800, 'f-wall--tiny' : el => el.width <= 400 }"
    class="f-wall"
   >
  <!-- <div style="display:grid;" v-responsive="{ 'f-wall__small' : el => el.width <= 800 }"
  :style="{ gridTemplateColumns: compColumns, gridTemplateRows: compRows }"
   > -->
    <slot />
  </div>
  `,
  css: `
    .f-wall {
      display: grid;
      min-height: var(--height);
      grid-template-columns: repeat(var(--cols), 1fr);
      grid-template-rows: repeat(var(--rows), 1fr);
    }
    .f-wall--small {
      min-height: var(--smallheight);
      grid-template-columns: repeat(var(--smallcols), 1fr);
    }
    .f-wall--tiny {
      min-height: var(--tinyheight);
      grid-template-columns: repeat(var(--tinycols), 1fr);
    }
  `
}
