# Diseño de Base de Datos

> Este documento detalla la estructura lógica de la base de datos para la plataforma. Se utilizará PostgreSQL (vía Supabase) para garantizar escalabilidad y robustez.

## 1. Tabla: `cursos` (Biblioteca de Aprendizaje)
Almacena la información de las clases en video y material educativo.

| Campo | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| `id` | UUID | Identificador único universal (Primary Key). |
| `titulo` | VARCHAR | El nombre del curso o clase. |
| `descripcion` | TEXT | Resumen de los objetivos de aprendizaje. |
| `url_video` | VARCHAR | Enlace al video (YouTube, Vimeo, etc.). |
| `url_miniatura` | VARCHAR | Link a la imagen de portada del curso. |
| `duracion` | INTEGER | Tiempo estimado de la clase en minutos. |
| `nivel` | ENUM | Categoría de dificultad: 'Básico', 'Intermedio', 'Avanzado'. |
| `creado_en` | TIMESTAMP | Fecha y hora de registro automático. |

## 2. Tabla: `articulos` (Vlog / Blog Ético)
Almacena las entradas de texto, noticias y reflexiones sobre el uso de la IA.

| Campo | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| `id` | UUID | Identificador único universal (Primary Key). |
| `titulo` | VARCHAR | Título descriptivo del artículo. |
| `slug` | VARCHAR | Texto para la URL (ej: `guia-uso-responsable-ia`). |
| `contenido` | TEXT | Cuerpo del artículo (soporta formato Markdown). |
| `autor` | VARCHAR | Nombre del escritor del contenido. |
| `url_imagen` | VARCHAR | Imagen destacada para el feed y redes sociales. |
| `publicado` | BOOLEAN | Indica si el post es visible (true) o borrador (false). |
| `creado_en` | TIMESTAMP | Fecha y hora de publicación. |

## 3. Tabla: `categorias` (Taxonomía)
Permite organizar y filtrar tanto cursos como artículos.

| Campo | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| `id` | UUID | Identificador único de la categoría. |
| `nombre` | VARCHAR | Ej: 'Ética', 'Privacidad', 'Tutoriales', 'Productividad'. |
| `color_etiqueta` | VARCHAR | Código hexadecimal para la interfaz (ej: #4F46E5). |

---