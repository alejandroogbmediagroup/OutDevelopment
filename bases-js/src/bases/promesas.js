    // console.log("Inicio");

    // new Promise((resolve, reject) => {
    //         console.log("cuerpo de la promesa");
    //         reject("Promesa resuelta con ERROR");
    //     })
    //     .then((msg) => console.log("YEI!!!!!!!"))
    //     .catch(console.log);
    // console.log("Fin");

    const getHeroByIdAsync = (id) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const hero = getHeroById(id)

                if (hero) {
                    resolve(hero)
                } else {
                    reject('Heroe no existe')
                }

            }, 1000);

        });
    }



    getHeroByIdAsync(3)
        .then(h => {
            console.log(`El héroe es: ${ h.name }`)
        })
        .catch(console.log)