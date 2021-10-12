<script context="module">
	export async function load() {
		let label = "hello";
		let _serverComp = null;
		if(label==='foo'){_serverComp = (await import('../components/Foo.svelte')).default; }
		else if(label==='hello'){_serverComp = (await import('../components/Hello.svelte')).default; }

		return {
			props: {
				myComp : _serverComp
			}
		}
	} 
</script>
<script>
	// import Foo from "../components/Foo.svelte"
	// import Hello from "../components/Hello.svelte"
	export let myComp = null;
</script>

<svelte:component this={myComp}/>



