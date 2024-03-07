import styled from "styled-components"

export const StyledMovieGrid = styled.main`

    max-width: 1080px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 0px 16px;
    padding-right: 0;
    justify-content: space-between;
    box-sizing: border-box;
    // font-family: "Open Sans", sans-serif;
    // font-weight: 700;
    // font-size: 12px;

    .addItem {
        background-color: #009EDD;
        border: none;
        width: 100%;
        height: 40px;
        padding: 8px;
        border-radius: 4px;
        display: block;
        font-size: 12px;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        cursor: pointer;
    }

    .addItem div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
    }

    .card-product {
        background-color: #fff;
        width: 19.1em;
        border-radius: 4px;
        padding: 16px;
        display: inline-block;
        margin-right: 16px;
        margin-bottom: 24px;
        text-align: center;
    }

    .card-product--price {
        display: block;
        padding-bottom: 8px;
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
    }

    .card-product p {
        margin-top: 5px;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        font-size: 12px;
    }

`