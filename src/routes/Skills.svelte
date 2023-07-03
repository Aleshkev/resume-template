<script lang="ts">
	import Markdown from './Markdown.svelte';
	import Rating from './Rating.svelte';
	export let data: any;
</script>

<h2>{data.skills.title}</h2>

{#each data.skills.sections as section}
	{#if section.title}
		<h4>{section.title}</h4>
	{/if}

	{#if section.description}
		<Markdown source={section.description} />
	{/if}

	{#if section.items}
		<ul>
			{#each section.items as item}
				<li class="arrow">
					<div>
						<span>{item.label}</span>
						<span class="float-right h-[14px] overflow-hidden"><Rating n={item.rating} /></span>
					</div>
					{#if item.including}
						<div class="text-[9pt] mb-1 leading-none">
							+ {item.including}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
{/each}

<h2>{data.interests.title}</h2>

<ul class="flex flex-col">
	{#each data.interests.items as item}
		<li class="arrow">{item.label}</li>
	{/each}
</ul>

<style lang="postcss">
	.arrow {
		@apply before:content-['🡢_'] before:text-pink-600 before:w-[16px] before:-ml-[16px] pl-[16px] before:absolute;
	}
</style>
