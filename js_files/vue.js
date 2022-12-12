const app = Vue.createApp({
    data() {
        return {
            imageDisplayOne: "../images/me_filling_barrels.jpg",
            imageOne: "../images/me_filling_barrels.jpg",
            imageTwo: "../images/me_repairing_bottling_line.jpg",
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