//create Vue app
//used to flip images like HW6, but I also included captions

const app = Vue.createApp({
    data() {
        return {
            imageDisplayOne: "https://cdn.glitch.global/8c8e78d5-b7d9-40c9-9408-5a158450a9db/me_filling_barrels.jpg?v=1670877400118",
            imageOne: "https://cdn.glitch.global/8c8e78d5-b7d9-40c9-9408-5a158450a9db/me_filling_barrels.jpg?v=1670877400118",
            imageTwo: "https://cdn.glitch.global/8c8e78d5-b7d9-40c9-9408-5a158450a9db/me_repairing_bottling_line.jpg?v=1670877411366",
            imageCaption: "Filling barrels at my first brewing job - Ithaca Beer Co.",
            captionOne: "Filling barrels at my first brewing job - Ithaca Beer Co.",
            captionTwo: "Repairing the bottling line - Siebel Institute in Munich, Germany.",
        }
    },
    methods: {
        mouseOnImage(value, caption) {
            this.imageDisplayOne = value
            this.imageCaption = caption
        },
        mouseOffImage(value, caption) {
            this.imageDisplayOne = value
            this.imageCaption = caption
        },
    }
})