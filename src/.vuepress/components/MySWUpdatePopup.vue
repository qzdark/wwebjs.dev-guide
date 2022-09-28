<template>
    <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
        <div v-if="enabled" class="my-sw-update-popup">
            {{ message }}<br>
            <button @click="reload">{{ buttonText }}</button>
        </div>
    </SWUpdatePopup>
</template>
  
<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
    components: { SWUpdatePopup }
}
</script>
  
<style>
    .my-sw-update-popup {
        background-color: var(--scrollbar-background);
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        left: 26rem;
        padding: 1em;
        border: 1px solid #3eaf7c;
        border-radius: 4px;
        box-shadow: 0 4px 16px rgb(0 0 0 / 50%);
        text-align: center;
        z-index: 100;

        @media (max-width: 959px) {
            left: 23.4rem;
        }

        @media (max-width: 719px) {
            left: 1rem;
        }
    }

    .my-sw-update-popup button {
        border: 1px solid var(--scrollbar-background);
        background-color: var(--scrollbar-background);
        color: var(--theme-color);
        cursor: pointer;
    }
</style>