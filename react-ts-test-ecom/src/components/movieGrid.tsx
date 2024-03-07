import { useEffect, useState } from 'react';
import { StyledMovieGrid } from './styles/MovieGrid.styled'

interface ApiResponse {
    id: string;
    title: string;
    price: number;
    image: string;
    count: number
}

export default function MovieGrid() {

    const [data, setData] = useState<ApiResponse[] | null>(null);
    const [itemNums, setItemNums] = useState(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/products/');
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const jsonData = (await response.json()) as ApiResponse[];
            setData(jsonData);
          } catch (error) {
            setError('Error fetching data from the API');
          }
        };
    
        fetchData();
      }, []);

    return(
        <>
            <StyledMovieGrid>
                {data && (
                    <div>
                        {data.map((product) => {
                            return (
                                <div className="card-product" key={product.id}>
                                    <img className="card-product--img" src={product.image} width="147px" height="188px" />
                                    <p>{product.title}</p>
                                    <span className="card-product--price">R$ {product.price}</span>
                                    <button className="addItem" onClick={() => setItemNums((itemNums) => itemNums + 1)}>
                                        <div>
                                            <img src="src\assets\mdaddshoppingcart 1shopping-cart.svg" />
                                            <span>{itemNums}</span>
                                        </div>
                                        <span>ADICIONAR AO CARRINHO</span>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )}
                {error && <p>{error}</p>}
            </StyledMovieGrid>
        </>
    )
}