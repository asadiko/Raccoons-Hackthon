<template>
    <v-container>
        <h2>Health Assistant</h2>
        <v-row class="features">
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/mic.svg')" alt="" />
                    </div>
                    <div class="body">
                        Health Manager feature designed specifically for
                        individuals with disabilities. Seamlessly improve task
                        management and timing, including medication schedules.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/lock.svg')" alt="" />
                    </div>
                    <div class="body">
                        Experience enhanced organization and efficiency with our
                        user-friendly Task Manager, tailored to simplify your
                        daily routine and improve overall productivity.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/brain.svg')" alt="" />
                    </div>
                    <div class="body">
                        This feature written without implementation of any AI
                        and focused only on Task Management
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row class="example">
            <v-col cols="6">
                <img :src="require('@/assets/img/5.png')" alt="" />
            </v-col>
            <v-col cols="6">
                <img :src="require('@/assets/img/6.png')" alt="" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.example > div {
    display: flex;
    justify-content: center;
}

.message span {
    width: 40px;
    display: inline-block;
}

.message.assistant span {
    color: #00a67e;
}

.message {
    padding: 20px 10px;
    border-top: 1px solid #f3f3f3;
    max-width: 100%;
}
.chatbox {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.list {
    margin-bottom: 20px;

    overflow: auto;
    position: relative;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.chat {
    box-shadow: 0px 0px 20px #e5e2e2;
    background: #fff;
    border-radius: 10px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

label {
    border: 2px solid #f3f3f3;
    overflow: hidden;
    background: #fff;
    width: 100%;
    height: calc(var(--font) * 3);
    display: flex;
    border-radius: 10px;
}

label button,
label div {
    padding: 10px;
    width: 10%;
    outline: none;
    background: var(--main);
    display: flex;
    justify-content: center;
    align-items: center;
}

label img {
    height: 100%;
}

input {
    width: 80%;
    padding: 10px;
    background: #fff;
    outline: none;
    height: 100%;
    text-align: left;
}

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

@media screen and (max-width: 700px) {
    label button,
    label div {
        width: 20%;
    }
    label input {
        width: 80%;
    }
}
</style>
