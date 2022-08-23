<style scoped>
.wrapper{
	@apply fixed top-0 left-0 right-0 z-50;
}

.header-bar {
	@apply text-gray-200 bg-primary flex flex-wrap items-center justify-between p-5;
}
</style>

<template>
	<main class="wrapper">
		<section class="responsive-container header-bar">
			<slot name="start"></slot>
			<slot name="end"></slot>
			<slot name="bottom"></slot>
		</section>
	</main>
</template>
