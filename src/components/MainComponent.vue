<template>
    <main>
        <HeroMainComponent :herotitle="store.title" :subtitle="store.subtitle" :btninfo="store.btninfo" />
    </main>
</template>

<script>
import { store } from '../store';

import HeroMainComponent from './HeroMainComponent.vue';

export default {

    name: 'MainComponent',

    components: {
        HeroMainComponent
    },

    data() {
        return {
            store,
        }
    },
    methods: {

    },

}
</script>

<style lang="scss" scoped></style>