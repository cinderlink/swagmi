<script lang="ts">
	import { Theme, SidebarLayout } from '@cinderlink/ui-kit';
	import 'virtual:uno.css';
	import './layout.css';
</script>

<Theme>
	<SidebarLayout>
		<aside slot="sidebar" class="h-full">
			<a href="/" id="brand">swagmi</a>

			<nav class="flex-1">
				<a href="/stores">
					<div class="i-tabler-activity-heartbeat"></div>
					Stores
				</a>
				<a href="/components">
					<div class="i-tabler-components"></div>
					Components
				</a>
			</nav>
		</aside>

		<main id="viem-app">
			<slot />
		</main>
	</SidebarLayout>
</Theme>

<style>
	#viem-app {
		@apply p-4;
	}
</style>
