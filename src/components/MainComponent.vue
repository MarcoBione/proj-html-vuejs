<template>
    <main>
        <HeroMainComponent :herotitle="store.title" :subtitle="store.subtitle" :btninfo="store.btninfo" />
        <MainFirstComponent />
        <MainSecondComponent />
        <MainThirdComponentVue />
        <MainFourthComponentVue />
        <MainFifthComponentVue />
    </main>
</template>

<script>
import { store } from '../store';

import HeroMainComponent from './HeroMainComponent.vue';

import MainFirstComponent from './MainFirstComponent.vue';
import MainSecondComponent from './MainSecondComponent.vue';
import MainThirdComponentVue from './MainThirdComponent.vue';
import MainFourthComponentVue from './MainFourthComponent.vue';
import MainFifthComponentVue from './MainFifthComponent.vue';

import FooterComponent from './FooterComponent.vue';

export default {

    name: 'MainComponent',

    components: {
        HeroMainComponent,
        MainFirstComponent, MainSecondComponent, MainThirdComponentVue, MainFourthComponentVue, MainFifthComponentVue,
        FooterComponent
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