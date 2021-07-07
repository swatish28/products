import React, { useState, useEffect } from 'react';
import CartList from './cart';
import styled from 'styled-components';

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

const ProductList = () => {
    const [products] = useState([
        'Creative Cloud All Apps** ₹4,230.30/month Inclusive of GST',
        'Photoshop ₹1,675.60 /month Inclusive of GST ',
        'Illustrator ₹1,675.60 /month Inclusive of GST',
        'Premiere Rush ₹1,675.60 /month Inclusive of GST',
        'After Effects ₹1,675.60 /month Inclusive of GST ',
    ]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [count, setCount] = useState(0);
    const [cartSelected, setCartSelected] = useState(false);
    const onAddClick = (name) => {
        let all = selectedItem?.includes(products[0]);
        if (!all) {
            if (name === products[0]) {
                setSelectedItem([products[0]]);
            } else {
                setSelectedItem((prev) => [...prev, name]);
            }
        }
        return
    }
    const onRemoveProduct = (index) => {
        selectedItem.splice(index, 1);
        setSelectedItem([...selectedItem])
    }

    useEffect(() => {
        setCount(selectedItem.length);
    }, [selectedItem])


    return (
        <div>
            <Button onClick={() => setCartSelected(true)}>Cart {count}</Button>
            {!cartSelected ? <> <h2>List of Adobe products subscription price – </h2>
                <List>
                    {products.map((item) => {
                        return (
                            <li>
                                <span>{item}</span>
                                <Button onClick={() => onAddClick(item)}>Add to cart</Button>
                            </li>
                        )
                    })}
                </List></> : <CartList selectedItem={selectedItem} onRemoveProduct={(ele) => onRemoveProduct(ele)} back={() => setCartSelected(false)} />}


        </div>
    )
}

export default ProductList;
