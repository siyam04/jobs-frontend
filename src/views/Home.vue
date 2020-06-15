<!--HTML-->
<template>
    <div>
        <Master>
            <template v-slot:contents></template>
        </Master>
    </div>
</template>


<!--JS-->
<script>
    import Master from "../components/layouts/Master";

    export default {
        name: "Home",
        components: {Master},
    }
</script>


<!--CSS-->
<style scoped></style>

