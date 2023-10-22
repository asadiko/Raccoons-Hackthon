<template>
    <v-app>
        <HeaderComp />
        <v-content class="view" fluid>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
    name: "App",
    components: {
        HeaderComp,
    },
    data: () => ({
        //
    }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
    --main: #ec6565;
    --font: 16px;
    --header: 120px;
}

* {
    font-family: "Outfit", sans-serif;
}

.v-container {
    max-width: 1500px !important;
}

html,
body {
    background: #f3f3f3;
}

.view {
    background: #f3f3f3;

    width: 100%;
    margin-top: var(--header);
    min-height: 100vh;
}
</style>
