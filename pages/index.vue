<script setup lang="ts">
import AudioBox from "@/components/AudioBox.vue";
import DoarkModeSwich from "@/components/DarkModeSwich.vue";
</script>
<template>
  <div class="dark:bg-gray-800 p-0">
    <DoarkModeSwich />
    <AudioBox audioSrc="/sounds/game2065.wav" imageSrc="/images/fog-day.svg" />
  </div>
</template>
