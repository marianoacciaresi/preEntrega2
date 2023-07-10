/* eslint-disable react/jsx-key */
import './styles.css'
import { useFetch } from '../../hooks/useFetch';
import { API_URLS } from '../../constants/index';
import Card from '../../components/products/card';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader';

function Home() {
    const navigate = useNavigate();
    const { data: products, loading: loadingProducts, error: errorProducts  } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
    console.log(products);

    const onShowDetails = (id) => {
        navigate(`products/${id}`)
    }

    return (
        <div>
            {loadingProducts && <Loader />}

            <h2 className='headerTitleCard'>Productos</h2>
            <div className='cardContainer'>
            { products.map((product) => (
                <Card key={product.id} {...product} onShowDetails={onShowDetails} />
            ))
            }   
            </div>    
        </div>
        )
}

export default Home
