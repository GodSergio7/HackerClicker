import { useContext } from 'react';
import { items } from '../data/items';
import { GameContext } from '../context/GameContext';
function Tienda() {
    const { comprarItem } = useContext(GameContext);
    return (
        <>
            <div>
                <h2>Tienda</h2>
                {
                    items.map((item) => (
                        <div key={item.id} style={{ marginBottom: '10px' }}>
                            <button onClick={() => comprarItem(item)}>
                                Comprar {item.name} - {item.price} LOC
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Tienda