<script lang="ts">
	export let n: number;
</script>

<!-- Georgia font because default fonts have inconsistent filled/unfilled circle sizes.-->
<ul class="text-[10pt] font-[Georgia] inline-block text-pink-700 select-none">
	{"●".repeat(n) + "○".repeat(5 - n)}
</ul>
