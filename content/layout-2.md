
| section: Example layout 2
| padding: 0
| cols: 1fr 3fr
| 1 2

<section>

  <caption>Example layout 2</caption>

  ## Fredi <sup><small><small>von</small></small></sup> Fachwerk
  
  You can adjust the <var>layout of image galleries</var> with some easy-to-use variables to define columns, rows, colum-spans, height etc.

  Also, with Fachwerk, it is quite easy to change the whole <var>page layout</var>, without being a html, css or javascript ninja. 
  <a href="https://designstem.github.io/fachwerk/docs/#/page-layout-and-grid" target="_blank">Find out, how!</a>
  
  &nbsp;

  > Although, being a ninja always helps, of course. 🐱‍👤

</section>

-

<f-portfolio-wall style="--height:90vh; --smallheight:1000px; --cols:3; --smallcols:2; --tinycols:1; ">
    <f-portfolio-tile 
    title="Opens a bigger image" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574950786/00_background-sketches_1_suxefs.jpg" 
    important 
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/h_1000,q_auto/v1574950786/00_background-sketches_1_suxefs.jpg" 
    style="--tint:0.2;"
  />
  <f-portfolio-tile 
    title="Goes to project page" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574947419/novomesto_hplrsm.jpg"
    target="Project 1"
    style="--tint:0.2; --image-position:100% 50%;" 
  />
  <f-portfolio-tile 
    title="Screenshot of Fachwerk" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600,q_auto/v1574962682/fachwerk-screenshot_rb2oud.jpg" 
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/h_1080,q_auto/v1574962682/fachwerk-screenshot_rb2oud.jpg" 
    style="--tint:0.5"
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
    style="--tint:0.5"
  />
  <f-portfolio-tile 
    title="This is important!" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574947419/color-sphere_mxc79o.jpg"
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/v1574947419/color-sphere_mxc79o.jpg" 
    style="--tint:0.25"
    important 
  />
</f-portfolio-wall>