import React from "react";
import '../assets/styles.css';

const ItemListContainer = ({ titulo1, titulo2, descripcion1, descripcion2, precio1, precio2 }) => {
    return (
        <>
            <div>

                <div class="list-group paddingItemContainer ">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start noFixed">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{ titulo1 }</h5>
                    <small>Stock: 2</small>
                    </div>
                    <p class="mb-1"> { descripcion1 } </p>
                    <small>Precio: { precio1 }</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start noFixed">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"> { titulo2 } </h5>
                    <small class="text-muted">Stock: 3</small>
                    </div>
                    <p class="mb-1">{ descripcion2 }</p>
                    <small class="text-muted">Precio: { precio2 }</small>
                </a>
                </div>

            </div>

        </>
    )
}

export default ItemListContainer;