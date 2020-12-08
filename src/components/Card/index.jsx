import React, {useRef, useContext} from 'react'
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import {Container, Label} from './styles'

export default function Card({ data, index, listIndex }) {
    const ref = useRef();
    const { move } = useContext(BoardContext);

    //dragRef é o segundo parametro que contem a referencia do elemento que está sendo arrastado
   const [ { isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index, listIndex},
        //collect verifica se o uusário está arrastando aquele item ou não
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            //card que está sendo arrastado
            const draggedIndex = item.index;

            //card alvo
            const targetIndex = index;

            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
                return
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;
            
            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter){
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter){
                return
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
            
            item.index = targetIndex;
            item.listIndex = targetListIndex;
            
        }
    })

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {/* Para cada item do array, renderiza o Label, que está passando a cor
                    no arquivo styles
                */}
                {data.labels.map(label => <Label key={label} color={label} /> )}
            </header>
            <p>{data.content}</p>
            
            {/* verifica quais itens tem o data.user, e mostra a imagem somente se tiver */}
            { data.user && <img src={data.user} alt="" /> }
        </Container>
    )
}
