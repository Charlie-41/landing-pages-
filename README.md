Markdown
# Landing Page para Emprendedores — Emprende

Landing page profesional para emprendedores, migrada y profesionalizada bajo control de versiones (Git/GitHub), tipada con TypeScript y estructurada con Programación Orientada a Objetos (POO).

---

## 📋 Requerimientos del Sitio

### Requerimientos Funcionales
- **Formulario interactivo:** Valida campos obligatorios (nombre con mínimo 3 caracteres y formato de correo válido).
- **Gestión POO:** Los registros de usuarios se administran mediante clases orientadas a objetos (`Persona`, `Lead`, `Suscriptor`, `GestorContactos`).
- **Exportación JSON:** Permite guardar y descargar los datos de los contactos registrados en formato `.json`.
- **Navegación adaptable:** Menú de navegación responsive con soporte para dispositivos móviles.

### Requerimientos No Funcionales
- **Tipado estricto:** Desarrollado bajo TypeScript con modo estricto activado (`"strict": true`).
- **Control de versiones:** Historial gestionado mediante Git y respaldado en GitHub con flujos de trabajo basados en ramas.
- **Rendimiento:** Compilado y optimizado mediante Vite.

---

## 📂 Estructura del Sitio y Secciones

- **`index.html` (Inicio):** Sección principal (Hero) con llamado a la acción y tarjetas de acceso rápido a los recursos.
- **`finanzas.html` (Finanzas):** Contenido educativo sobre las áreas principales de las finanzas para emprendedores.
- **`marketing.html` (Marketing):** Información estratégica basada en las 4 Ps del marketing.
- **`plan-negocio.html` (Plan de Negocio):** Estructura clave y puntos fundamentales para armar un plan de negocio exitoso.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 y CSS3 / Sass (SCSS):** Maquetación y diseño modular de estilos.
- **TypeScript:** Tipado estático y desarrollo de lógica escalable.
- **Programación Orientada a Objetos (POO):** Clases, herencia, encapsulamiento y polimorfismo.
- **Vite:** Entorno de desarrollo rápido y empaquetador de producción.
- **Git y GitHub:** Control de versiones y colaboración.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos en tu terminal (VS Code):

1. **Instalar las dependencias:**
   ```bash
   npm install
   ```

2. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Vite abrirá el proyecto (por defecto en `http://localhost:5173`). `index.html` es la página principal; `finanzas.html`, `marketing.html` y `plan-negocio.html` son accesibles desde el menú de navegación.

3. **Generar la build de producción (opcional):**
   ```bash
   npm run build
   npm run preview
   ```

> Nota: `pakage.json` y `gitignore` (sin punto) son los archivos originales heredados del proyecto y se conservaron sin modificar; los archivos activos para instalar/ejecutar son `package.json` y `.gitignore`.