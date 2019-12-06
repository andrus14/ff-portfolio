| section: Project 2
| padding: 0;
| rows: 40vh auto
| cols: 1fr 2fr
| 1 1 
| 2 3 


<f-portfolio-tile 
    title="Project 2: Smaller hero image and gallery" 
    style="height:100%; --tint:0.5;"
    hero
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_1920,h_600,c_fill/v1574947419/color-sphere_mxc79o.jpg"
/>


-

<section>
  
  This one has a clickable/zoomable gallery instead of just images as the previous one was.

  #### About my project

  This layout has a big hero image, text and some additional images. 

  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, laboriosam. Deserunt minima quisquam, ratione ullam itaque alias laborum fugiat repudiandae, corrupti quae ut laudantium doloremque odit officia unde maiores ex!

  &nbsp;

  <small>

  `Link` <a href="https://designstem.github.io/fachwerk" target="_blank">https://designstem.github.io/fachwerk</a>
  `Client` Fachwerk Machinerwerk Gmbh
  `Year` 2018
  `Metadata` just add something
  
  </small> 

  &nbsp;

  <f-next-button title="Next: project number 3" />

</section>

-

<section>

  <f-portfolio-wall style="--height:760px; --smallheight:auto; --cols:2; --smallcols:2;">
  <f-portfolio-tile 
    title="Opens a bigger image" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574950786/00_background-turntable_eldgzq.jpg"  
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/q_auto/v1574947423/fachwerk_iyemq5.jpg" 
    style="--tint:0.5;"
  />
  <f-portfolio-tile 
    title="Screenshot of Fachwerk" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600,q_auto/v1574962682/fachwerk-screenshot_rb2oud.jpg" 
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/h_1080,q_auto/v1574962682/fachwerk-screenshot_rb2oud.jpg" 
    style="--tint:0.5"
  />
  <f-portfolio-tile 
    title="Project 2 with longer name" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574950785/00_background-dinner_smg0e3.jpg" 
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/w_1920,q_auto/v1574950785/00_background-dinner_smg0e3.jpg" 
    style="--tint:0.75"
  />
  <f-portfolio-tile 
    title="Zooms the image in" 
    image="https://res.cloudinary.com/dt8r2uxga/image/upload/w_600/v1574947419/color-sphere_mxc79o.jpg"
    target="https://res.cloudinary.com/dt8r2uxga/image/upload/w_1920,q_auto/v1574947419/color-sphere_mxc79o.jpg" 
    style="" 
  />
</f-portfolio-wall>

</section>

<csshack />