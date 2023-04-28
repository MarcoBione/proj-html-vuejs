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

                <!-- second part -->

                <div class="d-flex align-items-center py-5">

                    <!-- sx section -->
                    <div class="w-50 py-4 position-relative">

                        <img class="position-absolute _myshape01" src="/course-portal/images/maxcoach-shape-05-150x150.png"
                            alt="">

                        <img class="position-absolute _myshape02" src="/course-portal/images/maxcoach-shape-07.png" alt="">

                        <div class="position-relative text-center _myvideo">

                            <img class="rounded-3 _myvideopreview shadow-lg"
                                src="/course-portal/images/home-2-popup-video-poster.jpg" alt="video_preview">

                            <div class="position-absolute text-center _myyoutube">
                                <img src="/course-portal/images/icon-youtube-play.png" alt="youtube_play_button">
                            </div>

                        </div>

                    </div>

                    <!-- dx section -->
                    <div class="w-50 py-4">
                        <div class="text">
                            <p class="text-uppercase _mylighttxt">Get started <span
                                    class="_mydarktxt fw-bolder">effortlessly</span>
                            </p>
                            <h2 class="_mydarktxt fw-bold">Enjoy Our <span class="_mytxt fw-lighter">Companionship</span>
                            </h2>
                            <p class="_mylighttxt">Sneek peek into what has in store for you on our online teaching and
                                mentoring portal. Seek for some hidden hints of early-bird rewards as well.
                            </p>

                            <button class="_mydownloadbtn">
                                Download free guide book ->
                            </button>

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
    width: 200px;
    height: 176px;
    display: block;
}

._mysecondsectionrounded {
    border-bottom-right-radius: 800px;
}

._myvideopreview {
    width: 500px;

}

._myyoutube {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

._myvideo {
    scale: 95%;
    transition: scale 0.5s;

    &:hover {
        scale: 100%;
    }
}

._myshape01 {
    top: 25%;
}

._myshape02 {
    right: 0;
    bottom: 0;
}
</style>