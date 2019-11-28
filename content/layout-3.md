
| section: Example layout 3
| padding: 0



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