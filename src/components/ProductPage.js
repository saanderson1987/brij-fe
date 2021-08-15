import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    return <div>hey, {id}</div>
}

export default ProductPage;