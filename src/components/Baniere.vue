<template>
  <header class="bg-white sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo + Nom -->
        <div class="flex items-center space-x-3 text-[#116530] font-bold text-xl">
          <img src="/logo_transparent.png" alt="Logo" class="h-10 w-auto" />
          <span>{{ companyName }}</span>
        </div>

        <!-- Menu desktop -->
        <nav class="hidden md:flex space-x-8 text-[#1F2937] font-medium">
          <router-link to="/" class="hover:text-[#25D366] transition-colors duration-200">Accueil</router-link>
          <router-link to="/services" class="hover:text-[#25D366] transition-colors duration-200">Services</router-link>
          <router-link to="/about" class="hover:text-[#25D366] transition-colors duration-200">À propos</router-link>
          <router-link to="/contact" class="hover:text-[#25D366] transition-colors duration-200">Contact</router-link>
          <router-link to="/contact" class="hover:text-[#25D366] transition-colors duration-200"><i
              class="fab fa-whatsapp"></i></router-link>
        </nav>

        <!-- Mobile menu button -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-[#1F2937] focus:outline-none">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="md:hidden px-4 pb-4 space-y-2 bg-white text-[#1F2937]">
      <router-link to="/" class="block hover:text-[#25D366] transition-colors duration-200">Accueil</router-link>
      <router-link to="/services"
        class="block hover:text-[#25D366] transition-colors duration-200">Services</router-link>
      <router-link to="/about" class="block hover:text-[#25D366] transition-colors duration-200">À propos</router-link>
      <router-link to="/contact" class="block hover:text-[#25D366] transition-colors duration-200">Contact</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { config } from '@/config'; // Assure-toi du bon chemin vers le fichier

// Déclaration des variables réactives
const menuOpen = ref(false);
const companyName = ref(config.companyName); // Utilisation du nom de l'entreprise

</script>
