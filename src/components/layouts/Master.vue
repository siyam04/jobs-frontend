<!--HTML-->
<template>
    <div>
        <!--header-->
        <Header/>

        <!--contents slot-->
        <slot name="contents"></slot>

        <!--footer-->
        <Footer/>
    </div>
</template>


<!--JS-->
<script>
    import Header from "./partials/Header";
    import Footer from "./partials/Footer";

    export default {
        name: "Master",
        components: {Header, Footer},
    }
</script>


<!--CSS-->
<style scoped></style>

