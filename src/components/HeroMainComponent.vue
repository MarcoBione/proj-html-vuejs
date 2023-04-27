<template>
    <div class="d-flex">
        <!-- sezione sx -->
        <section class="_myfirstherosection">
            <div>
                <h1>{{ herotitle }}</h1>
                <h3>{{ subtitle }}</h3>
            </div>

            <div>
                <button>
                    {{ btninfo }}
                </button>
            </div>

            <p>Have questions? <span>Get Free Sample -></span></p>

        </section>

        <!-- sezione dx -->
        <section class="">

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