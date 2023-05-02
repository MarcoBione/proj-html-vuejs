<template>
    <header class="py-4 shadow-sm">

        <div class="container d-flex align-items-center justify-content-between">
            <!-- logo -->
            <img src="/course-portal/images/dark-logo.png" alt="Application-logo">

            <!-- navigation bar -->
            <nav class="d-flex align-items-center">
                <div class="dropdown" v-for="title, index in store.headerMenu">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ title.name }}
                    </button>
                    <ul class="dropdown-menu">
                        <li v-for="item, i in store.headerMenu[index].items"><a class="dropdown-item" href="#">{{ item
                        }}</a>
                        </li>
                    </ul>

                </div>

                <!-- login -->
                <span>
                    <!-- icona fontawesome login che non so importare -->
                </span>

                <!-- search bar -->
                <div class="input-group w-25 ">
                    <input type="text" class="form-control shadow-none" placeholder="Cerca..." aria-label="Username"
                        aria-describedby="basic-addon1">
                    <span class="input-group-text"
                        id="basic-addon1"><!--icona fontawesome lente che non so importare--></span>
                </div>
            </nav>

        </div>

    </header>
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
    width: 158px;
}
</style>