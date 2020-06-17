<!--HTML-->
<template>
    <div class="top_companies_area">
        <div class="container">
            <div class="row align-items-center mb-40">
                <div class="col-lg-6 col-md-6">
                    <div class="section_title">
                        <h3>Top Companies</h3>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="brouse_job text-right">
                        <a href="#" class="boxed-btn4">Browse More Job</a>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-4 col-xl-3 col-md-6" v-for="job in jobs.data" v-bind:key="job.id">
                    <div class="single_company">
                        <div class="thumb">
                            <img src="https://colorlib.com/preview/theme/jobboard2/img/svg_icon/5.svg" alt="">
                        </div>
                        <a href="#"><h3>{{job.job_title}}</h3></a>
                        <p> <span>50 (static)</span> Available position</p>
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
        name: "TopCompanies",
        data() {
            return {
                jobs: [],
            }
        },
        created() {
            axios.get(`https://galib04.pythonanywhere.com/api/job/`).then(response => {
                this.jobs = response.data
                console.log(this.jobs)
            })
        }
    }
</script>


<!--CSS-->
<style scoped></style>


