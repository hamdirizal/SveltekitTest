<script>
	import {onMount} from "svelte";
	let foo;
	onMount(()=>{
		console.log('component mounted')
		
	})
</script>
<div class="Foo">Foo bar baz<br>
	<a href="#" bind:this={foo}>Click me please!</a>
</div>
<style>
	.Foo{
		border:  2px solid yellow;
		margin:  10px;
		padding:  10px;
	}
</style>