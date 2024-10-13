import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Aquí puedes hacer un fetch para obtener los detalles del producto basado en el id

  return (
    <div>
      <h1>Detalle del Producto {id}</h1>
      {/* Agrega aquí el contenido de la página de detalle */}
    </div>
  );
};

export default ProductDetail;