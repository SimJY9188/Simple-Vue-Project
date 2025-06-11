<template>
   <NavBar />
   <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
   components: {
      NavBar,
   },
};
</script>

<style>
:root {
   --font-family-lato: "Lato", sans-serif;
   --font-family-fira-sans: "Fira Sans", sans-serif;
}

html {
   scroll-behavior: smooth;
   height: 100%;
}

body {
   padding: 0;
   margin: 0;
   height: 100%;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
</style>
