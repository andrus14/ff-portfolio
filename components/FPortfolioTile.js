import {Css, goto} from "https://designstem.github.io/fachwerk/fachwerk.js";
import { ResponsiveDirective } from "../localutils.js";
import { default as FModal } from "../components/FModal.js";
import { default as FZoomIcon } from "../components/FZoomIcon.js";

export default {
  props: {
    image:      { default: "./images/example.jpg", type: String, description: "url to image" },
    title:      { default: "Title", type: String, description: "project title"  },
    // description: {default:"", type:String, description: "short description"},
    // dark:       { default: false, type: Boolean, description: "todo"},
    hero:       { default:false, type:Boolean, description: "Can be used for larger headers" },
    important:  { default: false, type: Boolean, description: "important item - will be emphasized"},
    target:     { default: "", type:String, description: "Defines, what to show if clicked. Can open a modal to show bigger image or navigate to another section/project." },
  },
  data: () => ({
    isImage: false,
    hasTarget: false
  }),
  components: {
    FModal: FModal,
    FZoomIcon: FZoomIcon
  },
  mixins: [Css],
  directives: {
    responsive: ResponsiveDirective
  },
  beforeMount(){
    if(this.target.toString().length <= 1){
      return;
    } else {
      this.hasTarget = true;
      if( 
        this.target.includes(".jpg") || 
        this.target.includes(".png") || 
        this.target.includes(".gif") || 
        this.target.includes(".svg") 
      ){
        this.isImage = true;
      }
    }
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
    class="f-wall__tile" :class="hero ? 'hero' : ''"
    :style="hasTarget ? {'cursor': 'pointer'} : {'cursor':'initial'}"
    v-responsive="{ 'f-wall__tile--small' : el => el.width <= 800, 'f-wall__tile--tiny' : el => el.width <= 600 }"
  >
    <div class="f-wall__tile-wrapper" v-on:click="goto(target)">
      <div :style="{'background-image': 'url('+image+')'}" class="f-wall__tile-bg"></div>
      <div class="f-wall__tile-overlay"></div>
      
      <h4 class="f-wall__tile-title" :style="{'background-color': important ? 'var(--important)' : 'var(--wall-tile-title-background)'}">{{ title }}</h4>

      <div v-if="isImage" style="position:absolute; top:1em; right:1em; width:24px; height:24px;">
        <f-zoom-icon />
      </div>

      <f-modal v-if="isImage" :src="image" style="width:100%; height:100%;">
        <div style="position:absolute; z-index:5; width:100%; height:100%; background:hsla(30,0%,0%,0)">&nbsp;</div>
      </f-modal>

    </div>
  </div>
  `,
  css: `
    .f-wall__tile {
      grid-area: span var(--spanrows) / span var(--spancols);
    }
    .f-wall__tile--small {
      grid-area: span 1 / span 1;
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
      background:var(--wall-tile-overlay-color); 
      mix-blend-mode:multiply;
      opacity: var(--tint);
      transition: inherit;
    }
  
    .f-wall__tile-title{
      position:absolute;
      left:0;
      bottom:0.5em;
      text-shadow: 0 0.1ch 0.1ch hsla(0, 0%, 0%, 0.35);
      font-style: italic;
      font-weight:500;
      padding:0.75ch 1ch;
      color:var(--white);
    }
    .f-wall__tile:hover {
        transition: all 0.5s ease-in-out;
    }
    .f-wall__tile:hover .f-wall__tile-bg {
        transform: scale(1.025);
        transition: inherit;
    }
    .f-wall__tile:hover .f-wall__tile-overlay {
      opacity: 0;
      transition: inherit;
    }
    .f-wall__tile.hero .f-wall__tile-wrapper {
      display: flex;
      justify-content:center;
      align-items:center;
    }
    .f-wall__tile.hero .f-wall__tile-title {
      position:relative;
      background: none;
      font-size:400%;
      text-align: center;
      color:var(--white);
    }
  `
}
