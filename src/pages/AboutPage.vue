<template>
    <section id="about" class="bg-white ">
        <section id="about" class="relative bg-[#116530] py-24">
            <!-- Image de fond en flou léger -->
            <div class="absolute inset-0 z-0 bg-cover bg-center opacity-50" style="background-image: url('');"></div>

            <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div class="text-center mb-16">
                    <!-- Titre -->
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up">
                        À Propos de Notre Agence
                    </h2>

                    <!-- Sous-titre avec animation -->
                    <p
                        class="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto animate-fade-up animate-delay-[200ms]">
                        Spécialisée dans l'accompagnement des candidats à l'immigration, notre agence offre une
                        expertise unique et un suivi personnalisé pour toutes vos démarches. Que vous souhaitiez
                        étudier, travailler ou vous installer au Cameroun, nous simplifions chaque étape de votre
                        parcours.
                    </p>
                </div>

                <!-- Section d'animation avec iconographie et texte -->
                <div class="grid md:grid-cols-2 gap-12">
                    <div
                        class="flex flex-col items-center md:items-start bg-[#F3F4F6] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-up animate-delay-[400ms]">
                        <!-- Illustration ou Icone -->
                        <i class="fas fa-globe text-5xl text-[#FF7A00] mb-6"></i>
                        <h3 class="text-2xl font-semibold text-[#1F2937] mb-4">Simplification des démarches</h3>
                        <p class="text-[#1F2937] text-lg text-center md:text-left">
                            Nous vous offrons un accompagnement de A à Z, en simplifiant les démarches administratives
                            et en vous guidant tout au long du processus d'immigration.
                        </p>
                    </div>
                    <div
                        class="flex flex-col items-center md:items-start bg-[#F3F4F6] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-up animate-delay-[600ms]">
                        <!-- Illustration ou Icone -->
                        <i class="fas fa-handshake text-5xl text-[#FF7A00] mb-6"></i>
                        <h3 class="text-2xl font-semibold text-[#1F2937] mb-4">Partenariats de confiance</h3>
                        <p class="text-[#1F2937] text-lg text-center md:text-left">
                            Nous collaborons avec des partenaires de renom pour vous garantir les meilleures options en
                            matière de visa, logement, et installation.
                        </p>
                    </div>
                </div>

                <!-- Testimonial ou Message plus engageant -->
                <div class="mt-16 text-center">
                    <p class="text-lg md:text-xl text-white max-w-2xl mx-auto">
                        "Avec notre expertise, nous vous aidons à réaliser votre rêve d’immigration sans tracas, en
                        toute confiance et transparence."
                    </p>
                </div>
            </div>
        </section>


        <!-- Section 2: Notre Histoire -->
        <section id="history" class="bg-[#FFFFF] py-24">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-6 animate-fade-down animate-delay-[600ms]">
                    Notre Histoire
                </h2>
                <p class="text-[#1F2937] mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[800ms]">
                    Fondée il y a plus de 10 ans, notre agence a pour mission d'accompagner les personnes dans leur
                    projet
                    d’immigration. Avec des conseillers experts et une approche humaine, nous avons aidé des milliers de
                    clients à réaliser leurs rêves d'une nouvelle vie à l'étranger.
                </p>
                <div class="space-y-16"> <!-- Utilisation de space-y pour espacer les étapes -->
                    <!-- Etape 1 (Gauche) -->
                    <div class="relative flex items-center justify-start animate-fade-up animate-delay-[1000ms]">
                        <div
                            class="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center text-xl font-bold shadow-xl z-10">
                            1
                        </div>
                        <div class="ml-16 flex flex-col text-left">
                            <h3 class="text-2xl font-semibold text-[#116530] mb-4">Fondation de l'agence</h3>
                            <p class="text-[#1F2937] text-lg">
                                Notre agence a été fondée avec une vision claire : aider les gens à réaliser leur rêve
                                d'immigration en toute sérénité. Dès le départ, nous avons mis l'humain au cœur de nos
                                préoccupations.
                            </p>
                        </div>
                    </div>

                    <!-- Etape 2 (Droite) -->
                    <div class="relative flex items-center justify-end animate-fade-up animate-delay-[1200ms]">

                        <div class="mr-16 flex flex-col text-right">
                            <h3 class="text-2xl font-semibold text-[#116530] mb-4">Développement du réseau</h3>
                            <p class="text-[#1F2937] text-lg">
                                En quelques années, nous avons établi des partenariats solides avec des experts du
                                secteur et des autorités d'immigration. Cela nous permet de vous offrir des solutions
                                personnalisées et efficaces.
                            </p>
                        </div>
                        <div
                            class="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center text-xl font-bold shadow-xl z-10">
                            2
                        </div>
                    </div>

                    <!-- Etape 3 (Gauche) -->
                    <div class="relative flex items-center justify-start animate-fade-up animate-delay-[1000ms]">
                        <div
                            class="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center text-xl font-bold shadow-xl z-10">
                            3
                        </div>
                        <div class="ml-16 flex flex-col text-left">
                            <h3 class="text-2xl font-semibold text-[#116530] mb-4">Internationalisation</h3>
                            <p class="text-[#1F2937] text-lg">
                                Nous avons élargi notre présence à l'international, en ouvrant des bureaux dans
                                plusieurs pays. Aujourd'hui, nous offrons une assistance à l'échelle mondiale.
                            </p>
                        </div>
                    </div>

                    <!-- Etape 4 (Droite) -->
                    <div class="relative flex items-center justify-end animate-fade-up animate-delay-[1600ms]">

                        <div class="mr-16 flex flex-col text-right">
                            <h3 class="text-2xl font-semibold text-[#116530] mb-4">Aujourd'hui</h3>
                            <p class="text-[#1F2937] text-lg">
                                Avec plus de 10 ans d'expérience, nous avons accompagné des milliers de clients dans
                                leurs démarches d'immigration, toujours avec la même passion et le même engagement.
                            </p>
                        </div>
                        <div
                            class="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center text-xl font-bold shadow-xl z-10">
                            4
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- Section 3: Nos Valeurs -->
        <section id="values" class="py-24 bg-[#F3F4F6]">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-6 animate-fade-down animate-delay-[1200ms]">
                    Nos Valeurs
                </h2>
                <p class="text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[1400ms]">
                    À notre agence, nous croyons fermement en des valeurs humaines et professionnelles qui nous guident
                    chaque jour :
                </p>
                <div class="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <!-- Flèches -->
                    <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2">

                    </div>

                    <!-- Valeur 1: Transparence -->
                    <div
                        class="bg-white p-8 rounded-full shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out animate-fade-up animate-delay-[1600ms] mx-auto">
                        <h3 class="text-xl font-semibold text-[#116530] mb-4">Transparence</h3>
                    </div>

                    <!-- Valeur 2: Engagement -->
                    <div
                        class="bg-white p-8 rounded-full shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out animate-fade-up animate-delay-[1800ms] mx-auto mt-16">
                        <h3 class="text-xl font-semibold text-[#116530] mb-4">Engagement</h3>
                    </div>

                    <!-- Valeur 3: Excellence -->
                    <div
                        class="bg-white p-8 rounded-full shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out animate-fade-up animate-delay-[2000ms] mx-auto mt-16">
                        <h3 class="text-xl font-semibold text-[#116530] mb-4">Excellence</h3>
                    </div>
                </div>
            </div>
        </section>




        <!-- Section 4: Notre Équipe -->
        <section id="team" class="bg-gray-50 py-24">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-6 animate-fade-down animate-delay-[2200ms]">
                    Notre Équipe
                </h2>
                <p class="text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[2400ms]">
                    Notre équipe est composée de professionnels expérimentés dans le domaine de l’immigration. Nous
                    avons une équipe dédiée à chaque étape de votre projet, de la consultation initiale à la gestion de
                    votre dossier administratif. Voici quelques-uns de nos experts :
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <!-- Membre 1 -->
                    <div
                        class="bg-white p-6 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <img src="https://via.placeholder.com/300" alt="Equipe 1"
                            class="w-32 h-32 mx-auto rounded-full mb-4 transform hover:scale-110 transition-all duration-300 ease-in-out" />
                        <h3 class="text-xl font-semibold text-[#116530] mb-2">John Doe</h3>
                        <p class="text-gray-600">Conseiller en immigration</p>
                        <p class="text-gray-500">Avec 10 ans d'expérience dans le secteur, John accompagne les étudiants
                            et les familles dans leurs démarches.</p>
                    </div>

                    <!-- Membre 2 -->
                    <div
                        class="bg-white p-6 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <img src="https://via.placeholder.com/300" alt="Equipe 2"
                            class="w-32 h-32 mx-auto rounded-full mb-4 transform hover:scale-110 transition-all duration-300 ease-in-out" />
                        <h3 class="text-xl font-semibold text-[#116530] mb-2">Alice Ndong</h3>
                        <p class="text-gray-600">Responsable des partenariats</p>
                        <p class="text-gray-500">Alice s'assure de maintenir des relations solides avec nos partenaires
                            à l'international pour faciliter le processus d'immigration.</p>
                    </div>

                    <!-- Membre 3 -->
                    <div
                        class="bg-white p-6 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out">
                        <img src="https://via.placeholder.com/300" alt="Equipe 3"
                            class="w-32 h-32 mx-auto rounded-full mb-4 transform hover:scale-110 transition-all duration-300 ease-in-out" />
                        <h3 class="text-xl font-semibold text-[#116530] mb-2">Marc Tchuente</h3>
                        <p class="text-gray-600">Responsable administratif</p>
                        <p class="text-gray-500">Marc gère la documentation et veille à ce que chaque dossier soit
                            traité avec la plus grande attention et précision.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Section 5: Contactez-nous -->
        <section id="contact" class=" py-24">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-black mb-6 animate-fade-down animate-delay-[2600ms]">
                    Prêt à Commencer Votre Projet ?
                </h2>
                <p class="text-gray mb-12 max-w-2xl mx-auto animate-fade-down animate-delay-[2800ms]">
                    Contactez-nous dès aujourd’hui pour commencer votre projet d’immigration. Nous serons ravis de vous
                    aider à réaliser vos rêves.
                </p>

                <a href="mailto:contact@immigration-cm.com"
                    class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition animate-fade-up animate-delay-[3000ms]">
                    Envoyer un Email
                </a>
            </div>
        </section>
    </section>
</template>

<script setup>
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
</style>