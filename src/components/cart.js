import React, { useState } from 'react';
import styled from 'styled-components';
import Checkout from './checkout';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    li{
        margin: 1rem 0;
    }
`;

const Button = styled.button`
   padding: 10px;
   margin-left: 10px;
`;

const CartList = (props) => {
    const { selectedItem, onRemoveProduct, back } = props;
    const [confirmClicked, setConfirmedClicked] = useState(false);

    return (
        <div>
            {confirmClicked ? <Checkout onBack={() => setConfirmedClicked(false)} selectedItem={selectedItem} /> : <>
                <h2>Cart List -</h2>
                <button onClick={back}>Back</button>
                <List>
                    {selectedItem.map((item, index) => {
                        return (
                            <li key={item}>
                                <span>{item}</span>
                                <Button onClick={() => onRemoveProduct(index)}>Remove</Button>
                            </li>
                        )
                    })}
                </List>
                <Button onClick={() => setConfirmedClicked(true)}>Confirmation</Button>
            </>}

        </div>
    )
}

export default CartList;
