<template>
	<div id="app">
		<div class='container-fluid'>
			<div class="row">
				<div class="col-sm-9">
					<h1>Listado de productos</h1>
					<hr>
					<listadoProductos></listadoProductos>
				</div>
				<div class="col-sm-3">
					<h1>Carrito</h1>
					<hr>
					<carrito></carrito>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import listadoProductos from './components/ListadoProductos.vue'
	import carrito from './components/Carrito.vue'

	export default {
		name: 'app',
		components : {listadoProductos, carrito},
		data () {
			return {

			}
		}
	}
</script>