let table = document.querySelector('.table');

class Animalito{
    constructor(nombre,edad,especie){
        this.nombre=nombre;
        this.edad=edad;
        this.especie=especie;
        this.enfermo=false;
        this.revisado=false;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes=0;
        this.pacientesRevisados=0;
        this.listaPacientes=[];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes+=1;
        let mensaje=`Paciente agregado <br/>`;
        return document.write(mensaje);
    }

    mostrarLista(){
        this.listaPacientes.forEach((mascota,i)=>{
            let elementoHTML = `
            <tr>
              <th scope="row">${i+1}</th>
              <td>${mascota.nombre}</td>
              <td>${i+1}</td>
              <td>${this.cantidadPacientes}</td>
              <td>${mascota.revisado?'Si':'No'}</td>
              <td>${this.pacientesRevisados}</td>
            </tr>
            `;

         let thbody = document.createElement('tbody');
         thbody.innerHTML=elementoHTML;
          table.appendChild(thbody);
        });
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado===false){
            paciente.revisado=true;
            //this.pacientesRevisados++;
            this.modificarPacientesRevisados();
    }else{
        document.write(`Este paciente ha sido revisado <br/>`);
    }
  }
}

const veterinario = new Veterinario();

const animal = new Animalito('Manchas',5,'Perro');
const animal2= new Animalito('Galleta',2,'Gato');
console.log(animal);
console.log(animal2);

veterinario.agregarPaciente(animal);

veterinario.agregarPaciente(animal2);

veterinario.mostrarLista();

veterinario.revisarPaciente(animal);

veterinario.mostrarLista();
