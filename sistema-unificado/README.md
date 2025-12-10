# Sistema Unificado Vehicular

Aplicación web para acceso rápido a consultas vehiculares peruanas, con interfaz amigable por categorías.

## Características
- **3 Categorías principales:** Infracciones, Documentación, Propiedad
- **Submenús desplegables** con opciones específicas en cada categoría
- **Abrir en ventana nueva** — Los enlaces se abren en pestaña separada sin perder contexto
- **Personalización:** Tema claro/oscuro y tamaño de texto ajustable
- **UI moderna:** Botones con efectos hover y transiciones suaves

## Archivos
- `index.html` — Estructura principal
- `css/styles.css` — Estilos responsivos y temas
- `js/script.js` — Lógica y datos de consultas

## Uso

### Opción 1: Abrir directamente
```bash
C:\Sistema Unificado\sistema-unificado\index.html
```
Doble clic en el navegador o arrastra el archivo al navegador.

### Opción 2: Servidor local (recomendado)
```bash
cd "C:\Sistema Unificado\sistema-unificado"
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

## Cómo actualizar enlaces
En `js/script.js`, busca la sección `const DATA = [` y reemplaza las URLs `'#'` por los enlaces reales.

Ejemplo ya incluido:
- SAT Callao: `https://pagopapeletascallao.pe/`

## Próximas mejoras
- Guardar preferencias en `localStorage`
- Cargar datos desde archivo JSON externo
- Búsqueda global entre categorías
