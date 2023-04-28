<template>
    <div class="_myfirstmainsection">

        <div class="container">

            <div class="text-center">
                <p class="text-uppercase">Stimulated to learn</p>

                <h2>Featured Online Courses</h2>
            </div>

            <div class="row">

                <div class="col-6 d-flex p-3 align-items-center" v-for="card, index in   store.cardInfo  ">
                    <div class="circular-portrait">
                        <img :src="'/course-portal/images/' + card.imgs" :alt="'Author' + card.id">
                    </div>
                    <div>
                        <div>
                            <p class="_mytxt"><span v-if="card.price >= 0">$</span>{{ card.price }}<small
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
                <button>
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