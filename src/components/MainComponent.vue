<template>
    <main>
        <HeroMainComponent :herotitle="store.title" :subtitle="store.subtitle" :btninfo="store.btninfo" />
        <MainFirstComponent />
        <MainSecondComponent />
    </main>
</template>

<script>
import { store } from '../store';

import HeroMainComponent from './HeroMainComponent.vue';

import MainFirstComponent from './MainFirstComponent.vue';
import MainSecondComponent from './MainSecondComponent.vue';

export default {

    name: 'MainComponent',

    components: {
        HeroMainComponent, MainFirstComponent, MainSecondComponent,
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