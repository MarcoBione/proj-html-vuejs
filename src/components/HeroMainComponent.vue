<template>
    <div class="container d-flex justify-content-between">
        <!-- sezione sx -->
        <section class="_myfirstherosection d-flex flex-column align-items-start justify-content-center w-50">
            <div>
                <h1 class="py-3">{{ herotitle }}</h1>
                <h3>{{ subtitle }}</h3>
            </div>

            <div class="py-3">
                <button>
                    {{ btninfo }}
                </button>
            </div>

            <p>Have questions? <span>Get Free Sample -></span></p>

        </section>

        <!-- sezione dx -->
        <section class="text-center w-50">
            <div class="debug position-relative">

                <div>
                    <img class="position-absolute _myposition08" src="/course-portal/images/maxcoach-shape-08.png"
                        alt="img">
                </div>

                <div>
                    <img class="position-absolute _myposition07" src="/course-portal/images/maxcoach-shape-07.png"
                        alt="img">
                </div>

                <div>
                    <img class="position-absolute _myposition02" src="/course-portal/images/maxcoach-shape-02.png" alt="">
                </div>

                <img src="/course-portal/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="Img"
                    class="_myheroimg">

            </div>
        </section>

    </div>
</template>

<script>
export default {

    name: 'HeroMainComponent',
    props: {
        herotitle: String,
        subtitle: String,
        btninfo: String,
    },

    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped></style>