<!--HTML-->
<template>
    <div>
        <Master>
            <template v-slot:contents>
                
            </template>
        </Master>
    </div>
</template>


<!--JS-->
<script>
    import Master from "../components/layouts/Master";
    import Slider from "../components/layouts/partial/home/Slider";
    import Catagory from "../components/layouts/partial/home/Catagory";
    import PopularCatagory from "../components/layouts/partial/home/PopularCatagory";
    import JobListing from "../components/layouts/partial/home/JobListing";
    import FeaturedCandidates from "../components/layouts/partial/home/FeaturedCandidates";
    import TopCompanies from "../components/layouts/partial/home/TopCompanies";
    import JobSearchingWrap from "../components/layouts/partial/home/JobSearchingWrap";
    import Testimonial from "../components/layouts/partial/home/Testimonial";


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

