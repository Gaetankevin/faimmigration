<template>
    <footer class="relative bg-[#116530] text-white py-16 overflow-hidden">
        <!-- Bulles d’ambiance animées -->
        <div class="absolute top-0 left-0 w-40 h-40 bg-[#25D366]/30 rounded-full blur-2xl animate-bubble1"></div>
        <div class="absolute bottom-0 right-0 w-28 h-28 bg-[#FF7A00]/30 rounded-full blur-2xl animate-bubble2"></div>

        <!-- Contenu principal -->
        <div
            class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
            <!-- Navigation -->
            <div>
                <h3 class="text-xl font-bold text-white mb-4">Navigation</h3>
                <ul class="space-y-2">
                    <li><router-link to="/" class="hover:text-[#FF7A00] transition">Accueil</router-link></li>
                    <li><router-link to="/services" class="hover:text-[#FF7A00] transition">Nos services</router-link>
                    </li>
                    <li><router-link to="/about" class="hover:text-[#FF7A00] transition">À propos</router-link></li>
                    <li><router-link to="/contact" class="hover:text-[#FF7A00] transition">Contact</router-link></li>
                </ul>
            </div>

            <!-- Partenaires -->
            <div>
                <h3 class="text-xl font-bold text-white mb-4">Partenaires</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-[#FF7A00] transition">Partenaire 1</a></li>
                    <li><a href="#" class="hover:text-[#FF7A00] transition">Partenaire 2</a></li>
                    <li><a href="#" class="hover:text-[#FF7A00] transition">Partenaire 3</a></li>
                    <li><a href="#" class="hover:text-[#FF7A00] transition">Partenaire 4</a></li>
                </ul>
            </div>

            <!-- Services -->
            <div>
                <h3 class="text-xl font-bold text-white mb-4">Services Plus</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-[#FF7A00] transition">Consultation gratuite</a></li>
                    <li><a href="#" class="hover:text-[#FF7A00] transition">Support juridique</a></li>
                    <li><a href="#" class="hover:text-[#FF7A00] transition">Formations</a></li>
                    <li><a href="#" class="hover:text-[#FF7A00] transition">FAQ</a></li>
                </ul>
            </div>

            <!-- Contact & Réseaux -->
            <div class="flex flex-col items-center md:items-start">
                <h3 class="text-xl font-bold text-white mb-4">Restez connectés</h3>
                <div class="flex space-x-4 text-2xl">
                    <a href="#" target="_blank" class="hover:text-[#25D366] transition transform hover:scale-110">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" target="_blank" class="hover:text-[#3b5998] transition transform hover:scale-110">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" class="hover:text-[#1da1f2] transition transform hover:scale-110">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank" class="hover:text-[#0077b5] transition transform hover:scale-110">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" target="_blank" class="hover:text-[#e4405f] transition transform hover:scale-110">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Footer final -->
        <div class="relative z-10 mt-12 text-center text-sm text-gray-300">
            &copy; 2025 Votre entreprise d'immigration. Tous droits réservés.
        </div>
    </footer>
</template>

<script setup>
// Aucun script requis
</script>

<style scoped>
@keyframes bubble1 {
    0% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-10px) scale(1.05);
    }

    100% {
        transform: translateY(0) scale(1);
    }
}

@keyframes bubble2 {
    0% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(5px) translateX(-5px);
    }

    100% {
        transform: translateY(0) translateX(0);
    }
}

.animate-bubble1 {
    animation: bubble1 18s ease-in-out infinite;
}

.animate-bubble2 {
    animation: bubble2 24s ease-in-out infinite;
}
</style>