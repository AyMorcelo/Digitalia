fetch('BaseDeDatosDigitalia.json')
  .then(response => response.json())
  .then(data => {   
    // La base de datos se encuentra en el objeto "data"
    const servicios = data.servicios;

    // Función para agregar un nuevo elemento a la base de datos
    function agregarNuevoServicio(nuevoServicio) {
      // Generar un nuevo ID para el servicio
      const nuevoId = servicios.length > 0 ? servicios[servicios.length - 1].id + 1 : 1;
      
      const servicio = { id: nuevoId, ...nuevoServicio };
      servicios.push(servicio);

      console.log('Nuevo servicio agregado:', servicio);
    }

    // Ejemplo de uso
    const nuevoServicio = {
      nombre: 'Servicio de SEO',
      descripcion: 'Optimización de motores de búsqueda para mejorar la visibilidad en línea.',
      costo: 2000,
      duración: '2 meses'
    };

    agregarNuevoServicio(nuevoServicio);
  })
  .catch(error => console.error('Error al leer la base de datos:', error));
