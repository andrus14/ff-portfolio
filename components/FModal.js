export default {
  props: {
    src: { default: "", type: String },
    title: { default: "Modal", type: String },
    size: { default: 'full', type: String }
  },
  data: () => ({
    open: false
  }),
  template: `
  <span>
    <span
      @click.prevent="open = true"
      style="
        cursor: pointer;
      "
    >
      <slot>
        <a style="
          color: var(--blue);
        "
        >{{ title }}</a>
      </slot>
    </span>
    <f-overlay :size="size" v-if="open" style="--white:black">
      <a class="quaternary" style="
        position: absolute;
        top: var(--base);
        right: var(--base);
        z-index: 1000;
      "
      @click="open = false"
      >
        <f-close-icon />
      </a>


      <div @click="open = false" style="position:fixed; top:0; left:0; width:100%; height:100%; background:hsla(0,0%,0%,0.8); z-index:-1;"></div>
      <f-image :src="src" style="--image-size:contain; margin:5vh; height:90vh; pointer-events: none;" />

      <!-- <f-fetch v-if="src" :src="src" v-slot="{ value: content }">
        <f-content type="document" theme="light" style="--content-padding: var(--base3)" :content="content" />
      </f-fetch>
      <div v-if="!src" style="padding: var(--base3)">
        <slot name="content" />
      </div> -->
    </f-overlay>
  </span>
  `
}
