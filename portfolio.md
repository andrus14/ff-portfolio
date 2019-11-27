| chapter: Example layouts
| section: Example layout 1
| rows: 50vh auto
| height: 100vh
| 1
| 2
| 3

<center>

  # *Fredi von Fachwerk*
  
  This is a small portfolio-like mockup-site to test out <a href="https://designstem.github.io/fachwerk/" target="_blank"><var>Fachwerk</var></a> framework as possible portfolio platform.<br>There are a couple of <var>special components</var> that help you present images separately or in a tiled grid.

</center>

-

<!-- https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1 -->

<f-portfolio-wall style="--height:100vh; --smallheight:1000px; --cols:3; --smallcols:2; ">
  <f-portfolio-tile 
    title="Opens a bigger image" 
    image="https://kig17.files.wordpress.com/2019/11/00_background-sketches_2.jpg?w=1000" 
    important 
    target="https://imgur.com/rJUm8Ee.jpg" 
    style="--spancols:2; --spanrows:2; --tint:0.5;"
  />
  <f-portfolio-tile 
    title="Project one" 
    target="Project 1"
    style="--tint:0.5;" 
  />
  <f-portfolio-tile 
    title="Screenshot of Fachwerk" 
    image="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    target="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    style="--spanrows:2; --tint:0.5"
  />
  <f-portfolio-tile 
    title="Project 2 with longer name" 
    image="https://www.dropbox.com/s/kg5r60dr037gs0r/00_background-sketches_3.jpg?raw=1" 
    target="Project 2" 
    style="--tint:0.75"
  />
  <f-portfolio-tile 
    title="Another project" 
    image="https://picsum.photos/id/1/400" 
    target="etc" 
  />
  <f-portfolio-tile 
    title="Zooms the image in" 
    image="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1"
    target="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1" 
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

---





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
    title="If a tile is marked as important, the title is highlighted" 
    image="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1" 
    important 
    target="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1" 
    style="--spancols:2; --spanrows:2; --tint:0.5;"
  />
  <f-portfolio-tile 
    title="Project one" 
    target="Project one"
    style="--tint:0.5;" 
  />
  <f-portfolio-tile 
    title="Screenshot of Fachwerk" 
    image="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    target="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    style="--spanrows:2; --tint:0.5"
  />
  <f-portfolio-tile 
    title="Project 2 with longer name" 
    image="https://www.dropbox.com/s/kg5r60dr037gs0r/00_background-sketches_3.jpg?raw=1" 
    target="etc" 
    style="--tint:0.75"
  />
  <f-portfolio-tile 
    title="Another project" 
    image="https://picsum.photos/id/1/400" 
    target="etc" 
  />
  <f-portfolio-tile 
    title="Zooms the image in" 
    image="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1"
    target="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1" 
    style="--spancols:1;"
    important 
  />
</f-portfolio-wall>

---



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

<f-portfolio-wall style="--height:100vh; --smallheight:1000px; --cols:3; --smallcols:2; --tinycols:1; ">
    <f-portfolio-tile 
      title="This is important!" 
      image="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1" 
      important 
      target="This is important" 
      style="--tint:0.5;"
    />
    <f-portfolio-tile 
      title="The second one" 
      target="Project number 2"
      style="--tint:0.5;" 
    />
    <f-portfolio-tile 
      title="Number 3" 
      image="https://picsum.photos/id/1/400" 
      target="etc" 
      style="--tint:0.5"
    />
    <f-portfolio-tile 
      title="This one has quiiiiite a long title" 
      image="https://www.dropbox.com/s/hd1xb1skxlvakbp/05_designstem-concept_1.jpg?raw=1" 
      target="etc" 
      style="--tint:0.75"
    />
    <f-portfolio-tile 
      title="Number 5" 
      image="https://picsum.photos/id/1/400" 
      target="etc" 
    />
    <f-portfolio-tile 
      title="Number 6" 
      target="etc" 
      style=""
      important 
    />
</f-portfolio-wall>

---






| section: Example layout 3
| padding: 50px 0 0 0
| menu: show

<f-portfolio-wall style="--height:100vh; --smallheight:1000px; --cols:3; --smallcols:2; --tinycols:1; ">
  <f-portfolio-tile 
    title="This is important!" 
    image="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1" 
    important 
    target="This is important" 
    style="--spancols:2; --tint:0.5;"
  />
  <f-portfolio-tile 
    title="The second one" 
    target="Project number 2"
    style="--tint:0.5;" 
  />
  <f-portfolio-tile 
    title="Number 3" 
    image="https://picsum.photos/id/1/400" 
    target="etc" 
    style="--tint:0.5"
  />
  <section style="grid-area: span 1 / span 2;">

  <caption>Example layout 3. This is experimental.</caption>

  ## ~Fredi von Fachwerk~
      
  > ~Here we try another font and we use "normal" content inside of the image grid. And it works! *...well, kind of...* 😕~

  </section>
  <f-portfolio-tile 
    title="This one has quiiiiite a long title" 
    image="https://www.dropbox.com/s/hd1xb1skxlvakbp/05_designstem-concept_1.jpg?raw=1" 
    target="etc" 
    style="--tint:0.75"
  />
  <f-portfolio-tile 
    title="Number 5" 
    image="https://picsum.photos/id/1/400" 
    target="etc" 
  />
  <f-portfolio-tile 
    title="Number 6" 
    target="etc" 
    style="--spancols:1;"
    important 
  />
</f-portfolio-wall>

---






| chapter: Example project pages
| section: Project 1 
| padding: 0;
| rows: 80vh auto
| cols: 1fr 2fr
| 1 1 
| 2 3 


<f-portfolio-tile 
    title="A project with hero image" 
    style="height:100%; --tint:0.5;"
    hero
    image="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1"
/>


-

<section>
  
  Ok, now this would be a nice place to tell people a little about my project. Isn't it? 

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

  <f-next-button title="Next: project number 2" />

</section>

-

<section>

  <f-image src="https://www.dropbox.com/s/l7u7x00kr12hthd/00_background-dinner.jpg?raw=1" />

  <small>*Here is just a simple image. You cant click it. This is Fachwerks `<f-image />` component.*</small>


  <f-image src="https://www.dropbox.com/s/kg5r60dr037gs0r/00_background-sketches_3.jpg?raw=1" />

  <small>*Let's add another image, so it looks more like a portfolio project or something. This is how we made it happen. We are soo geniuses.*</small>

</section>

---







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
    image="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1"
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
    image="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1"  
    target="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1" 
    style="--tint:0.5;"
  />
  <f-portfolio-tile 
    title="Screenshot of Fachwerk" 
    image="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    target="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    style="--tint:0.5"
  />
  <f-portfolio-tile 
    title="Project 2 with longer name" 
    image="https://www.dropbox.com/s/kg5r60dr037gs0r/00_background-sketches_3.jpg?raw=1" 
    target="https://www.dropbox.com/s/kg5r60dr037gs0r/00_background-sketches_3.jpg?raw=1" 
    style="--tint:0.75"
  />
  <f-portfolio-tile 
    title="Zooms the image in" 
    image="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1"
    target="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1" 
    style="" 
  />
</f-portfolio-wall>

</section>

<csshack />

---





| section: Project 3
| height: 100vh
| background: https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1
| tint: 0.7
| theme: dark
| rows: 40vh auto
| 1 1
| 2 3


-

## *Project with big back&shy;ground*

And text with description goes here. I don't know if we need such an option... But here it is. To the right we put some more related images, you can zoom into.

&nbsp;

<f-next-button />

-

<f-portfolio-wall style="--height:100%; --smallheight:auto; --cols:2; --smallcols:2;">
  <f-portfolio-tile 
    title="Opens a bigger image" 
    image="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1"  
    target="https://www.dropbox.com/s/qijb0j75lu48q85/00_background-turntable.jpg?raw=1" 
    style="--tint:0.5;"
  />
  <f-portfolio-tile 
    title="Screenshot of Fachwerk" 
    image="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    target="https://www.dropbox.com/s/4716b3who8d2jpp/fachwerk-screenshot.jpg?raw=1" 
    style="--tint:0.5"
  />
  <f-portfolio-tile 
    title="Project 2 with longer name" 
    image="https://www.dropbox.com/s/kg5r60dr037gs0r/00_background-sketches_3.jpg?raw=1" 
    target="https://www.dropbox.com/s/kg5r60dr037gs0r/00_background-sketches_3.jpg?raw=1" 
    style="--tint:0.75"
  />
  <f-portfolio-tile 
    title="Zooms the image in" 
    image="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1"
    target="https://www.dropbox.com/s/62bhblw03dxospo/color-sphere.jpg?raw=1" 
    style="" 
    important
  />
</f-portfolio-wall>
