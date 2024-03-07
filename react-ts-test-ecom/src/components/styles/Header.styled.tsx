import styled from "styled-components";

export const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    max-width: 1080px;
    height: 88px;
    margin: auto;
    box-sizing: border-box;

    .logo {
        font-size: 20px;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        color: #fff;
    }

    .info-nav {
        max-width: 143.95px;
        height: 40px;
        margin-bottom: 4px;
    }

    .info-nav--link {
        display: inline-block;
        width: 40px;
        height: 40px;
    }

    .info-nav--link img {
        padding-left: 8px;
        width: 40px;
        height: 40px;
    }

    .info-nav--cart {
        display: inline-block;
        text-align: right;
    }

    .text {
        line-height: 19.07px;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        color: #fff;
    }

    .cart-count {
        line-height: 16.34px;
        font-size: 12px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        color: #999;
    }

`