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
import CryptoJs from "crypto-js";
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
      const password = CryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios.post("/users", { ...this.userData, password }).then((registered_user_response) => {
        console.log("registered_user_response :>> ", registered_user_response);
        this.$router.push({ name: "HomePage" });
      });

      // const decryptedPassword = cryptoJs.AES.decrypt(cryptedPassword, key).toString(cryptoJs.enc.Utf8);
      // console.log("decryptedPassword :>> ", decryptedPassword);
      // console.log(this.userData);
    },
  },
};
</script>