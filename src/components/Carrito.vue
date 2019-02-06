<template>
	<div v-if="productos.length === 0" class="alert alert-info" role="alert">
		El carrito está vacío
	</div>
	<div v-else >
		Nº Productos: {{ cantidad }}
		Total: {{ total }} €
		<ul class="list-group">
			<li v-for="producto, index in productos" class="list-group-item d-flex justify-content-between align-items-center">
				<img :src="producto.image" :alt="producto.items" class="rounded img-carrito" />
				{{ producto.title }}
				<span class="badge badge-primary badge-pill">{{ producto.items }}</span>
				<button :disabled="producto.items==1" @click="restar(producto, index)" class="btn btn-primary btn-sm"><font-awesome-icon icon="minus" /></button>
				<button @click="sumar(producto, index)" class="btn btn-primary btn-sm"><font-awesome-icon icon="plus" /></button>
				<button @click="eliminar(producto, index)" class="btn btn-danger btn-sm"><font-awesome-icon icon="trash" /></button>
			</li>
		</ul>
	</div>

</template>
<script>

	import { eventBus } from '../main';
	import axios from 'axios';	

	export default {
		data (){
			return {
				productos: [],
				cantidad:0,
				total:0
			}
		},
		created() {
		  // Using the server bus
		  eventBus.$on('comprar', (producto) => {
		  	producto.items = 1; //Es el primer producto de este tipo.
		  	this.productos.push(producto);
		  	this.cantidad++;
		  	this.total += producto.price;
		  	console.log(this.productos);
		  })
		},
		methods:{
			restar(producto,key){
				this.$set(this.productos[key], 'items', this.productos[key].items-1); 
				this.cantidad--;
				this.total -= producto.price;
			},
			sumar(producto,key){
				this.$set(this.productos[key], 'items', this.productos[key].items+1); 
				this.cantidad++;
				this.total += producto.price;
			},
			eliminar(producto,key){
				this.cantidad -= producto.items;
				this.total -= producto.items * producto.price;
				this.$delete(this.productos, key);
			}
		},
		watch:{
			productos(){
				console.log(this.productos);
			}
		}
	}
</script>

<style>
.img-carrito{
	width:50px !important;
	height:50px !important;
}
</style>
