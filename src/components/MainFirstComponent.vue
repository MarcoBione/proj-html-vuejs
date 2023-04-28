<template>
    <div class="_mybg">

        <div class="container py-4">

            <div class="text-center">
                <p class="text-uppercase _mylighttxt">Stimulated to learn?</p>

                <h2 class="_mydarktxt fw-bolder">Featured Online Courses</h2>
            </div>

            <div class="row">

                <div class="col-6 d-flex p-3 align-items-center" v-for="card, index in   store.cardInfo  ">
                    <div class="circular-portrait">
                        <img :src="'/course-portal/images/' + card.imgs" :alt="'Author' + card.id">
                    </div>
                    <div>
                        <div>
                            <p class="_mytxt fw-bolder"><span v-if="card.price >= 0">$</span>{{ card.price }}<small
                                    v-if="card.price >= 0">.00</small></p>
                            <p>{{ card.infocourse }}</p>
                        </div>
                        <div class="d-flex">
                            <p>{{ card.lessons }} lessons</p>
                            <p>{{ card.studends }} studends</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="text-center py-3">
                <button class="_mybtn">
                    View all courses ->
                </button>
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
p {
    margin: 5px;
}

img {
    width: 160px;
}

.circular-portrait {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;

}
</style>