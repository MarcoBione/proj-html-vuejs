<template>
    <div class="_mybg">

        <!-- section title -->
        <div class="container pt-5 pb-3">

            <div class="text-center">
                <p class="text-uppercase _mylighttxt m-0">Great Words about maxcoach</p>

                <h2 class="_mydarktxt fw-semibold">Our <span class="_mytxt">top learners'</span>verbatim</h2>
            </div>

        </div>

        <!-- section for carousel -->
        <div class="_mycarousel debug">
            <div class="row">

                <div class="col d-flex p-4 flex-column justify-content-between" v-for="card, index in   store.learners ">

                    <div class="p-4 border border-2 rounded-3 bg-white">

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
                                <p class="m-0">/{{ card.occupation }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- section for promo -->
        <div class="text-center py-5 container position-relative">

            <p class="_mydarktxt m-0">Start today for getting <span class="_mytxt">Online Certification</span></p>
            <h2 class="_mydarktxt fw-bolder mb-4">You can be your own guiding star with our help!</h2>

            <button class="btn _mybtn">Get started now -></button>

            <img src="/course-portal/images/maxcoach-shape-02.png" alt="shape01" class="position-absolute _shape01">
            <img src="/course-portal/images/maxcoach-shape-01.png" alt="shape02" class="position-absolute _shape02">
            <img src="/course-portal/images/maxcoach-shape-09.png" alt="shape03" class="position-absolute _shape03">

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

._mycarousel {
    overflow-y: auto;
    width: 100%;
    height: auto;
}

._shape01 {
    bottom: 0;
    right: 0;
}

._shape02 {

    top: 50%;
    left: 0;
}

._shape03 {
    top: 0;
    left: 30%;
}
</style>