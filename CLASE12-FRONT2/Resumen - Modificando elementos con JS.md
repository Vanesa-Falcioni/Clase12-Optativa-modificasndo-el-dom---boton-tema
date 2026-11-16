# Selectores

- LOS UTILIZAMOS PARA ACCEDER A UN **ELEMENTO** O **LISTA DE ELEMENTOS** DE UNA PAGINA
- SON METODOS DEL OBJETO DOCUMENT

### querySelector()

- RETORNA **PRIMER ELEMENTO** DEL HTML QUE SE CORRESPONDA CON EL PARAMETRO INDICADO

```JS
document.querySelector('nav')
```

### querySelectorAll()

- RETORNA UN **LISTADO DE ELEMENTOS** QUE COINCIDAN CON LA BÚSQUEDA (TODOS)

```JS
document.querySelectorAll('div')
```

### getElementById()

- RETORNA EL ELEMENTO CUYO **ID** COINCIDA CON EL BUSCADO

```JS
document.getElementById('cursos-id')
```

# Modificando el DOM

### innerHTML

- LO USAMOS PARA LEER O MODIFICAR EL **CONTENIDO** DE UNA ETIQUETA HTML

```JS
document.querySelector('nav').innerHTML
document.querySelector('nav').innerHTML = "Jorge"
document.querySelector('nav').innerHTML += "Esteban"
```

# Propiedad STYLE

NOS PERMITE LEER Y MODIFICAR **REGLAS CSS** APLICADAS AL ELEMENTO QUE SELECCIONAMOS

```JS
document.querySelector('nav').fontSize
```

# Modificar Estilos

- PODEMOS ACCEDER AL ELEMENTO QUE DEFINE EL **ESTILO** DEL ELEMENTO SELECCIONADO Y MODIFICARLO.

```JS
element.style.color = "red";
element.style.fontSize = "50px";
```

# Template Strings

- ESTRUCTURA EN LA QUE EL VALOR DE UNA PARTE SE MANTENDRA CONSTANTE Y OTRA SE EJECUTARA CADA VEZ QUE EL TEMPLATE STRING SEA UTILIZADO (VALOR **VARIABLE**).

```JS
const nombre = "Lucas"
const template = `Hola! Soy ${nombre}`;
console.log(template)
```

# Contenido Dinámico

- innerHTML NOS PERMITE **INCLUIR ETIQUETAS** EN NUESTRO TEMPLATE STRING Y QUE SEAN INTERPRETADAS CORRECTAMENTE POR EL NAVEGADOR. ESTO NOS DA LA POSIBILIDAD DE AGREGAR MUCHO **DINAMISMO**.
