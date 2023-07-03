<script lang="ts">

import MarkdownIt from 'markdown-it';

let md = new MarkdownIt();

export let source: string;

export let inline: boolean = false;

let html = inline ? md.renderInline(source) : md.render(source);

</script>

{@html html}
