<template>
  <div>
    <div v-if="myauth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/secret">
          secret page
        </NuxtLink>!
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">
        login
      </NuxtLink>.
    </p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  methods: {
    logout () {
      console.log(123);
      localStorage.removeItem("auth")
      this.$store.commit('setAuth', null)
      this.$router.push("/login");
    }
  },
  data:()=>({
    myauth : localStorage.getItem("auth")
  })
}
</script>
