<template>
<div class="authpage__bg"></div>
<div class="authpage__bg authpage__bg2"></div>
<div class="authpage__bg authpage__bg3"></div>
  <div class="authpage__wrapper font-inter">
    <div class="text-center mb-3">
      <h1><a href="https://bigplay.gg" class="text-black font-[20px] font-inter text-[20px] ">BIGPLAY</a></h1>
    </div>
    <form action="" class="text-inter p-[20px]">
      <input type="text" placeholder="Email" class="bg-[#dfe9f5] mb-2 rounded w-[100%] p-[6px] placeholder:text-[16px]
      focus:outline-none focus:ring focus:ring-violet-300 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
      <input type="password" placeholder="Пароль" class="bg-[#dfe9f5] rounded  w-[100%] p-[6px] placeholder:text-[16px]
       focus:outline-none focus:ring focus:ring-violet-300 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
      <div class="flex mt-2 justify-end">
        <a href="https://bigplay.gg/password/reset" class="text-[12px]">Забыли пароль?</a>
      </div>
      <div class="mb-3">
        <button class="font-inter bg-[#481FA0] rounded w-[100%] p-[8px] text-white hover:bg-blue-600 hover:drop-shadow">Войти</button>
      </div>
    </form>
    <div class="flex justify-center gap-3">
      <div class="w-[30%] p-[20px] rounded border-[2px] border-[#dfe9f5] flex justify-center items-center">
        <img src="@/public/google.svg" alt="google" width="24" height="24">
      </div>
      <div class="w-[30%] p-[20px] rounded border-[2px] border-[#dfe9f5] flex justify-center items-center">
        <img src="@/public/discord-v2-svgrepo-com.svg" alt="discord" width="24" height="24">
      </div>
    </div>

    <div class="text-[12px] mt-5">
      У вас еще нет аккаунта? <a href="https://bigplay.gg/registration" class="text-[tomato]">
      Зарегистрироваться
    </a>
    </div>


  </div>

</template>

<script lang="ts">
export default defineComponent({
  name: 'AuthPage'
})

</script>