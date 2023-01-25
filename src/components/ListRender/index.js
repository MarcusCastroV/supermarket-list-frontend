import { ListCard } from '../ListCard'
import "./index.css"


export const ListRender = ({ list }) => {
    if(list?.length === 0) {
        return (
            <h3>
                 Sua lista está vazia, adicione um novo item clicando no botão "Adicionar"
            </h3>
        )
    }

    return (
        <div className="list-render-container">
            {
                list.map(item => <ListCard key={item?._id} item={item} />)
            }
        </div>
        
        )
}