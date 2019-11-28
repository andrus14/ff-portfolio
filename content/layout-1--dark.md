| section: Example layout 1 dark
| theme: dark
| rows: 50vh auto
| height: 100vh
| 1
| 2

<center>

  <caption>Yo. Dark theme! How about that?</caption>

  ## <var>Fredi von Fachwerk</var>
  
  Fachwerk has a few <var>themes</var> built-in and it is quite easy to adjust or overwrite (most of) the styles using <var>--css-variables</var> or other css techniques. 

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

