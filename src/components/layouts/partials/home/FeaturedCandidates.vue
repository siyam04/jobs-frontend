<!--HTML-->
<template>
     <div class="featured_candidates_area">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title text-center mb-40">
                        <h3>Featured Candidates</h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="candidate_active owl-carousel">

                        <div class="single_candidates text-center" v-for="candidate in candidates.data" v-bind:key="candidate.id">
                            <div class="thumb">
                                <img src="https://colorlib.com/preview/theme/jobboard2/img/candiateds/1.png" alt="">
                            </div>
                            <a href="#"><h4>{{candidate.seeker_name}}</h4></a>
                            <p>Designation</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!--JS-->
<script>
    import axios from "axios";

    export default {
        name: "FeaturedCandidates",
        data() {
            return {
                candidates: [],
            }
        },
        created() {
            axios.get(`https://galib04.pythonanywhere.com/api/job/1/seeker/`).then(response => {
                this.candidates = response.data
                console.log(this.candidates)
            })
        }
    }
</script>


<!--CSS-->
<style scoped></style>


