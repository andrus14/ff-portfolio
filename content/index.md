<f-fetch :src="['layout-1.md','layout-1--dark.md'" v-slot="{ value }">
  <f-content
    :content="value"
    type="slides"
    style="--content-padding: 0;"
  />
</f-fetch>