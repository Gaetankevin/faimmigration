<template>
    <section id="about" class="relative bg-[#F3F4F6] py-24 overflow-hidden">
        <!-- Bulles décoratives -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-[#25D366]/20 rounded-full blur-2xl z-0"></div>
        <div class="absolute bottom-0 left-0 w-40 h-40 bg-[#FF7A00]/10 rounded-full blur-xl z-0"></div>

        <div class="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <!-- Image -->
            <div class="w-full md:w-1/2">
                <img src="/flyers.jpg" alt="équipe" class="rounded-3xl shadow-xl w-full h-auto">
            </div>

            <!-- Texte sous forme de bulles -->
            <div class="w-full md:w-1/2 space-y-6">
                <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-[#116530]">
                    <h3 class="text-xl font-semibold text-[#116530] mb-2">Une expertise reconnue</h3>
                    <p class="text-[#1F2937] leading-relaxed">
                        Fondée par des experts en mobilité internationale, notre agence a accompagné avec succès des
                        centaines de familles et d’étudiants.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-[#25D366]">
                    <h3 class="text-xl font-semibold text-[#116530] mb-2">Un parcours sur-mesure</h3>
                    <p class="text-[#1F2937] leading-relaxed">
                        Chaque projet est unique. Nous adaptons notre accompagnement à votre réalité, de la première
                        étape à votre installation.
                    </p>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-[#FF7A00]">
                    <h3 class="text-xl font-semibold text-[#116530] mb-2">Des valeurs fortes</h3>
                    <p class="text-[#1F2937] leading-relaxed">
                        Éthique, transparence et efficacité sont au cœur de notre mission. Nous sommes votre partenaire
                        de confiance.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>