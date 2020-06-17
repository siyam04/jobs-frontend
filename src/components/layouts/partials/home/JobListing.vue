<!--HTML-->
<template>
      <div class="job_listing_area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="section_title">
                        <h3>Job Listing</h3>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="brouse_job text-right">
                        <a href="#" class="boxed-btn4">Browse More Job</a>
                        <!--<router-link class="boxed-btn4" :to="{name: 'Home'}">Browse More Job</router-link>-->
                    </div>
                </div>
            </div>

            <div class="job_lists">
                <div class="row">

                    <div class="col-lg-12 col-md-12" v-for="job in jobs.data" v-bind:key="job.id">
                        <div class="single_jobs white-bg d-flex justify-content-between">
                            <div class="jobs_left d-flex align-items-center">
                                <div class="thumb">
                                    <img src="https://colorlib.com/preview/theme/jobboard2/img/svg_icon/1.svg" alt="">
                                </div>
                                <div class="jobs_conetent">
                                    <a href="#"><h4>{{job.job_title}}</h4></a>
                                    <div class="links_locat d-flex align-items-center">
                                        <div class="location">
                                            <p> <i class="fa fa-map-marker"></i>{{job.job_location}}</p>
                                        </div>
                                        <div class="location">
                                            <p> <i class="fa fa-clock-o"></i>{{job.employment_status}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="jobs_right">
                                <div class="apply_now">
                                    <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                    <a href="#" class="boxed-btn3">Apply Now</a>
                                </div>
                                <div class="date">
                                    <p>{{job.application_deadline}}</p>
                                </div>
                            </div>
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
        name: "JobListing",
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

