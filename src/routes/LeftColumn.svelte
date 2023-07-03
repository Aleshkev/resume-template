<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let data: any;
</script>

{#each ['education', 'achievements', 'experience'].map((section) => data[section]) as section}
	{#if section}
		<section>
			<h2><Markdown inline source={section.title} /></h2>
			{#each section.items as item}
				<h3 class="">
					<span class="tab inline-block mr-[1cm] min-w-[4cm] font-bold"
						><Markdown inline source={item.where} /></span
					>
					{#if item.what}<Markdown inline source={item.what} />{/if}
				</h3>
				{#if item.when}<h4><Markdown inline source={item.when} /></h4>{/if}
				{#if item.description}<p><Markdown inline source={item.description} /></p>{/if}
			{/each}
		</section>
	{/if}
{/each}

