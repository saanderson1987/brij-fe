import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDataById } from '../api-calls'

const ProductPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState({});

    useEffect(() => {
        getProductDataById(id, (data) => {
            setProductData(data);
            setIsLoading(false);
        })
    }, [id])
    
    const { 
        brand,
        error,
        product, 
    } = productData;

    if (error) return <p>ERROR: {error}</p>;
    if (isLoading) return <p>Loading...</p>;
    return (
        <>
            <img src={product.image} height={225}/>
            <h3>{brand.name}</h3>
            <h1>{product.name}</h1>
            {product.details && (
                <>
                    {Object.entries(product.details).map(([key, value]) => (
                        <p><span style={{ fontWeight: 'bold' }}>{key[0].toUpperCase() + key.slice(1)}</span>: {value}</p>
                    ))}
                </>
            )}
        </>
    );
}

export default ProductPage;