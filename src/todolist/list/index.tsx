import * as React from 'react'
import {FriendItem} from "../types";

interface onDel {
    (index: number) : void
}

interface IProps{
    list: Array<FriendItem>,
    onDel: onDel
}

class List extends React.Component<IProps>{

    render() {
        const {
            list,
            onDel
        } = this.props
        return (
            <div>
                {list.map((item: FriendItem, idx: number) => <div key={item.id}>
                    {item.name} <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                     onDel(idx)
                }}>-</button>
                </div>)}
            </div>
        )
    }
}

export default List