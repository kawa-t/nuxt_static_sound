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
  <div>
    <audio ref="audioRef" :src="audioSrc" loop />
    <img
      :src="imageSrc"
      alt="wheather-images"
      class="wheather-img"
      @click="toggleAudio"
    />
    <input
      type="range"
      ref="volumeControlRef"
      min="0"
      max="100"
      @change="changeVolume"
      class="volume-control"
    />
    <p class="dark:text-slate-400">{{ volumeValue }}</p>
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
  width: 80%;
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
