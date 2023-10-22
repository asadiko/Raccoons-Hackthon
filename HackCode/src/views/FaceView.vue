<template>
    <v-container>
        <h2>Facial Expressions Recognition</h2>
        <v-row class="features">
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/mic.svg')" alt="" />
                    </div>
                    <div class="body">
                        By entering in to the App, system will check emotional
                        state of user, give detailed report and help to improve
                        emotional condition of user
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/lock.svg')" alt="" />
                    </div>
                    <div class="body">
                        All data stored on cloud server and secured by
                        protection. Data is used only in model tranings and
                        image filtering
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/brain.svg')" alt="" />
                    </div>
                    <div class="body">
                        We use number of AI models in our web and mobile
                        applications, so users can select any favorable. With
                        updates there will number of types of facial expressions
                    </div>
                </div>
            </v-col>
        </v-row>
        <h3>Try Yourself</h3>
        <v-row class="Example">
            <v-col cols="12" md="7" class="test">
                <div>
                    <button class="load" @click="loadFrame" v-if="!active">
                        Click to Load
                    </button>
                    <img :src="url" scrolling="no" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            url: "",
        };
    },
    methods: {
        loadFrame() {
            this.url = "http://localhost:8000/video";
            this.active = true;
        },
    },
};
</script>

<style scoped>
h2 {
    width: 100%;
    text-align: center;
    font-weight: 500;
    margin: 50px 0;
}

.feature {
    box-shadow: 0px 0px 20px #e5e2e2;
    background: #fff;
    border-radius: 10px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.icon {
    display: flex;
    justify-content: center;
    padding-bottom: 14px;
}

.Example {
    display: flex;
    justify-content: center;
}

.test > div {
    position: relative;
    display: flex;
    justify-content: center;
    height: 400px;
    max-width: 800px;
}

.test iframe {
    height: 100%;
    width: 100%;
    border: none;
}

.load {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: #fff;
}

.img {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    object-fit: contain;
    max-width: 100%;
}
</style>
