<script lang="ts">
	import { onMount } from 'svelte'
	import { MyCounterButton } from '@repo/ui';

	interface ResponseData {
		id: number
		code: string
		value: string
	}

	let response: ResponseData[] = []

	onMount(() => {
		fetch("http://localhost:3000/qr/list", {
			headers: {
				"Accept": "application/json",
      			"Content-Type": "application/json"
			},
			method: "GET"
		})
			.then(response => response.json())
			.then(_response => response = _response)
			.catch(() => response = []);
	})
</script>

<h1>Web</h1>

<small>Response:</small>
<pre>{JSON.stringify(response, null, 2)}</pre>

<MyCounterButton />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
