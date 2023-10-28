import { useParams } from '@remix-run/react';

export default function ProductsDetail() {
  const { id } = useParams();

  return <div>Product detail: Product {id}</div>;
}
