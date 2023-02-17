<template>
  <HeaderComponent></HeaderComponent>
  <MainPage></MainPage>
  <MainInfo></MainInfo>
  <TournamentList></TournamentList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "~/components/HeaderComponent.vue";
import MainPage from "~/pages/main/MainPage.vue";
import MainInfo from "~/pages/main/MainInfo.vue";
import TournamentList from "~/pages/tournament/TournamentList.vue";

export default defineComponent({
  components: { TournamentList, MainInfo, MainPage, HeaderComponent },
});
</script>
