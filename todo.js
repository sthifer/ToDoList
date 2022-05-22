const divListaToDo$$ = document.querySelector(".todo");
const insert$$ = document.querySelector("#insert");
let listadoGlobal = [];

insert$$.addEventListener("keypress",function(event){
    if (event.key==="Enter") agregar();
})

const pintarToDo = () =>{
    divListaToDo$$.innerHTML = "";
    for (const key in listadoGlobal) {
            const element = listadoGlobal[key];
            let muestraTareas$$ = document.createElement('div');
            muestraTareas$$.innerHTML = `
                <h3>${element.tarea}</h3>
                <button onclick="editar(${key})">Editar</button>
                <button onclick="eliminar(${key})">Eliminar</button>
            `;

            divListaToDo$$.appendChild(muestraTareas$$);
    }

}

const eliminar = (posicion) =>{
    listadoGlobal.splice(posicion,1);
    pintarToDo();
}

const editar = (posicion) =>{
    listadoGlobal[posicion].tarea = insert$$.value;
    pintarToDo();
}

const aniadir = () =>{
    if (insert$$.value.trim()==="") return

    let posicion= 1;
    if (listadoGlobal.length!==0){
        posicion = Object.keys(listadoGlobal).length+1;
    }
    const tarea = {
        "tarea" : insert$$.value,
        "id": posicion
    }
    listadoGlobal[posicion]=tarea;
}

const agregar = () =>{
    aniadir();
    pintarToDo();
}
