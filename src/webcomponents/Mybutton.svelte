<script>
	import { onMount } from 'svelte';
	function buttonClicked(e){
		console.log('clicking the buttton')
	}
	let myEl = null;
	onMount(()=>{
		myEl.addEventListener('click',e=>{ console.log('button is clicked') });
	})
</script>

<div>
	<a href="#" bind:this={myEl}>This is my button</a>
</div>