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
            <div class="row" v-for="(category) in categories" v-bind:key="category.id">
                <div class="col-lg-4 col-xl-3 col-md-6">
                    <div class="single_catagory">
                        <a href="#"><h4>{{category.name}}</h4></a>
                        <p> <span>{{category.job_count}}</span> Available position</p>
                    </div>
                </div>
<!--                <div class="col-lg-4 col-xl-3 col-md-6">-->
<!--                    <div class="single_catagory">-->
<!--                        <a href="#"><h4>Marketing</h4></a>-->
<!--                        <p> <span>50</span> Available position</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-xl-3 col-md-6">-->
<!--                    <div class="single_catagory">-->
<!--                        <a href="#"><h4>Telemarketing</h4></a>-->
<!--                        <p> <span>50</span> Available position</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-xl-3 col-md-6">-->
<!--                    <div class="single_catagory">-->
<!--                        <a href="#"><h4>Software & Web</h4></a>-->
<!--                        <p> <span>50</span> Available position</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-xl-3 col-md-6">-->
<!--                    <div class="single_catagory">-->
<!--                        <a href="#"><h4>Administration</h4></a>-->
<!--                        <p> <span>50</span> Available position</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-xl-3 col-md-6">-->
<!--                    <div class="single_catagory">-->
<!--                        <a href="#"><h4>Teaching & Education</h4></a>-->
<!--                        <p> <span>50</span> Available position</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-xl-3 col-md-6">-->
<!--                    <div class="single_catagory">-->
<!--                        <a href="#"><h4>Engineering</h4></a>-->
<!--                        <p> <span>50</span> Available position</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-xl-3 col-md-6">-->
<!--                    <div class="single_catagory">-->
<!--                        <a href="#"><h4>Garments / Textile</h4></a>-->
<!--                        <p> <span>50</span> Available position</p>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';


    export default {
        name: "PopularCatagory",
        data () {
            return {
                categories: [],
            }
        },
        created() {
            axios.get(`http://galib04.pythonanywhere.com/api/category/`).then(response => {
                // this.categories = response.data.slice(0, 5);
                this.categories = response.data
                console.log(this.categories)
            })
        }
    }
</script>

<style scoped>

</style>