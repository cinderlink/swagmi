<script lang="ts">
	import { Theme } from '@cinderlink/ui-kit/theme';
	import { SidebarLayout } from '@cinderlink/ui-kit/layout';
	import './layout.css';
</script>

<Theme>
	<SidebarLayout>
		<aside slot="sidebar" class="h-full">
			<a href="/" id="brand">swagmi</a>

			<nav class="flex-1">
				<a href="/stores">
					<div class="i-tabler-activity-heartbeat" />
					Stores
				</a>
				<a href="/components">
					<div class="i-tabler-components" />
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
