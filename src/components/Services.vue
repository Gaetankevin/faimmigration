<template>
    <section id="services" class="bg-white py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-4 animate-fade-down animate-delay-[200ms]">
                Nos Services
            </h2>
            <p class="text-[#1F2937] mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[400ms]">
                Nous vous accompagnons dans toutes les étapes de votre projet d'immigration, avec expertise et
                bienveillance.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
                <div v-for="(service, index) in services" :key="index" :class="[
                    'bg-[#F3F4F6] p-6 rounded-3xl shadow-xl border border-white transition transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden',
                    `animate-fade-up animate-delay-[${index * 200 + 500}ms]`
                ]">
                    <!-- Bulle décorative -->
                    <div class="absolute -top-10 -right-10 w-24 h-24 bg-[#25D366]/20 rounded-full z-0"></div>

                    <div class="relative z-10">
                        <div class="text-[#FF7A00] text-4xl mb-4">
                            <i :class="service.icon"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-[#116530] mb-2">{{ service.title }}</h3>
                        <p class="text-[#1F2937]">{{ service.description }}</p>
                    </div>
                </div>
            </div>

            <a href="about#service"
                class="inline-block mt-12 bg-[#25D366] hover:bg-[#116530] text-white font-medium px-6 py-3 rounded-lg shadow transition">
                En savoir plus
            </a>
        </div>

        <!-- Décor de bulles flottantes -->
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-[#25D366]/10 rounded-full z-0 blur-xl"></div>
        <div class="absolute top-0 right-0 w-40 h-40 bg-[#FF7A00]/10 rounded-full z-0 blur-xl"></div>
    </section>
</template>

<script setup>
const services = [
    {
        icon: 'fas fa-passport',
        title: 'Visa Étudiant',
        description: 'Obtenez votre visa pour étudier à l’étranger grâce à un accompagnement personnalisé.',
    },
    {
        icon: 'fas fa-users',
        title: 'Regroupement Familial',
        description: 'Réunissez votre famille légalement et rapidement, avec un suivi complet.',
    },
    {
        icon: 'fas fa-home',
        title: 'Résidence Permanente',
        description: 'Préparez votre dossier pour une installation définitive dans le pays de votre choix.',
    },
]
</script>

<style scoped>
@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-down {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-up {
    animation: fade-up 0.8s ease-out both;
}

.animate-fade-down {
    animation: fade-down 0.8s ease-out both;
}
</style>