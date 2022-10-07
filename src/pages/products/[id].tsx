import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { useParams } from 'react-router-dom';
import { Product } from '../../types';
import ProductDetail from '../../components/products/detail';

const ProductDetailPage = ({}) => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: 'GET',
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  const {
    category,
    description,
    image,
    price,
    title,
    rating: { rate },
  } = data;

  return (
    <div>
      <h2>상품 목록</h2>
      <ProductDetail item={data} />;
    </div>
  );
};

export default ProductDetailPage;
