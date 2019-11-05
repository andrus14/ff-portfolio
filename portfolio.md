| chapter: Portfolio
| section: home
| padding: 0
| height: 100vh
| 1
| 2
<!-- ### Test-buildig a portfolio with Fachwerk -->


<section>

  ## A grid of images with title and texture

</section>

-

<!-- <f-portfolio-wall cols="2" style="min-height:150vh;"> -->
<f-portfolio-wall style="--height:1600px; --cols:3; ">
    <f-portfolio-tile 
      title="This is important!" 
      image="https://picsum.photos/id/185/400" 
      important 
      target="This is important" 
      style="--spancols:2; --spanrows:2; --tint:0.75;"
    />
    <f-portfolio-tile 
      title="The second one" 
      target="Project number 2"
      style="--tint:0.5; --spanrows:2;" 
    />
    <f-portfolio-tile 
      title="Number 3" 
      image="https://picsum.photos/id/1/400" 
      target="etc" 
      style="--spanrows:2; --spancols:1; --tint:0.5"
    />
    <f-portfolio-tile 
      title="This one has a quite long title" 
      image="https://picsum.photos/id/108/400" 
      target="etc" 
    />
    <f-portfolio-tile 
      title="Number 5" 
      image="https://picsum.photos/id/1/400" 
      target="etc" 
    />
    <f-portfolio-tile 
      title="Number 6" 
      target="etc" 
      style="--spancols:2;"
      important 
    />
</f-portfolio-wall>

---




| section: This is important
| height: 100vh

# Yo! This is my important project!

-

<div style="padding:3vmin;">
      <h5>Playground</h5>
      <f-scene responsive>
        <f-hex-pattern rows="6" cols="6" step="0.5">
          <f-hexagon :rotation="get('boo', 0)" :scale="get('woo', 1)" />
        </f-hex-pattern>
      </f-scene>
      <br />
      <f-slider set="boo" to="180" />
      <br />
      <f-slider set="woo" from="0.2" to="2" value="1" />
    </div>

---




| section: Project number 2
| height: 100vh
| theme: blue

<center>

# The second project, maan

</center>

---





| section: etc
| height: 100vh

<center>

  # And so on

</center>