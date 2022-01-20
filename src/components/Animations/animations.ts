


export const variante = {
    init:{
        opacity:1,
        y:0,
    },
    out:{
        opacity:0,
        y:"-20vw",
    }
}

export const transitions = {
    duration:1,
    type: "spring",
    // type: "tween",
    // ease:"circInOut",
    ease:"anticipate",
    stiffness: 50,
    delay:.4
}

// initial="out"
//     animate="init"
//     exit="out"
//     variants={pageVariante}
//     transition={pageTransitions}