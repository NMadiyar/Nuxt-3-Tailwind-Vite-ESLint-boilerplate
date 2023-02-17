<template>
  <div class="authpage__bg"></div>
  <div class="authpage__wave"></div>
  <div class="authpage__wave"></div>
  <div class="authpage__wave"></div>

  <div class="authpage__wrapper font-inter">
    <div class="text-center">
      <h1>
        <a
          href="https://bigplay.gg"
          class="text-black font-[20px] font-inter text-[20px] hover:underline hover:drop-shadow"
          >BIGPLAY</a
        >
      </h1>
    </div>
    <form action="" class="text-inter p-[20px]">
      <input
        type="text"
        placeholder="Username"
        class="bg-[#dfe9f5] mb-2 rounded-2xl border-0 w-[100%] p-[10px] placeholder:text-[16px] focus:outline-none focus:ring focus:ring-violet-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        type="text"
        placeholder="Email"
        class="bg-[#dfe9f5] mb-2 rounded-2xl border-0 w-[100%] p-[10px] placeholder:text-[16px] focus:outline-none focus:ring focus:ring-violet-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        type="password"
        placeholder="Пароль"
        class="bg-[#dfe9f5] rounded-2xl border-0 w-[100%] p-[10px] placeholder:text-[16px] focus:outline-none focus:ring focus:ring-violet-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        type="password"
        placeholder="Повторите пароль"
        class="bg-[#dfe9f5] border-0 rounded-2xl mt-2 w-[100%] p-[10px] placeholder:text-[16px] focus:outline-none focus:ring focus:ring-violet-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <div class="flex mt-2 justify-end">
        <a href="https://bigplay.gg/password/reset" class="text-[12px]"
          >Забыли пароль?</a
        >
      </div>
      <div class="mb-3">
        <button
          class="font-inter bg-[#481FA0] rounded w-[100%] p-[8px] text-white hover:bg-blue-600 hover:drop-shadow mt-2"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>

    <div class="flex justify-center gap-3">
      <div
        class="w-[30%] p-[20px] rounded border-[2px] border-[#dfe9f5] flex justify-center items-center"
      >
        <img src="/google.svg" alt="google" width="24" height="24" />
      </div>
      <div
        class="w-[30%] p-[20px] rounded border-[2px] border-[#dfe9f5] flex justify-center items-center"
      >
        <img
          src="/discord-v2-svgrepo-com.svg"
          alt="discord"
          width="24"
          height="24"
        />
      </div>
    </div>

    <div class="text-[12px] mt-5">
      У вас уже есть аккаунт?
      <a href="https://bigplay.gg/registration" class="text-[tomato]">
        Войти
      </a>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "RegistrationPage",
});
</script>
