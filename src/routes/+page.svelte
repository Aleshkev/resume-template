<script lang="ts">
	import data1 from './data.yaml';
  import data2 from './data2.yaml';
	import LeftColumn from './LeftColumn.svelte';
	import Header from './Header.svelte';
	import Contact from './Contact.svelte';
	import Skills from './Skills.svelte';

  let data = data1 ? data1 : data2;
</script>

<div class="text-[10pt]">
	<Header {data} />

	<div class="flex flex-row gap-[.2in]">
		<div class="basis-[11.5cm] grow-0 shrink-0">
			<LeftColumn {data} />
		</div>

		<div class="grow">
			<Contact {data} />
			<Skills {data} />
		</div>
	</div>
</div>
