<script setup lang="ts">
import AudioBox from '@/components/AudioBox.vue';
import DoarkModeSwich from '@/components/DarkModeSwich.vue';
</script>

<template>
  <div
    class="min-h-screen flex flex-col dark:bg-gray-800 duration-500 transition-all dark:transition-all dark:duration-500"
  >
    <header>
      <DoarkModeSwich />
    </header>
    <h3
      class="flex content-center mx-auto dark:text-orange-50 mt-6 font-100 text-3xl mb-2 text-gray-700 tracking-wider duration-500 transition-all dark:transition-all dark:duration-500"
    >
      Audio Box
    </h3>
    <main class="flex flex-wrap content-center p-0 w-1/2 mx-auto">
      <AudioBox audioSrc="/sounds/game2065.wav" imageSrc="/images/fog-day.svg" />
      <AudioBox audioSrc="/sounds/game2065.wav" imageSrc="/images/rain.svg" />
      <AudioBox audioSrc="/sounds/game2065.wav" imageSrc="/images/fog-day.svg" />
      <AudioBox audioSrc="/sounds/get.mp3" imageSrc="/images/fog-day.svg" />
      <AudioBox audioSrc="/sounds/game2065.wav" imageSrc="/images/fog-day.svg" />
    </main>
  </div>
</template>
