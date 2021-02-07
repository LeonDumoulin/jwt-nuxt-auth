<template>
  <div class="container">
    <h1>Sign in to access the secret page</h1>
    <div>
      <label for="email">
        <input v-model="form.user" id="email" type="email" value="test" />
      </label>
      <label for="password">
        <input
          v-model="form.password"
          id="password"
          type="password"
          value="test"
        />
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;
import axios from "axios";
var myglobal = "aa";
const myglobal2 = "aa2";
export default {
  middleware: "notAuthenticated",
  data: () => ({
    form: {
      user: "",
      password: "",
    }
  }),

  methods: {
    postLogin() {
      var myglobalstore = this.$store;
      var myglobalrouter = this.$router;
      axios({
        method: "post",
        url: "https://medico.ahmedhesham.systems/api/login",
        data: new URLSearchParams(this.form),
      })
        .then(function(response) {
          console.log(response.data);
          if (response.data.msg == "login sucssfully") {
            setTimeout(() => {
              const auth = {
                accessToken: response.data.token,
              };
              myglobalstore.commit("setAuth", auth); // mutating to store for client rendering
             // Cookie.set("auth", auth); // saving token in cookie for server rendering
              localStorage.setItem("auth", auth)
              myglobalrouter.push("/");
            }, 1000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
