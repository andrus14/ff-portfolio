
| chapter: Example layouts
| section: Example layout 1
| rows: 50vh auto
| height: 100vh
| 1
| 2
| 3


<center>

  # *Fredi von Fachwerk*
  
  This is a **small** portfolio-like <b>mockup-site</b> to test out <a href="https://designstem.github.io/fachwerk/" target="_blank"><var>Fachwerk</var></a> framework as possible portfolio platform.<br>There are a couple of <var>special components</var> that help you present images separately or in a tiled grid.

</center>

-

<f-portfolio-wall style="--height:100vh; --smallheight:1000px; --cols:3; --smallcols:2; ">
  <f-portfolio-tile 
    title="Opens a bigger image" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_900/v1574950786/00_background-turntable_eldgzq.jpg" 
    important 
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/h_1080,q_auto/v1574950786/00_background-turntable_eldgzq.jpg" 
    style="--spancols:2; --spanrows:2; --tint:0.5;"
  />
  <f-portfolio-tile 
    title="Goes to project page" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574947419/novomesto_hplrsm.jpg"
    target="Project 1"
    style="--tint:0.2;" 
  />
  <f-portfolio-tile 
    title="Screenshot of Fachwerk" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574947423/fachwerk_iyemq5.jpg" 
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/v1574947423/fachwerk_iyemq5.jpg" 
    style="--spanrows:2; --tint:0.5"
  />
  <f-portfolio-tile 
    title="Project 2 with longer name" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574947422/frankfurt-rullid_r8gse8.jpg" 
    target="Project 2" 
    style="--tint:0.75"
  />
  <f-portfolio-tile 
    title="Another project" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_400/v1574947419/amsterdam_vn2qvv.jpg" 
    target="etc" 
  />
  <f-portfolio-tile 
    title="This is important!" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574947419/color-sphere_mxc79o.jpg"
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/v1574947419/color-sphere_mxc79o.jpg" 
    style="--spancols:1;"
    important 
  />
</f-portfolio-wall>

-

<center style="min-height:50vh;">

  ### A tip

  If you <var>click the tiles</var>, a bigger image opens in a modal window or you will navigate to project page with more information.
  All the content comes from <var>Markdown</var> file (or files, if you prefer so). See, how to <a href="https://designstem.github.io/fachwerk/docs/#/formatting-text" target="_blank">format text</a>.

  ### A pro tip

  Click <kbd>alt</kbd>+<kbd>e</kbd> on your keyboard to see the actual content of this site. You may even want to edit it! ⌨ 


</center>

<csshack />
