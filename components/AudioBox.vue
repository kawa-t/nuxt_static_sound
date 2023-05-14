<script setup lang="ts">
interface Props {
  audioSrc: string;
  imageSrc: string;
}
defineProps<Props>();

const INIT_VALUE = 50;
const audioRef: Ref<HTMLAudioElement | null> = ref(null);
const volumeControlRef: Ref<HTMLInputElement | null> = ref(null);
const isPlaying = ref(false);
const volumeValue = ref(INIT_VALUE);

const changeVolume = () => {
  if (audioRef.value && volumeControlRef.value) {
    const currentVolumeCount = Number(volumeControlRef.value.value);
    audioRef.value.volume = currentVolumeCount / 100;
    volumeValue.value = currentVolumeCount;
  }
};

const play = () => {
  if (audioRef.value) {
    isPlaying.value = true;
    audioRef.value.play();
  }
};

const pause = () => {
  if (audioRef.value) {
    isPlaying.value = false;
    audioRef.value.pause();
  }
};

const toggleAudio = () => {
  isPlaying.value ? pause() : play();
};
</script>

<template>
  <div class="w-1/3 my-10 hover:opacity-100" :class="isPlaying ? 'opacity-100' : 'opacity-60'">
    <audio ref="audioRef" :src="audioSrc" loop />
    <img :src="imageSrc" alt="wheather-images" class="wheather-img" @click="toggleAudio" />
    <div class="h-16 overflow-auto">
      <div v-if="isPlaying" class="flex flex-col items-center">
        <input
          type="range"
          ref="volumeControlRef"
          min="0"
          max="100"
          @change="changeVolume"
          class="volume-control"
        />
        <p class="dark:text-slate-400 mt-4 transition-all dark:transition-all dark:duration-500">
          {{ volumeValue }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wheather-img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
  opacity: 0.8;
  cursor: pointer;
}

.volume-control {
  display: block;
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  height: 3px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
}
</style>
