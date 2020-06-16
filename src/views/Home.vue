<!--HTML-->
<template>
    <div>
        <Master>
            <template v-slot:contents>
                <Slider></Slider>
                <Catagory></Catagory>
                <PopularCatagory></PopularCatagory>
                <JobListing></JobListing>
                <FeaturedCandidates></FeaturedCandidates>
                <TopCompanies></TopCompanies>
                <JobSearchingWrap></JobSearchingWrap>
                <Testimonial></Testimonial>
            </template>
        </Master>
    </div>
</template>


<!--JS-->
<script>
    import Master from "../components/layouts/Master";
    import Slider from "../components/layouts/partials/home/Slider";
    import Catagory from "../components/layouts/partials/home/Catagory";
    import PopularCatagory from "../components/layouts/partials/home/PopularCatagory";
    import JobListing from "../components/layouts/partials/home/JobListing";
    import FeaturedCandidates from "../components/layouts/partials/home/FeaturedCandidates";
    import TopCompanies from "../components/layouts/partials/home/TopCompanies";
    import JobSearchingWrap from "../components/layouts/partials/home/JobSearchingWrap";
    import Testimonial from "../components/layouts/partials/home/Testimonial";


    export default {
        name: "Home",
        components: {
            Master,
            Slider,
            Catagory,
            PopularCatagory,
            JobListing,
            FeaturedCandidates,
            TopCompanies,
            JobSearchingWrap,
            Testimonial
        },
    }
</script>


<!--CSS-->
<style scoped></style>

