import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalles del Producto: {id}</h1>
      {/* Renderiza los detalles del producto aquí */}
    </div>
  );
};

export default ProductDetail;
