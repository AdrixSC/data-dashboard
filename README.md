# Data Dashboard

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Producto final_

***

## Flujo de trabajo

1. Debes realizar un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   de este repositorio.

2. Luego deberás **clonar** tu fork en tu máquina. Recuerda que el comando a usar
   es `git clone` y su estructura normalmente se ve así:

   ```bash
   git clone https://github.com/<nombre-de-usuario>/freelancer.git
   ```

3. Cuando hayas terminado tu producto, envía un Pull Request a este repositorio
   (puedes solicitar apoyo de tus profes para este paso).

> Nota: No olvides que es una buena práctica describir tu proyecto en este
> archivo `README.md` y también desplegar tu web a Github Pages :smiley:.


### Herramienta web para los TMS de Laboratoria

Construir una herramienta web donde puedan ver la mayor cantidad de datos posibles respecto al desempeño de las estudiantes para apoyarlas en su aprendizaje; estos son los datos que revisan normalmente:

1. El total de estudiantes presentes por sede y generación.
2. El porcentaje de deserción de estudiantes.
3. La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
4. El porcentaje que representa el dato anterior en relación al total de estudiantes.
5. El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria.
6. La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
7. La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
8. El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
9. La puntuación promedio de l@s profesores.
10. La puntuación promedio de l@s jedi masters.

De los cuales logramos implementar los puntos 1, 2, 5, 8, 9 y 10 debido al tiempo y las dificultades que se nos presentaron.

Pasos que se siguieron:

Crear una estructura web en la que el usuario pueda ingresar por medio de su correo, una vez hecho esto, acceder a la página principal, en la que se muestre un menú para acceder a la sección en la que se quiere consultar datos (Dashboard, Estudiantes y Profesores), una vez elegida la sección se deberá tener la opción de ingresar por sede y por generación.

En Dashboard se mostrarán los datos que solicita el cliente, en Estudiantes y Profesores, los perfiles de cada uno, en los que se mostrará información como nombre, puntuaciones, etc.

Crear funciones para que la página llame a la data y se pinte la información solicitada de acuerdo a la opción elegida.

Acceder a la data por medio de funciones para obtener la información solicitada y poder mostrar la información.
