<template>
    <v-container>
        <v-row class="first">
            <v-col cols="12" md="6">
                <div class="body">
                    <h1>Embrace inclusivity and unlock new possibilities</h1>
                    <div>
                        <h2>With Empower<span>AI</span></h2>
                        <div>
                            Start the jorney
                            <img
                                :src="require('@/assets/img/arrow.svg')"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6" class="img">
                <img :src="require('@/assets/img/1.png')" alt="iphone" />
            </v-col>
        </v-row>
        <div class="space"></div>
        <home-block :data="via" />
        <home-block :data="sn" />
        <home-block :data="fr" />
        <home-block :data="hm" />
    </v-container>
</template>

<script>
import HomeBlock from "@/components/HomeBlock.vue";

export default {
    components: {
        HomeBlock,
    },
    data() {
        return {
            via: {
                main: "AI Chat",
                title: "Virtual Assistant",
                body: "Our Chat with AI Assistant feature in our app, offering a selection of 62 AI models to choose from. Engage in dynamic conversations with the AI assistant of your choice, effortlessly accessing a vast pool of information. From answering queries to providing intelligent insights, our AI assistants enhance your app experience by delivering seamless and comprehensive assistance. Explore the power of AI and unlock a world of knowledge at your fingertips.",
                features: [
                    {
                        name: "Voice to text",
                        icon: "mic",
                    },
                    {
                        name: "Text to voice",
                        icon: "dynamic",
                    },
                    {
                        name: "ChatGPT",
                        icon: "brain",
                    },
                ],
                img: "2.png",
                link: "/chat",
            },
            fr: {
                title: "Face Recognition",
                body: "By entering in to the App, system will check emotional state of user, give detailed report and help to improve emotional condition of user. Report will be sent to the ChatGPT, or another selected model, to give best support and feedback.",
                features: [
                    {
                        name: "Facial expressions",
                        icon: "facial",
                    },
                    {
                        name: "Authorization",
                        icon: "lock",
                    },
                ],
                img: "3.png",
                link: "/face",
            },
            sn: {
                main: "Image Processing",
                title: "Sign Language Recognition",
                body: "Sign Language feature in our app, designed to empower individuals with disabilities. Users can demonstrate signs, which are seamlessly converted into words and sentences. This transformed text can then be conveniently input into ChatGPT, enhancing communication and simplifying the lives of users with disabilities. Experience a new level of inclusivity and ease with our Sign Language integration.",
                features: [
                    {
                        name: "Training model",
                        icon: "model",
                    },
                    {
                        name: "Real time chat",
                        icon: "chat",
                    },
                ],
                img: "4.png",
                opossite: true,
                link: "/sign",
            },
            voa: {
                title: "Voice Assistant",
                body: "Introducing our multifunctional Voice Assistant, a powerful combination of Speech-to-Text and Text-to-Speech capabilities. With this feature, accessing information becomes effortless. Simply speak your queries to the AI Assistant, and it provides comprehensive internet search results through voice responses while displaying corresponding text messages on the screen. Experience seamless voice-guided interactions with access to a wealth of information, making your app experience both convenient and informative.",
                features: [
                    {
                        name: "",
                        icon: "",
                    },
                ],
                img: "",
                link: "/voice",
            },
            hm: {
                title: "Scheduling",
                main: "Health Management",
                body: "Health Manager feature designed specifically for individuals with disabilities. Seamlessly improve task management and timing, including medication schedules. Stay on track with timely reminders and notifications, ensuring you never miss important tasks. Experience enhanced organization and efficiency with our user-friendly Health Manager, tailored to simplify your daily routine and improve overall productivity.",
                features: [
                    {
                        name: "Some Text",
                        icon: "health",
                    },
                    {
                        name: "Time Management",
                        icon: "time",
                    },
                ],
                img: "5.png",
                opossite: true,
                link: "/health",
            },
        };
    },
};
</script>

<style>
.space {
    width: 100%;
    height: 100px;
}

h1 {
    font-size: calc(var(--font) * 4);
    font-weight: 700;
    line-height: 81px;
    letter-spacing: 0em;
    text-align: left;
}

.first {
    height: calc(100vh - var(--header));
}

.first .body {
    max-width: 420px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    overflow: hidden;
    height: 100%;
}

.first > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 100%;
}

.img {
    height: 100%;
    display: flex;
    align-items: center;
}

.img > img {
    object-fit: scale-down;
    max-height: 100%;
}

.body > div {
    width: 100%;
    text-align: left;
}

h2 {
    font-style: normal;
    font-weight: 300;
    font-size: calc(var(--font) * 3);
    line-height: 60px;
}

span {
    color: var(--main);
}

.first .body > div > div {
    font-size: calc(var(--font) * 1.5);
    display: flex;
    align-items: center;
    opacity: 0.6;
    margin-top: 30px;
    z-index: 0;
}

.first .body > div img {
    width: 24px;
    height: 24px;
}

h3 {
    font-weight: 500;
    font-size: calc(var(--font) * 2.5);
    line-height: 45px;
    margin: 40px 0;
}
</style>

<style scoped>
@media screen and (max-width: 960px) {
    h1,
    h2 {
        text-align: center;
    }
    .first .body > div > div {
        justify-content: center;
    }

    .first .img {
        display: none;
    }

    .space {
        height: 0;
    }

    h1 {
        margin-top: 5%;
    }

    h3 {
        padding: 0 !important;
        margin: 0;
    }

    .first .body {
        justify-content: space-between;
        height: auto;
    }

    .first .body > div {
        margin-top: 30%;
    }

    .first .body > div > div {
        margin: 40px 0;
    }
}
</style>
