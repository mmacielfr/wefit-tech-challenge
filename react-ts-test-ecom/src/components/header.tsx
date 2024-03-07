import { StyledHeader } from "./styles/Header.styled"

export default function Header() {
    return (
        <>
            <StyledHeader>
                <h2 className="logo">WeMovies</h2>
                <div className="info-nav">
                    <div className="info-nav--cart">
                        <span className="text">Meu Carrinho</span> <br />
                        <span className="cart-count">0 itens</span>
                    </div>
                    <a href="#" className="info-nav--link">
                        <img src="src\assets\Icoshopping-basket.svg"></img>
                    </a>
                </div>
            </StyledHeader>
        </>
    )
}