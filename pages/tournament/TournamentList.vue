<template>
  <div class="container">
    <div class="p-3 font-inter">
      <h1 class="text-[#141320] leading-[48px] text-[24px] font-bold mb-[6px]">
        Турниры
      </h1>
      <div class="flex">
        <button
          class="font-semibold text-[#141320] leading-[130%] text-[14px] mr-[12px] mb-[24px]"
        >
          Показать все турниры
        </button>
        <img src="/arrow-right.svg" alt="show" />
      </div>

      <div class="border-[#141320] border-[1px] rounded-[16px]">
        <div class="flex justify-center relative">
          <p
            class="bg-[#A281E9] rounded-[13px] h-[41px] w-[212px] px-[14px] py-[10px] text-white leading-[130%] text-[16px] font-medium absolute left-[31px] top-[14px]"
          >
            Организатор: bigplay.gg
          </p>
          <div
            class="flex absolute bg-[#141320] rounded-[10px] p-[16px] left-[34px] top-[100px] text-[#00DD16]"
          >
            <img src="/check_green.svg" alt="" class="mr-[10px]" />
            <p>Завершен</p>
          </div>
          <img src="/tournament_sample.svg" alt="" class="absolute -z-50" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "TournamentList",
});
</script>
