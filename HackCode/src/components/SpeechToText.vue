<template>
    <div>
        <h1>Voice to Text</h1>
        <button @click="startSpeechRecognition">Start Listening</button>
        <p>{{ recognizedText }}</p>
    </div>
</template>

<script>
import annyang from "annyang";

export default {
    data() {
        return {
            recognizedText: "",
        };
    },
    methods: {
        startSpeechRecognition() {
            if (annyang) {
                const commands = {
                    "*text": (text) => {
                        this.recognizedText = text;
                    },
                };

                annyang.addCommands(commands);
                annyang.start();
            }
        },
    },
    beforeUnmount() {
        annyang.abort();
        annyang.removeCommands();
    },
};
</script>
