<template>
    <div class="_mybg">

        <div class="bg-white _mysecondsectionrounded">

            <div class="container py-5">

                <div class="text-center">
                    <p class="text-uppercase _mylighttxt">Maxcoach available courses</p>

                    <h2 class="_mydarktxt">Access <span class="_mytxt">Smart Tutoring</span> Program For Benefits</h2>
                </div>

                <div class="row">

                    <div class="col-4 py-4 d-flex justify-content-between" v-for="card, index in store.smartTutoring">
                        <div class="card d-flex border border-0">

                            <div>
                                <img :src="'/course-portal/images/' + card.img" class="card-img-top img-fluid"
                                    alt="cardimage">
                            </div>


                            <div class="card-body p-0 py-3">
                                <h5 class="card-title _mydarktxt fw-bold">{{ card.name }}</h5>
                                <p class="card-text _mycardparagraph">{{ card.infographic }}</p>
                                <button class="btn _mycardbtn">{{ card.btninfo }}</button>
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
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 200px;
    height: 176px;
    display: block;
}

._mysecondsectionrounded {
    border-bottom-right-radius: 800px;
}
</style>