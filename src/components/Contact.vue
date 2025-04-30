<template>
    <section id="contact" class="relative bg-white py-24 overflow-hidden">
        <!-- Bulles flottantes -->
        <div class="absolute top-10 left-10 w-36 h-36 bg-[#25D366]/20 rounded-full blur-2xl animate-float-slow"></div>
        <div class="absolute bottom-16 right-8 w-24 h-24 bg-[#FF7A00]/20 rounded-full blur-xl animate-float-slower">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Image et texte -->
            <div class="relative bg-cover bg-center min-h-[350px] flex flex-col justify-center text-center md:text-left px-6 py-10 rounded-2xl  overflow-hidden"
                style="background-image: url('/avion.png');">
                <div class="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl"></div>
                <div class="relative z-10">
                    <h2 class="text-3xl md:text-4xl font-bold text-[#116530] mb-4">Envolez-vous vers un nouveau départ
                    </h2>
                    <p class="text-[#1F2937] max-w-md">
                        Chez {{ companyName }}, chaque projet mérite d’aller jusqu’au bout. <br>
                        Contactez-nous dès aujourd’hui.
                    </p>
                </div>
            </div>

            <!-- Formulaire -->
            <form @submit.prevent="submitForm" class="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
                <div>
                    <label for="name" class="block text-[#1F2937] font-medium">Nom complet</label>
                    <input v-model="form.name" type="text" id="name" required
                        class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#25D366] focus:outline-none"
                        placeholder="Votre nom">
                </div>

                <div>
                    <label for="email" class="block text-[#1F2937] font-medium">Email</label>
                    <input v-model="form.email" type="email" id="email" required
                        class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#25D366] focus:outline-none"
                        placeholder="Votre email">
                </div>

                <div>
                    <label for="message" class="block text-[#1F2937] font-medium">Message</label>
                    <textarea v-model="form.message" id="message" required rows="4"
                        class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#25D366] focus:outline-none"
                        placeholder="Votre message..."></textarea>
                </div>

                <button type="submit"
                    class="w-full bg-[#25D366] text-white py-3 rounded-md font-semibold hover:bg-[#1ba64e] transition">
                    Envoyer le message
                </button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { config } from '@/config'

const companyName = ref(config.companyName)

const form = ref({
    name: '',
    email: '',
    message: ''
})

const submitForm = () => {
    console.log('Form submitted', form.value)
    form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
@keyframes float-slow {
    0% {
        transform: translateY(0px) translateX(0px);
    }

    50% {
        transform: translateY(-10px) translateX(5px);
    }

    100% {
        transform: translateY(0px) translateX(0px);
    }
}

@keyframes float-slower {
    0% {
        transform: translateY(0px) translateX(0px);
    }

    50% {
        transform: translateY(8px) translateX(-4px);
    }

    100% {
        transform: translateY(0px) translateX(0px);
    }
}

.animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
}

.animate-float-slower {
    animation: float-slower 14s ease-in-out infinite;
}
</style>