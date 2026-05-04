# Mini Pokédex Web - TP05

### Descripción
Este proyecto es una aplicación web interactiva que consume la **PokéAPI** para buscar y mostrar información detallada de los Pokémon en tiempo real.
### Parte 1
**Estructura del Proyecto**
*   **index.html**: Estructura semántica de la interfaz[cite: 1].
*   **css/cualquiera.css**: Estilos personalizados para la visualización de la Pokédex[cite: 1].
*   **js/app.js**: Lógica central utilizando JavaScript puro, `fetch` y manipulación del DOM[cite: 1].
*   **img/**: Recursos gráficos como la pokebola y el fondo de la Pokédex[cite: 1].

**Endpoints Utilizados**
1.  `[https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/){nombre_o_id}`: Para obtener datos básicos (imagen, tipos, peso, altura)[cite: 1].
2.  `[https://pokeapi.co/api/v2/type/](https://pokeapi.co/api/v2/type/){id_o_nombre}`: Utilizado en la fase de investigación para filtrar por categorías[cite: 1].

**Decisiones Tomadas**
*   Se optó por el uso de **Async/Await** para mejorar la legibilidad del código al manejar las peticiones asincrónicas[cite: 1].
*   Se implementó una validación que normaliza el input del usuario a minúsculas, evitando errores de búsqueda en la API[cite: 1].

---

### Parte 2

**Análisis de Endpoints y Estructura JSON**

1.  **Búsqueda por Nombre/ID**:
    *   **URL**: `[https://pokeapi.co/api/v2/pokemon/pikachu](https://pokeapi.co/api/v2/pokemon/pikachu)`[cite: 1]
    *   **Método**: GET[cite: 1]
    *   **Status Code (Éxito)**: 200 OK[cite: 1]
    *   **Propiedades Relevantes**: `sprites.front_default` (imagen), `types` (lista de tipos), `weight` (peso) y `height` (altura)[cite: 1].

2.  **Manejo de Errores**:
    *   **URL**: `[https://pokeapi.co/api/v2/pokemon/inexistente](https://pokeapi.co/api/v2/pokemon/inexistente)`[cite: 1]
    *   **Status Code**: 404 Not Found[cite: 1]
    *   **Comportamiento**: La API devuelve un JSON vacío o un mensaje de error. En la aplicación, esto activa el bloque `catch` para informar al usuario que el Pokémon no fue hallado[cite: 1].

3.  **Deducción de URLs**:
    *   La estructura de las URLs se dedujo analizando la documentación oficial de PokéAPI, donde se especifica que el recurso principal es `/pokemon/` seguido del parámetro de búsqueda[cite: 1].
