<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Register</h3>
    <input v-model="userData.fullname" type="text" class="input mb-3" placeholder="Tam Ad" />
    <input v-model="userData.username" type="text" class="input mb-3" placeholder="Kullanıcı Adı" />
    <input v-model="userData.password" type="text" class="input mb-3" placeholder="Şifre" />
    <button class="default-button" @click="onSave">Kayıt ol</button>
    <span class="text-center mt-3 text-sm">
      Zaten Üyeyim,
      <router-link :to="{ name: 'LoginPage' }" class="text-red-900 hover:text-black">Giriş Yap!</router-link>
    </span>
  </div>
</template>

<script>
import cryptoJs from "crypto-js";
export default {
  data() {
    return {
      userData: {
        fullname: null,
        username: null,

        password: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
    },
  },
};
</script>
