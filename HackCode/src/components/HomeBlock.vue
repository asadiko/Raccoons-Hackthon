<template>
    <v-row class="feature" :class="{ opossite: data.opossite }">
        <v-col cols="12" md="6" class="body" :class="{ nomain: !data.main }">
            <h3 v-if="data.main">{{ data.main }}</h3>
            <div>
                <h5>{{ data.title }}</h5>
                <p>
                    {{ data.body }}
                </p>
                <router-link :to="data.link">See More</router-link>
            </div>
        </v-col>
        <v-col cols="6" md="2" class="features">
            <div v-for="el in data.features" :key="el">
                <div class="icon">
                    <i
                        ><img
                            :src="require('@/assets/img/' + el.icon + '.svg')"
                            alt=""
                    /></i>
                </div>
                <div class="name">{{ el.name }}</div>
            </div>
        </v-col>
        <v-col cols="6" md="4" class="img">
            <img :src="require('@/assets/img/' + data.img)" alt="" />
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {};
    },
};
</script>

<style scoped>
.opossite {
    flex-direction: row-reverse;
}

.body.nomain {
    justify-content: center;
}

.feature {
    margin-top: 50px;
}

.body > div {
    box-shadow: 0px 0px 20px #e5e2e2;
    background: #fff;
    border-radius: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
}

.body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.features {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h5 {
    color: var(--main);
    font-size: calc(var(--font) * 1.5);
    font-weight: 500;
    padding: 10px;
}

.body p {
    font-weight: 300;
    font-size: calc(var(--font) * 1.25);
    line-height: 25px;
    padding: 10px;
}

.features .icon {
    height: 65px;
    width: 65px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.features > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
}

.features .name {
    white-space: nowrap;
    font-size: var(--font);
}

.img {
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.img img {
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
}

h3 {
    margin-bottom: 10%;
    padding-left: 50px;
    width: 100%;
}

a {
    color: #000;
    padding: 10px;
    font-size: calc(var(--font) * 1.25);
}

@media screen and (max-width: 1280px) {
    h3 {
        margin-left: 0;
        text-align: center;
    }

    .space {
        height: 0;
    }
}
</style>
