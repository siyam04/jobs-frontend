<template>

    <!-- header-start -->
    <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid ">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2">
                                <div class="logo">
                                    <!--<a href="index.html">-->
                                    <router-link :to="{name: 'Home'}">
                                        <img src="https://colorlib.com/preview/theme/jobboard2/img/logo.png" alt="logo">
                                    </router-link>
                                    <!--</a>-->
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <!--<li><a href="#">home</a></li>-->
                                            <li><router-link :to="{name: 'Home'}">Home</router-link></li>

                                            <li><a href="#">Browse Job</a></li>
                                            <!--<li><router-link :to="{name: 'BrowseJob'}">Browse Job</router-link></li>-->

                                            <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="#">Candidates </a></li>
                                                    <li><a href="#">job details</a></li>
<!--                                                <li><router-link :to="{name: 'JobDetails'}">Job Details</router-link></li>-->
                                                    <li><a href="#">elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="#">blog</a></li>
                                                    <li><a href="#">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div class="Appointment">
                                    <div class="phone_num d-none d-xl-block">
                                        <a href="#">Log in</a>
                                    </div>
                                    <div class="d-none d-lg-block">
                                        <a class="boxed-btn3" href="#">Post a Job</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <!-- header-end -->

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>