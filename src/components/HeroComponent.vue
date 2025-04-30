<template>
    <section id="home" class="relative overflow-hidden py-20">
        <!-- Image animée à gauche (sans effet blur) -->
        <div
            class="absolute top-0 left-0 w-full md:w-1/2 h-full transform translate-x-[-100%] opacity-0 animate-slide-in-blur z-0">
            <img src="/avion.png" alt="immigration" class="w-full h-full object-cover" />
        </div>

        <!-- Overlay semi-transparent pour lisibilité du texte -->
        <div class="absolute inset-0 bg-white/70 md:bg-white/50 z-0"></div>

        <!-- Contenu principal -->
        <div
            class="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <!-- Placeholder droite -->
            <div class="w-full md:w-1/2"></div>

            <!-- Texte -->
            <div class="w-full md:w-1/2 text-center md:text-right opacity-0 translate-y-8 animate-fade-up">
                <h1 class="text-4xl md:text-5xl font-bold text-[#116530] leading-tight">
                    Réalisez vos rêves <br />
                    avec notre agence d'immigration
                </h1>
                <p class="mt-4 text-lg text-[#1F2937]">
                    Accompagnement personnalisé, démarches simplifiées, succès assuré.
                </p>
                <a href="#contact"
                    class="inline-block mt-6 bg-[#25D366] hover:bg-[#116530] text-white px-6 py-3 rounded-lg shadow transition">
                    Contactez-nous
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes slide-in-blur {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
}

@keyframes fade-up {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-slide-in-blur {
    animation: slide-in-blur 1.4s ease-out forwards;
}

.animate-fade-up {
    animation: fade-up 1s ease-out 0.4s forwards;
}

#home {
    background: linear-gradient(160deg, #116530 50%, #ffffff 50%);
}

@media screen and (max-width: 768px) {
    #home {
        background: linear-gradient(160deg, #116530 60%, #ffffff 40%);
    }

    .animate-slide-in-blur {
        animation: slide-in-blur 1.4s ease-out forwards;
    }

    .animate-fade-up {
        animation: fade-up 1s ease-out 0.4s forwards;
    }

    .text-center {
        text-align: center;
    }

    .md\:text-right {
        text-align: center;
        /* Change text alignment on small screens */
    }

    /* Optionally adjust image size on small screens */
    .absolute img {
        object-position: center;
        object-fit: cover;
    }
}
</style>
