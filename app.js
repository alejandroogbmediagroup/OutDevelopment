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
            prices: [8400, 7900, 8200, 9000, 10000, 10200, 7500],
        }
    },
})

app.mount('#myApp')