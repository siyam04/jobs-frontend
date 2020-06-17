<!--HTML-->
<template>
    <div class="popular_catagory_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title mb-40">
                        <h3>Popular Categories</h3>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-lg-4 col-xl-3 col-md-6" v-for="category in categories.data" v-bind:key="category.id">
                    <div class="single_catagory">
                        <a href="#"><h4>{{category.name}}</h4></a>
                        <p><span>{{category.job_count}}</span>Available Jobs</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<!--JS-->
<script>
    import axios from 'axios';

    export default {
        name: "PopularCatagory",
        data() {
            return {
                categories: [],
            }
        },
        created() {
            axios.get(`https://galib04.pythonanywhere.com/api/category/`).then(response => {
                // this.categories = response.data.slice(0, 5);
                this.categories = response.data
                console.log(this.categories)
            })
        }
    }
</script>


<!--CSS-->
<style scoped></style>

