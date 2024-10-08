<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const size = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	function handleClick() {
		// this is equivalent to size.update(n => n + 1)
		$size += 1;
	}
    console.log($size);
</script>

<button on:click={handleClick} style="transform: scale({$size}); transform-origin: 0 0">
	embiggen
</button>