import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

// import { VueResponsiveComponents } from "./localutils.js";

import FPortfolioWall from "./components/FPortfolioWall.js";
import FPortfolioTile from "./components/FPortfolioTile.js";
import DirtyStyleOverriderHack from "./components/DirtyStyleOverriderHack.js"


fachwerk({
  title: "Oliver Maaker",
  components: {
    FPortfolioTile: FPortfolioTile,
    FPortfolioWall: FPortfolioWall,
    csshack: DirtyStyleOverriderHack,
  },
  edit: "none",
  pager: "none",
  menu: "hide",
  type: "slides",
  typebutton: "false",
  src: "./portfolio.md",
  style: {"--background":"var(--lightgray)"},
  // utils: VueResponsiveComponents
})