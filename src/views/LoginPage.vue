<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input v-model="userData.username" type="text" class="input mb-3" placeholder="Kullanıcı Adı" />
    <input v-model="userData.password" type="password" class="input mb-3" placeholder="Şifre" />
    <button @click="onSubmit" class="default-button">Giriş Yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link :to="{ name: 'RegisterPage' }" class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
    </span>
  </div>
</template>

<script>
import CryptoJs from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const password = CryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      console.log(password);
      this.$appAxios
        .get(`/users?username=${this.userData.username}&password=${password}`)
        .then((login_response) => {
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "HomePage" });
          } else {
            alert("sıçtın.");
          }
          console.log(login_response);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>