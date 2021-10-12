<script>
	let randomString = null
	function clicked(){
		randomString = Math.random() + '';
	}
</script>
<div class="Hello">
	Hello world.<br>
	<a href="#/" on:click|preventDefault={clicked}>Click me</a>
	<br>
	<h4>{randomString}</h4>

</div>

<style>
	.Hello{
		padding:  10px;
		border:  2px solid green;
		margin:  10px;
	}
</style>