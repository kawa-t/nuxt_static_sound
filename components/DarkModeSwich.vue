<script setup lang="ts">
const isDarkMode = ref(true);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  const html = document.querySelector("html");
  if (html) {
    html.classList.toggle("dark");
  }
};
</script>
<template>
  <div class="flex">
    <label>
      <input @click="toggleDarkMode" type="checkbox" class="peer sr-only" />
      <span
        class="block w-[2em] cursor-pointer bg-gray-500 rounded-full p-[1px] after:block after:h-[1em] after:w-[1em] after:rounded-full after:bg-white after:transition peer-checked:bg-blue-500 peer-checked:after:translate-x-[calc(100%-2px)]"
      >
      </span>
    </label>
    <img
      :src="
        isDarkMode ? '/images/darkmode_night.svg' : '/images/darkmode_day.svg'
      "
      :alt="isDarkMode ? 'darkmode_night' : 'darkmode_day'"
      class="w-8"
    />
  </div>
</template>
