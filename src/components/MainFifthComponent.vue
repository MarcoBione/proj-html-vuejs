<template>
    <div class="_mylightbg debug">

        <div class="container py-5">

            <div class="row d-flex">


                <div class="col mt-4 mb-4">

                    <p class="_mylighttxt text-uppercase">
                        Enjoyable insights
                    </p>

                    <h4 class="_mydarktxt fw-bolder">
                        Most Viewed <span class="_mytxt fw-lighter">Best Blogs</span>
                    </h4>

                    <ul class="list-unstyled">
                        <li v-for="list, index in store.mostviewed">
                            <p class="_mydarktxt fw-bolder _mymenulinks"><span>-></span> {{ list.name }}</p>
                        </li>
                    </ul>

                </div>

                <div class="col mt-4 mb-4" v-for="cardviewed, index in store.mostviewedcards  ">
                    <div class="card shadow-lg ">

                        <img :src="'/course-portal/images/' + cardviewed.img" :alt="'artistblog' + cardviewed.id"
                            class="rounded-start-5">

                        <div class="card-body d-flex flex-column justify-content-between">
                            <p class="text-uppercase _mylighttxt">{{ cardviewed.type }}</p>
                            <h5 class="card-title _mydarktxt fw-bolder">{{ cardviewed.name }}</h5>
                            <div class="d-flex justify-content-between">
                                <p class="card-text m-0 _mylighttxt">{{ cardviewed.when }}</p>
                                <p class="card-text m-0 _mylighttxt">{{ cardviewed.viewers }} viewer<span
                                        v-if="cardviewed.viewers > 1">s</span></p>
                            </div>

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
    },

}
</script>

<style lang="scss" scoped>
.card {
    scale: 97%;
    width: 300px;
    border: none;
    transition: scale 0.3s;
}

.card:hover {
    scale: 100%;
}
</style>