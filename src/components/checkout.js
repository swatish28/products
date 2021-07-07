import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
   padding: 10px;
   margin: 10px 0;
`;

const Checkout = (props) => {
    return (
        <div>
            <Button onClick={() => props.onBack()}>Back</Button>
            {props?.selectedItem?.map((item, index) => {
                return (
                    <div key={item}>
                        <span>{item}</span>
                    </div>
                )
            })}
            <Button>Payment</Button>
        </div>
    )
}

export default Checkout;
