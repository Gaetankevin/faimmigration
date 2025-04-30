<template>
    <Services />



    <section id="why-choose-us" class="bg-[#F3F4F6] py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
            <!-- Titre principal -->
            <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-4 animate-fade-down animate-delay-[200ms]">
                Pourquoi Choisir Notre Agence ?
            </h2>
            <!-- Description -->
            <p class="text-[#1F2937] mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[400ms]">
                Nous mettons un point d'honneur à offrir un service transparent et personnalisé. Découvrez les
                avantages
                de travailler avec nous.
            </p>

            <!-- Avantages -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
                <div v-for="(advantage, index) in advantages" :key="index" :class="[
                    'bg-white p-6 rounded-3xl shadow-xl border border-white transition transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden',
                    `animate-fade-up animate-delay-[${index * 200 + 500}ms]`
                ]">
                    <!-- Bulle décorative -->
                    <div class="absolute -top-10 -right-10 w-24 h-24 bg-[#25D366]/20 rounded-full z-0"></div>

                    <div class="relative z-10">
                        <div class="text-[#FF7A00] text-4xl mb-4">
                            <i :class="advantage.icon"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-[#116530] mb-2">{{ advantage.title }}</h3>
                        <p class="text-[#1F2937]">{{ advantage.description }}</p>
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






    <section id="testimonials" class="bg-white py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
            <!-- En-tête -->
            <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-6 animate-fade-down animate-delay-[1400ms]">
                Témoignages de Nos Clients
            </h2>
            <p class="text-[#1F2937] mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[1600ms]">
                Découvrez ce que nos clients disent de nous après avoir été accompagnés dans leurs projets
                d'immigration.
            </p>

            <!-- Témoignages -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(testimonial, index) in testimonials" :key="index" :class="[
                    'bg-[#F3F4F6] p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden',
                    `animate-fade-up animate-delay-[${index * 200 + 1800}ms]`
                ]">
                    <!-- Bulle décorative -->
                    <div class="absolute -top-10 -right-10 w-24 h-24 bg-[#25D366]/20 rounded-full z-0"></div>

                    <div class="relative z-10">
                        <div class="text-[#FF7A00] text-5xl mb-4">❝</div>
                        <p class="text-[#4B5563] italic mb-4">{{ testimonial.feedback }}</p>
                        <p class="font-bold text-[#116530]">{{ testimonial.name }}</p>
                        <p class="text-sm text-[#1F2937]">{{ testimonial.role }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Décor de bulles flottantes -->
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-[#25D366]/10 rounded-full z-0 blur-xl"></div>
        <div class="absolute top-0 right-0 w-40 h-40 bg-[#FF7A00]/10 rounded-full z-0 blur-xl"></div>
    </section>

    <section id="contact-us" class="bg-white py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
            <!-- Titre -->
            <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-6 animate-fade-down animate-delay-[2400ms]">
                Contactez-Nous
            </h2>
            <p class="text-[#116530] mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[2600ms]">
                Prêt à commencer votre projet d'immigration ? Contactez-nous dès maintenant et obtenez l'aide dont
                vous
                avez besoin.
            </p>

            <!-- Bouton d'Email -->
            <a href="mailto:contact@immigration.com"
                class="inline-block bg-white text-[#116530] px-6 py-3 rounded-lg shadow-md hover:bg-[#F3F4F6] hover:text-[#116530] transition-all duration-300 transform hover:scale-105 animate-fade-up animate-delay-[2800ms]">
                <span class="flex items-center justify-center gap-2">
                    <i class="fas fa-envelope"></i> Envoyer un Email
                </span>
            </a>
        </div>

        <!-- Décor de bulles flottantes -->
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-[#25D366]/20 rounded-full z-0 blur-xl"></div>
        <div class="absolute top-0 right-0 w-40 h-40 bg-[#FF7A00]/20 rounded-full z-0 blur-xl"></div>
    </section>



</template>

<script setup>
import Services from '@/components/Services.vue';

const advantages = [
    {
        icon: 'fas fa-headset',
        title: 'Accompagnement Personnalisé',
        description: 'Nous écoutons vos besoins et vous guidons à chaque étape de votre projet d\'immigration, en tenant compte de vos spécificités.',
    },
    {
        icon: 'fas fa-file-alt',
        title: 'Démarches Simplifiées',
        description: 'Nous vous simplifions les démarches administratives pour que vous puissiez vous concentrer sur vos projets de vie.',
    },
    {
        icon: 'fas fa-clipboard-check',
        title: 'Suivi Complet',
        description: 'Nous assurons un suivi constant de vos dossiers et vous informons à chaque étape pour une totale tranquillité d\'esprit.',
    },
]
const testimonials = [
    {
        feedback: "Grâce à cette agence, j'ai pu obtenir mon visa étudiant rapidement et sans stress. Leur soutien et leur disponibilité sont inégalés.",
        name: "Jean Dupont",
        role: "Étudiant à Montréal",
    },
    {
        feedback: "L'équipe a été très réactive et m'a aidé à obtenir mon regroupement familial sans aucune complication. Je recommande vivement.",
        name: "Marie Dubois",
        role: "Regroupement Familial",
    },
    {
        feedback: "Un service impeccable pour ma demande de résidence permanente. J'ai été informé à chaque étape et tout s'est déroulé sans accroc.",
        name: "Ali Ahmed",
        role: "Résidence Permanente",
    },
]
</script>

<style scoped>
/* Animations */
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

/* Additional styles for sections */
.bg-blue-600 {
    background-color: #2563eb;
}
</style>

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