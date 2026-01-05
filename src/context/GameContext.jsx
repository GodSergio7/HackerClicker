import { createContext, useState } from "react";

// 1. Creamos la "Nube" (Contexto) FUERA del componente.
// La exportamos para que otros componentes puedan "enchufarse".
export const GameContext = createContext();

// 2. Creamos el "Proveedor" (El componente que envuelve tu App).
// Este SÍ es un componente de React normal.
export const GameProvider = ({ children }) => {

    // --- ESTADO (Tus variables) ---
    const [lines, setLines] = useState(0);
    const [linesPerSecond, setLinesPerSecond] = useState(0);

    //array de inventario
    const [inventory, setInventory] = useState({
        1: 0,
        2: 0,
        3: 0
    });

    //Funcion para comprar
    const comprarItem = (item) => {
        if (lines >= item.price) {//comparar si el usuario tiene dinero suficiente
            //restar dinero
            setLines(lines - item.price)
            //añadir al inventario
            setInventory({ ...inventory, [item.id]: inventory[item.id] + 1 })
            //buff de los items pasivos
            if (item.type === 'auto') {
                setLinesPerSecond(linesPerSecond + item.buff)
            }
        } else {// si no tiene saldra este mensaje
            console.log("Dinero insuficiente")
        }
    }

    // --- EMPAQUETADO ---  
    const value = {
        lines,
        setLines,
        linesPerSecond,
        setLinesPerSecond,
        inventory,      
        setInventory,   
        comprarItem     
    };

    // --- RENDERIZADO ---
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};