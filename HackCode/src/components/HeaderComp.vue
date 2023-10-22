<template>
    <header>
        <v-container class="header">
            <v-row>
                <v-col class="logo" cols="10" md="3">
                    <router-link to="/"> Empower<span>AI</span> </router-link>
                </v-col>
                <v-col class="navs" cols="7" xl="6" lg="8">
                    <router-link to="/chat">AI Chat</router-link>
                    <router-link to="/face">Face Recognition</router-link>
                    <router-link to="/sign">Sign Language</router-link>
                    <router-link to="/health">Health Management</router-link>
                </v-col>
                <v-col
                    cols="2"
                    class="navs-btn"
                    @click="toggle"
                    :class="{ active: active }"
                >
                    <div></div>
                </v-col>
                <v-col
                    cols="12"
                    class="navs-mobile"
                    :class="{ active: active }"
                >
                    <div class="bg" @click="toggle"></div>
                    <div class="nav">
                        <router-link to="/" @click="toggle">Home</router-link>
                        <router-link to="/chat" @click="toggle"
                            >AI Chat</router-link
                        >
                        <router-link to="/sign" @click="toggle"
                            >Sign Language</router-link
                        >
                        <router-link to="/face" @click="toggle"
                            >Facial Expressions</router-link
                        >
                        <router-link to="/health" @click="toggle"
                            >Health Management</router-link
                        >
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </header>
</template>

<script>
export default {
    name: "HeaderComp",
    data() {
        return {
            active: false,
        };
    },
    methods: {
        toggle() {
            this.active = !this.active;
        },
    },
};
</script>

<style scoped>
header {
    height: var(--header);
    background: #f3f3f3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000000;
}

.header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.header > .v-row {
    align-items: center;
    position: relative;
    justify-content: space-between;
}

.logo {
    font-size: calc(var(--font) * 2.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
}

a {
    text-decoration: none;
    color: #000;
}

.navs a {
    font-size: calc(var(--font) * 1.2s);
    font-weight: 200;
    text-decoration: none;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 10px;
}

.navs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.navs a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    border-radius: 4px;
    bottom: 0;
    left: 50%;
    background: var(--main);
    transition: 0.3s;
}

.navs a:hover::after {
    width: 100%;
    left: 0;
}

.navs-btn {
    display: none;
    flex-direction: row;
    justify-content: flex-end;
    cursor: pointer;
}

.navs-btn div {
    width: 24px;
    height: 3px;
    border-radius: 10px;
    background: #000;
    position: relative;
    transition: 0.3s;
}

.navs-btn div::after,
.navs-btn div::before {
    content: "";
    position: absolute;
    height: inherit;
    background: inherit;
    border-radius: inherit;
    right: 0;
}

.navs-btn:hover > div {
    background: var(--main);
}

.navs-btn div::after {
    top: -10px;
    width: 160%;
}
.navs-btn div::before {
    bottom: -10px;
    width: 120%;
}

.navs-mobile {
    display: none;
    flex-direction: row;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
}

.navs-mobile .nav {
    display: flex;
    flex-direction: column;
    background: #fff;
}

.navs-mobile.active {
    display: flex;
}

.navs-mobile a {
    width: 100%;
    padding: 20px;
    font-size: calc(var(--font) * 1.2);
}

.navs-mobile .bg {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1200px) {
    .navs {
        display: none;
    }
    .navs-btn {
        display: flex;
    }
}
</style>
