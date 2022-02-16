const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>{{ 1+1}}</p>
    // `
    data() {
        return {
            quote: "I'm a Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola Mundo')
            this.author = 'D11'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')