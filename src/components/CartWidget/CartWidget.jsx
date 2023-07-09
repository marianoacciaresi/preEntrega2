import React from "react";
import "../assets/styles.css";

const CartWidget = ({ logo, menuItem }) => {
    return (
        <>
            <button type="button" class="btn btn-light"><span class="bi bi-cart"></span></button>
            <span class="badge rounded-pill badge-notification bg-danger">23</span>
        </>
    )
}

export default CartWidget;