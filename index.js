import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

// import { VueResponsiveComponents } from "./localutils.js";

import FPortfolioWall from "./components/FPortfolioWall.js";
import FPortfolioTile from "./components/FPortfolioTile.js";



fachwerk({
  title: "Portfolio",
  components: {
    FPortfolioTile: FPortfolioTile,
    FPortfolioWall: FPortfolioWall
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