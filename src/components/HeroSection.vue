<template>
    <section
        id="home"
        class="relative pt-8 sm:pt-12 lg:pt-16 pb-16 lg:pb-24 bg-[#f6f6f6]"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main Hero Grid: Left Content (7 cols) + Right Image (5 cols) -->
            <div
                class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
                <!-- Left Content Column -->
                <div
                    class="lg:col-span-7 flex flex-col justify-between min-h-[580px]"
                >
                    <div class="space-y-6 sm:space-y-8">
                        <!-- Eyebrow (No pill background, plain mono) -->
                        <div
                            class="font-mono text-xs text-zinc-500 uppercase tracking-widest"
                        >
                            FULL STACK DEVELOPER / MOBILE DEVELOPER
                        </div>

                        <!-- Main Editorial Headline with Italic Display Accent -->
                        <h1
                            class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-[1.02]"
                        >
                            I turn complex business processes into practical web
                            and mobile applications.
                        </h1>

                        <!-- Concise Description -->
                        <p
                            class="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl font-normal"
                        >
                            I develop web and mobile applications by combining
                            thoughtful interfaces, scalable backend systems,
                            structured databases, and practical business
                            solutions.
                        </p>

                        <!-- Rectangular Sharp Buttons -->
                        <div class="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href="#projects"
                                @click.prevent="scrollTo('#projects')"
                                class="px-6 py-3.5 bg-black text-white hover:bg-zinc-800 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-block rounded-none"
                            >
                                VIEW SELECTED WORK
                            </a>

                            <button
                                @click="$emit('open-cv')"
                                class="px-6 py-3.5 bg-[#e8e8e8]/80 hover:bg-[#dfdfdf] border border-zinc-300 text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-none"
                            >
                                DOWNLOAD CV
                            </button>
                        </div>
                    </div>

                    <!-- Bottom Left 3-Column Metadata Strip -->
                    <div
                        class="pt-8 mt-12 border-t border-zinc-300 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs"
                    >
                        <!-- Based In -->
                        <div class="space-y-1">
                            <div class="text-zinc-500 uppercase tracking-wider">
                                BASED IN
                            </div>
                            <div
                                class="text-zinc-900 font-sans text-sm font-medium"
                            >
                                Kota Tangerang, Indonesia
                            </div>
                        </div>

                        <!-- Experience -->
                        <div class="space-y-1">
                            <div class="text-zinc-500 uppercase tracking-wider">
                                EXPERIENCE
                            </div>
                            <div
                                class="text-zinc-900 font-sans text-sm font-medium"
                            >
                                Full Stack Software Developer
                            </div>
                        </div>

                        <!-- Status -->
                        <div class="space-y-1">
                            <div class="text-zinc-500 uppercase tracking-wider">
                                STATUS
                            </div>
                            <div
                                class="text-zinc-900 font-sans text-sm font-medium flex items-center gap-1.5"
                            >
                                <span class="w-2 h-2 bg-black shrink-0"></span>
                                <span>Available for new projects</span>
                            </div>
                            <div class="text-zinc-500 text-[11px]">
                                — Q3 2026
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Visual Portrait Column -->
                <div class="lg:col-span-5">
                    <div class="space-y-3">
                        <!-- Portrait Image Container -->
                        <div
                            class="relative bg-zinc-200 aspect-[4/5] overflow-hidden"
                        >
                            <img
                                src="/images/myself.png"
                                alt="Muhammad Rifqiandi — Developer Portrait"
                                class="w-full h-full object-cover filter"
                            />
                        </div>

                        <!-- Monospace Caption Bar Under Photo -->
                        <div
                            class="pt-2 border-t border-zinc-300 flex justify-between items-center font-mono text-[11px] text-zinc-500 uppercase tracking-wider"
                        >
                            <div>FIG. 01 — MUHAMMAD RIFQIANDI</div>
                            <div>GMT+7</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { developerData } from "../data/portfolioData";

defineEmits(["open-cv"]);

function scrollTo(href) {
    const el = document.querySelector(href);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
</script>
