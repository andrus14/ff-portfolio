import {Css, goto} from "https://designstem.github.io/fachwerk/fachwerk.js";
import { ResponsiveDirective } from "../localutils.js";

export default {
  props: {
    image:      { default: "./images/example.jpg", type: String, description: "url to image" },
    title:      { default: "Title", type: String, description: "project title"  },
    description: {default:'', type:String, description: "short description"},
    // tint:       { default: 0.33, type:[String, Number], description: "darkened overlay" },
    dark:       { default: false, type: Boolean, description: "todo"},
    important:  { default: false, type: Boolean, description: "increases title"},
    // cols:       { default: '1', type:[String, Number], description: "defines number of columns this tile takes" },
    // rows:       { default: '1', type:[String, Number], description: "defines number of rows this tile takes" },
    target:     { default: '', type:String, description: "Link to content section" },
  },
  // data: () => ({
  //   foo: "bar"
  // }),
  mixins: [Css],
  directives: {
    responsive: ResponsiveDirective
  },
  methods: {goto},
  // computed: {
  //   compGridArea(){
  //     const areaMap = {
  //       wide: `span ${this.rows} / span ${this.cols}`,
  //       narrow: `span ${this.rows} / 1fr`
  //     }
  //     if( window.innerWidth <= 800){
  //       return areaMap.narrow;
  //     } else {
  //       return areaMap.wide;
  //     }
  //   }
  // },
  cssprops: {
    "--tint": {
      default: "0.33",
      description: "Define overlay opacity"
    },
    "--spancols": {
      default: "1",
      description: "Span columns"
    },
    "--spanrows": {
      default: "1",
      description: "Span rows"
    },
  },
  template: `<div 
    class="f-wall__tile"
    v-responsive="{ 'f-wall__tile--small' : el => el.width <= 800, 'f-wall__tile--tiny' : el => el.width <= 600 }"
  >
    <div class="f-wall__tile-wrapper" v-on:click="goto(target)">
      <div :style="{'background-image': 'url('+image+')'}" class="f-wall__tile-bg"></div>
      <div class="f-wall__tile-overlay" :style="{'opacity': 'var(--tint)'}"></div>
      <div class="f-wall__tile-content">
        <h4 class="f-wall__tile-content__title" :style="{'background-color': important ? 'var(--red)' : 'none'}">{{ title }}</h4>
      </div>
    </div>
  </div>
  `,
  css: `
    .f-wall__tile {
      grid-area: span var(--spanrows) / span var(--spancols);
    }
    .f-wall__tile--small {
      grid-area: span var(--spanrows) / span 1;
    }

    .f-wall__tile-wrapper {
      position:relative;
      width:100%; height:100%; 
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      min-height:200px;
    }
    .f-wall__tile-wrapper > * {
      position:absolute;
    }
    h4 {
      color:var(--white);
    }
    .f-wall__tile-bg {
      position:absolute;
      width:100%; height:100%; 
      background-size:cover; 
      background-repeat: no-repeat; 
      background-position: center; 
      background-clip: border-box;
      transition: inherit;
    }
    .f-wall__tile-overlay {
      position:absolute; 
      width:100%; height:100%; 
      background:var(--darkblue); 
      mix-blend-mode:multiply;
    }
    .f-wall__tile-content {
      padding: 2vmin;
    }
    .f-wall__tile-content__title{
      text-shadow: 0 0.1ch 0.1ch hsla(0, 0%, 0%, 0.35);
      font-style: italic;
      font-weight:500;
      padding:0.75ch 1ch;
    }
    .f-wall__tile:hover {
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
    .f-wall__tile:hover .f-wall__tile-bg {
        transform: scale(1.05);
        transition: inherit;
    }
  `
}
