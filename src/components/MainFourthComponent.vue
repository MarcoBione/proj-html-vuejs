<template>
    <div class="bg-white">
        <div class="container">
            <div class="row">
                <div class="col p-0" v-for="card, index in store.maxCoachData">
                    <div class="card py-5 h-100 rounded-0">
                        <div class="card-body text-center d-flex flex-column justify-content-between">
                            <h5 class="card-title _mydarktxt fw-semibold mb-5">{{ card.name }}</h5>
                            <p class="card-text _mytxt fw-bolder fs-1 mb-5">{{ card.number }}</p>
                            <h6 class="text-uppercase _mylighttxt fw-semibold">{{ card.stats }}</h6>
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

<style lang="scss" scoped></style>