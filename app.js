const app = Vue.createApp({
    // template: `
    //     <h1>Hola Mundo</h1>
    //     <p>Desde app.js</p>
    // `

    data() {
        return {
            value: 0,
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'src/img/bitcoin-btc-logo.png',
            changePercent: 10,
            price: 8400,
            color: 'f4f4f4',
            //prices: [8400, 7900, 8200, 9000, 10000, 10200, 7500],
            pricesWithDays: [
                { day: 'Monday', value: 8400 }, { day: 'Tuesday', value: 7900 }, { day: 'Wednesday', value: 8200 }, { day: 'Thursday', value: 9000 }, { day: 'Friday', value: 10000 }, { day: 'Saturday', value: 10200 }, { day: 'Sunday', value: 7500 }
            ],
            showPrices: false,

        }
    },

    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        },
        convertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.price
        }
    },

    watch: {
        showPrices(newValue, oldValue) {
            console.log(newValue, oldValue)
        }
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices

            this.color = this.color.split('').reverse().join('')
        }
    }
})

app.mount('#myApp')