const app = Vue.createApp({
    // template: `
    //     <h1>Hola Mundo</h1>
    //     <p>Desde app.js</p>
    // `

    data() {
        return {
            quote: "Im Batman",
            message: 'Dataaaa!!!!',
            author: 'D10'
        }
    },
})

app.mount('#myApp')