<template>
    <v-container>
        <h2>AI Assistant</h2>
        <v-row class="features">
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/mic.svg')" alt="" />
                    </div>
                    <div class="body">
                        Navigation and control are now easier! Your personal
                        assistant Alan will help to navigate, write, message,
                        and control everything in your smartphone just by voice
                        commands.
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
                        protection. Chats synchronized with AI model, so user
                        can come back to the same question after a while.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/brain.svg')" alt="" />
                    </div>
                    <div class="body">
                        Alan AI is a additional package implemented to
                        EmpowerAI. All the data stored on a servers of company
                        developed package Alan.
                    </div>
                </div>
            </v-col>
        </v-row>
        <h3>Try Yourself</h3>
        <v-row class="Example">
            <v-col cols="12">
                <div class="chat">
                    <h5>EmpowerAI</h5>
                    <div class="chatbox">
                        <div class="list">
                            <div ref="containerRef" class="audio-wrapper"></div>
                            <div
                                class="message"
                                :class="el.role"
                                v-for="el in messages"
                                :key="el"
                            >
                                <span v-if="el.role === 'user'">You: </span>
                                <span v-else>AI: </span> {{ el.content }}
                            </div>
                        </div>
                        <form>
                            <label
                                ><input
                                    type="text"
                                    placeholder="Hello! I am EmpowerAI, your personal assistant"
                                    v-model="input"
                                    :disabled="isDisabled"
                                />
                                <div
                                    @click="
                                        ($event) =>
                                            toggleSpeechRecognition($event)
                                    "
                                    class="voice"
                                >
                                    <img
                                        :src="require('@/assets/img/mic.svg')"
                                        alt=""
                                        v-if="!listening"
                                    />
                                    <img
                                        :src="require('@/assets/img/stop.svg')"
                                        alt=""
                                        v-else
                                    />
                                </div>
                                <button @click="($event) => msg($event)">
                                    <img
                                        :src="require('@/assets/img/plane.svg')"
                                        alt=""
                                    />
                                </button>
                            </label>
                        </form>
                        <v-row> </v-row>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import annyang from "annyang";

export default {
    data() {
        return {
            input: "",
            messages: [],
            isDisabled: false,
            listening: false,
            recognizedText: "",
            context: null,
            analyser: null,
            array: new Uint8Array(64),
            num: 32,
            width: 10,
            myElements: [],
            animationFrameId: null,
            hasNavigatorMedia: null,
        };
    },
    methods: {
        loop() {
            this.animationFrameId = window.requestAnimationFrame(this.loop);
            this.analyser.getByteFrequencyData(this.array);

            for (let i = 0; i < this.num; i++) {
                const height = this.array[i + this.num];
                this.myElements[i].style.minHeight = `${height / 2}px`;
                this.myElements[i].style.opacity = `${0.008 * height}`;
            }
        },
        initWaves() {
            if (this.context) {
                this.context = null;
                this.myElements = [];
                this.analyser = null;
                this.$refs.containerRef.replaceChildren();
                window.cancelAnimationFrame(this.animationFrameId);

                return;
            }

            if ("mediaDevices" in navigator) {
                // comment
            } else {
                this.hasNavigatorMedia = false;
                return;
            }

            for (let i = 0; i < this.num; i++) {
                const bar = document.createElement("div");
                bar.classList.add("bar");
                bar.style.background = "var(--main)";
                bar.style.minWidth = `${this.width}px`;
                this.$refs.containerRef.appendChild(bar);
            }

            this.myElements = document.getElementsByClassName("bar");

            this.context = new AudioContext();
            this.analyser = this.context.createAnalyser();

            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
                    const src = this.context.createMediaStreamSource(stream);
                    src?.connect(this.analyser);
                    this.loop();
                })
                .catch((err) => console.log(err));
        },
        msg(e) {
            e.preventDefault();
            this.stopSpeechRecognition();
            // const message = this.input;
            this.messages.push({
                role: "user",
                content: this.input,
            });
            this.input = "Loading...";
            this.isDisabled = true;

            axios
                .post("http://localhost:3000/api/chat", this.messages)
                .then((res) => {
                    this.messages.push({
                        role: "assistant",
                        content: res.data.message.content,
                    });
                    this.speak(res.data.message.content);
                })
                .catch(function (error) {
                    console.log(error);
                }).finally(() => {
                    this.input = "";
                    this.isDisabled = false;
                })
        },
        toggleSpeechRecognition(e) {
            e.preventDefault();
            if (e.keyCode == 13) {
                e.preventDefault();
                return false;
            }
            if (!this.listening) {
                this.startSpeechRecognition();
                this.initWaves();
            } else {
                this.stopSpeechRecognition();
                this.initWaves();
            }
        },
        startSpeechRecognition() {
            if (annyang) {
                annyang.addCallback("result", (phrases) => {
                    this.recognizedText = phrases[0];
                    this.input = this.recognizedText;
                });

                annyang.start();
                this.listening = true;
            }
        },
        stopSpeechRecognition() {
            if (annyang) {
                annyang.abort();
                // this.recognizedText = "";
                this.listening = false;
            }
        },
        loadVoices() {
            this.voices = window.speechSynthesis.getVoices();
        },
        speak(text) {
            if (!"speechSynthesis" in window) return
            const msg = new SpeechSynthesisUtterance();
            msg.text = text;
            msg.voice = speechSynthesis.getVoices().filter(function (voice) {
                return voice.name == "Google UK English Male";
            })[0];

            window.speechSynthesis.speak(msg);
        },
    },
    mounted() {
        window.speechSynthesis.cancel();
        this.loadVoices();
        // window.speechSynthesis.onvoiceschanged = function () {
        //     this.loadVoices();
        // };
    },
    beforeUnmount() {
        this.stopSpeechRecognition();
    },
};
</script>

<style scoped>
label .voice {
    background: #fff;
}
.audio-wrapper {
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    background-color: #fff;
    overflow: hidden;
    filter: blur(6px);
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
}
.bar {
    margin: 2px;
    border-radius: 30px;
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
    z-index: 10;
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

label button {
    padding: 10px;
    width: 10%;
    outline: none;
    background: var(--main);
    display: flex;
    justify-content: center;
    align-items: center;
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

label button img {
    height: 100%;
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
    justify-content: stretch;
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
    .chat {
        padding: 40px 10px;
    }
}
</style>
