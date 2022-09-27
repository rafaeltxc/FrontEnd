tsParticles.load("tsParticles", {
    particles: {
        move: {
            enable: true,
            speed: 0.15
        },
        opacity: {
            value: 1,
            random: {
                enable: true,
                minimumValue: 0.1
            },
            animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0,
                sync: false
            }        
        },
        size: {
            value: { min: 1, max: 3 }
        }
    }
})