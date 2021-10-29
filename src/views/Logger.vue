<script setup lang="ts">
import { ref } from 'vue';
import { getDatabase, ref as fRef, set } from "firebase/database";
import { useRouter } from 'vue-router';

const router = useRouter()
const db = getDatabase()

const user = ref('')

function writeUser() {
	// alert(user.value)
	// console.log(user);
//   set(fRef(db, 'users/' + 1), {
//     username: user.value,
//   })
//   .then(() => {
	  router.push({name: 'Main'})
//   })
}
</script>

<template>
	<div class="logger" @keydown.enter="writeUser">
		<input v-model="user" class="input is-medium" type="text" placeholder="Ingresa tu nombre" />
		<button class="button is-primary is-medium" @click="writeUser">
			Ingresar
		</button>
	</div>
</template>
<style lang="scss" >
.logger{
	height: 100%;
	display: grid;
	place-content: center;
	margin: 0 auto;
	width: 50%;
	grid-template-columns: minmax(75%, 250px) 150px;
}
</style>

