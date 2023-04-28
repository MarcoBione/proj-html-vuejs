<template>
    <div class="_mybg">

        <div class="container pt-5 pb-3">

            <div class="text-center">
                <p class="text-uppercase _mylighttxt m-0">Great Words about maxcoach</p>

                <h2 class="_mydarktxt fw-semibold">Our <span class="_mytxt">top learners'</span>verbatim</h2>
            </div>

        </div>
        <div class="carousel debug">
            <div class="row">

                <div class="col d-flex p-3 flex-column" v-for="card, index in   store.learners ">

                    <div>
                        <div>
                            <p class="_mydarktxt fw-bolder">{{ card.title }}</p>
                            <p>{{ card.paragraph }}</p>
                        </div>
                    </div>

                    <div class="circular-portrait">
                        <img :src="'/course-portal/images/' + card.profileimg" :alt="'Author' + card.id">
                        <div class="infobox">
                            <h4>{{ card.name }}</h4>
                            <p>/{{ card.occupation }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {

    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped>
.row img {
    width: 100px;
    border-radius: 50%;
}
</style>