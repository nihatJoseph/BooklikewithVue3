<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input type="text" class="input mb-3" placeholder="Kullanıcı Adı" />
    <input type="password" class="input mb-3" placeholder="Şifre" />
    <button class="default-button">Giriş Yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link :to="{ name: 'RegisterPage' }" class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
    </span>
  </div>
</template>
