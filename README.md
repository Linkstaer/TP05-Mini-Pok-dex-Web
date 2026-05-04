# Mini Pokédex Web - TP05

### Descripción
Este proyecto es una aplicación web interactiva que consume la **PokéAPI** para buscar y mostrar información detallada de los Pokémon en tiempo real.
### Parte 1
**Estructura del Proyecto**
*   **index.html**: Estructura semántica de la interfaz.
*   **css/cualquiera.css**: Estilos personalizados para la visualización de la Pokédex.
*   **js/app.js**: Lógica central utilizando JavaScript puro, `fetch` y manipulación del DOM.
*   **img/**: Recursos gráficos como la pokebola y el fondo de la Pokédex.

**Endpoints Utilizados**
1.  `[https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/){nombre_o_id}`: Para obtener datos básicos (imagen, tipos, peso, altura).
2.  `[https://pokeapi.co/api/v2/type/](https://pokeapi.co/api/v2/type/){id_o_nombre}`: Utilizado en la fase de investigación para filtrar por categorías.

**Decisiones Tomadas**
*   Se optó por el uso de **Async/Await** para mejorar la legibilidad del código al manejar las peticiones asincrónicas.
*   Se implementó una validación que normaliza el input del usuario a minúsculas, evitando errores de búsqueda en la API.

---

### Parte 2

**Análisis de Endpoints y Estructura JSON**

1.  **Búsqueda por Nombre/ID**:
    *   **URL**: `[https://pokeapi.co/api/v2/pokemon/pikachu](https://pokeapi.co/api/v2/pokemon/pikachu)`
    *   **Método**: GET
    *   **Status Code (Éxito)**: 200 OK
    *   **Propiedades Relevantes**: `sprites.front_default` (imagen), `types` (lista de tipos), `weight` (peso) y `height` (altura).

2.  **Manejo de Errores**:
    *   **URL**: `[https://pokeapi.co/api/v2/pokemon/inexistente](https://pokeapi.co/api/v2/pokemon/inexistente)`
    *   **Status Code**: 404 Not Found
    *   **Comportamiento**: La API devuelve un JSON vacío o un mensaje de error. En la aplicación, esto activa el bloque `catch` para informar al usuario que el Pokémon no fue hallado.

3.  **Deducción de URLs**:
    *   La estructura de las URLs se dedujo analizando la documentación oficial de PokéAPI, donde se especifica que el recurso principal es `/pokemon/` seguido del parámetro de búsqueda.
