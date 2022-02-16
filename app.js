const app = Vue.createApp({
    // template: `
    //     <h1>Hola Mundo</h1>
    //     <p>Desde app.js</p>
    // `

    data() {
        return {
            name: 'Bitcoin',
            img: 'src/img/bitcoin-btc-logo.png',
            changePercent: 0,
            //prices: [8400, 7900, 8200, 9000, 10000, 10200, 7500],
            pricesWithDays: [
                { day: 'Monday', value: 8400 }, { day: 'Tuesday', value: 7900 }, { day: 'Wednesday', value: 8200 }, { day: 'Thursday', value: 9000 }, { day: 'Friday', value: 10000 }, { day: 'Saturday', value: 10200 }, { day: 'Sunday', value: 7500 }
            ],
            showPrices: false,

        }
    },
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
        }
    }
})

app.mount('#myApp')