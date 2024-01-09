const About = () => {
  return (
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div class="relative flex flex-col min-w-0 break-words bg-celestito w-full mb-6 shadow-lg rounded-lg bg-pink-500">
            <blockquote class="relative p-8 mb-4">
              <h4 class="text-xl font-bold text-white">
                Somos una empresa familiar creada el año 2018 luego de la
                necesidad de crecimiento e independencia laboral.
              </h4>
              <p class="text-md font-light mt-2 text-white">
                Todo comenzó con la creación de mi ruta de trabajo puerta a
                puerta, manteniendo aún mucho de mis clientes de aquella época.
                Descubrí un mundo maravilloso en la atención de clientes, donde
                muchas veces la relación a pasado a ser casi familiar.
              </p>
            </blockquote>
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-sitemap"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">
                    Productos de Calidad
                  </h6>
                  <p class="mb-4 text-blueGray-500">Descripción del producto</p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-drafting-compass"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">
                    Servicio al cliente
                  </h6>
                  <p class="mb-4 text-blueGray-500">
                    Describir el tipo de servicio y la calidad del mismo
                    (Diferencia de la competencia)
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-newspaper"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">
                    Resolución de problemas
                  </h6>
                  <p class="mb-4 text-blueGray-500">
                    Describir de que manera y que via usuaras para resolver los
                    problemas de los clientes
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
