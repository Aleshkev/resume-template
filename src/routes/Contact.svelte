<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let data: any;
	import Icon from './Icon.svelte';

	import MdMailOutline from 'svelte-icons/md/MdMailOutline.svelte';
	import MdLocalPhone from 'svelte-icons/md/MdLocalPhone.svelte';
	import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';

	let icons: {[type: string]: any} = {
		mail: MdMailOutline,
		phone: MdLocalPhone,
		location: MdLocationOn,
		github: DiGithubBadge,
		linkedin: FaLinkedin
	};
</script>

<h2>Contact </h2>

{#each Object.entries(data.contact) as [type, text]}
  <p>
    {#if icons[type] !== undefined}
      <Icon><svelte:component this={icons[type]}/></Icon>
    {/if}
    <Markdown inline source={text}/>
  </p>
{/each}
