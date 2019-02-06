<template>
	<div class="row">
		<template v-for="producto in listadoProductos">
			<div class="col-sm-4">
				<div class="card">
				  <img :src="producto.image" class="card-img-top" :alt="producto.title" />
				  <div class="card-body">
				    <h5 class="card-title">{{producto.title}}</h5>
				    <p class="card-text">{{producto.text}}</p>
				    <a href="#" class="btn btn-primary pull-right" @click="comprar(producto)">{{producto.price}} € - Comprar</a>
				  </div>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
	import axios from 'axios';
	import { eventBus } from '../main';

	export default {
		props: ['producto'],
		mounted() {
			axios.get('./src/data.json')
			.then( (respuesta) => {
				this.listadoProductos = respuesta.data;
			})
		},
		data (){
			return {
				listadoProductos: null,
			}
		},
		methods:{
			comprar(producto){
				eventBus.$emit('comprar', producto);
			}
		}
	}

</script>
<style></style>