const Alumnos =function(nombre, nota1, nota2, nota3,promedio){
    this.nombre= nombre,
    this.nota1= nota1,
    this.nota2= nota2,
    this.nota3= nota3,
    this.promedio=(nota1 + nota2 + nota3)/3
   // alert("el promedio de "+ nombre + " es "+ promedio)
}

let lista=[]

function agregaralumno(){
    /*
    const formulario= document.createElement("form")
    formulario.innerHTML=`
        <label for="nombreinput">Nombre: </label>
        <input id="nombreinput" type="text">

        <label for="nota1input">Nota 1: </label>
        <input id="nota1input" type="number">

        <label for="nota2input">Nota 2: </label>
        <input id="nota2input" type="number">

        <label for="nota3input">Nota 3: </label>
        <input id="nota3input" type="number">

        <button type="submit">Agregar</button>
        `;
       
    formulario.addEventListener("submit",function(x){
        x.preventDefault();

        const nombre= document.getElementById("nombreinput").value.trim()
        const nota1= parseInt(document.getElementById("nota1input").value)
        const nota2= parseInt(document.getElementById("nota2input").value)
        const nota3= parseInt(document.getElementById("nota3input").value)
        const promedio= parseInt((nota1 + nota2 + nota3)/3)
    */
    //-----------------------------------------------------------------------------------

    Swal.fire({
        title: "Agregar alumno",
        html:
          `<label for="nombreinput">Nombre: </label>
          <input id="nombreinput" type="text" class="swal2-input">
  
          <label for="nota1input">Nota 1: </label>
          <input id="nota1input" type="number" class="swal2-input">
  
          <label for="nota2input">Nota 2: </label>
          <input id="nota2input" type="number" class="swal2-input">
  
          <label for="nota3input">Nota 3: </label>
          <input id="nota3input" type="number" class="swal2-input">`,

        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
            let nombre= document.getElementById("nombreinput").value.trim();
            let nota1 = parseInt(document.getElementById("nota1input").value);
            let nota2 = parseInt(document.getElementById("nota2input").value);
            let nota3 = parseInt(document.getElementById("nota3input").value);
            let promedio = parseInt((nota1 + nota2 + nota3)/3);
            

    //-----------------------------------------------------------------------------------


            if  (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nombre=="" ) {
                //alert("por favor ingrese valores validos")
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Por favor ingresa valores válidos.",
                    timerProgressBar: true,
                    timer: 4000 
                });
                return;
            }

            const alumnos= new Alumnos(nombre, nota1, nota2, nota3,promedio)
        

            if (lista.some((x)=>x.nombre===alumnos.nombre)){
                //alert("el estudiante ya se encuentra en la lista")
                Swal.fire({
                    icon: "warning",
                    title: "Advertencia",
                    text: "el estudiante ya s encuentra en la lista"
                });
                return;
            }

            lista.push(alumnos)
            //alert("estudiante ingresado exitosaente")
            Swal.fire({
                icon: "success",
                title: "estudiante ingresado exitosaente",
                text: `Se ha agregado el estudiante "${alumnos.nombre}" a la lista.`,
                timerProgressBar : true,
                timer: 4000 
            });
        
            
            console.table(lista)

            /*
            const contenedor=document.createElement("div")
            contenedor.classList.add("contenedor")

            lista.forEach((x)=>{
                const carnet=document.createElement("div")
                carnet.classList.add("carnet")

                const nombre= document.createElement("h2")
                nombre.textContent= x.nombre
                carnet.appendChild(nombre)

                const nota1= document.createElement("p")
                nota1.textContent= "Nota 1: "+x.nota1
                carnet.appendChild(nota1)

                const nota2= document.createElement("p")
                nota2.textContent= "Nota 2: "+x.nota2
                carnet.appendChild(nota2)

                const nota3= document.createElement("p")
                nota3.textContent= "Nota 3: "+x.nota3
                carnet.appendChild(nota3)


                const promedio= document.createElement("p")
                promedio.textContent= "promedio: "+x.promedio
                carnet.appendChild(promedio)

                contenedor.appendChild(carnet)
               
            })

            const body= document.createElement("body")
            body.appendChild(contenedor)

            formulario.reset()
             */

            let Divalumnos = document.createElement("div");
            Divalumnos.setAttribute("id", "alumnos-div");
            Divalumnos.innerHTML = `<h3>Lista de alumnos</h3>
                                    <ul>${lista.map(x => `<li>${x.nombre} - Promedio: ${x.promedio} </li>`).join("")}</ul>`;
          
            Swal.fire({
                title: "Lista de alumnos",
                html: Divalumnos,
                confirmButtonText: "Cerrar"
            });

        }
    })
    
    //const body= document.querySelector("body")
    //body.appendChild(formulario)
}
// funcinamiento boton agregar alumno-----------------------------------------------------------

const agregar= document.getElementById("agrega")
agregar.addEventListener("click",()=>{
    agregaralumno()
})

// funcionamientoboton enviar al storge---------------------------------------------------------

const storage= document.getElementById("storage")
storage.addEventListener("click",function(){
    localStorage.setItem("lista de estudiantes",JSON.stringify(lista))
})

// funcion mostra  listado-----------------------------------------------------------------------

const mostrar= document.getElementById("resultado")
mostrar.addEventListener("click", ()=>{
    const html = `
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Promedio</th>
            </tr>
        </thead>

        <tbody>
            ${lista.map((x) =>
                `<tr>
                    <td>${x.nombre}</td><td>${x.nota1}</td>
                    <td>${x.nota2}</td>
                    <td>${x.nota3}</td>
                    <td>${x.promedio}</td>
                </tr>`
                )
                .join("")}
        </tbody>
    </table>`;

    Swal.fire({
        title: "Lista de alumnos",
        html: html,  
    });
})