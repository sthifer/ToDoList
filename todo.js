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
            muestraTareas$$.classList.add('todo__div');
            muestraTareas$$.classList.add(`id-${element.id}`);
            /* muestraTareas$$.innerHTML = `
                <h3>${element.tarea}</h3>
                <button onclick="EditarToDo(${key})">Editar</button>
                <button onclick="eliminar(${key})">Eliminar</button>
            `; */
            const he$$ = document.createElement('h3');
            he$$.innerText= element.tarea;
            muestraTareas$$.appendChild(he$$);

            const buttonSave$$ = document.createElement('button')
            buttonSave$$.onclick = () => EditarToDo(key);
            buttonSave$$.innerText = "Editar"
            muestraTareas$$.appendChild(buttonSave$$);

            const buttonRemove$$ = document.createElement('button')
            buttonRemove$$.onclick = () => eliminar(key);
            buttonRemove$$.innerText = "Eliminar"
            muestraTareas$$.appendChild(buttonRemove$$);

            divListaToDo$$.appendChild(muestraTareas$$);
    }

}

const EditarToDo = (elemento) =>{
    const edit$$ = document.querySelector(`.id-${elemento}`);
    edit$$.innerHTML="";

    const input$$ = document.createElement('input');
    input$$.value= listadoGlobal[elemento].tarea;
    edit$$.appendChild(input$$);

    const buttonSave$$ = document.createElement('button')
    buttonSave$$.onclick = () => guardar(elemento);
    buttonSave$$.innerText = "Guardar"
    edit$$.appendChild(buttonSave$$);

    const buttonRemove$$ = document.createElement('button')
    buttonRemove$$.onclick = () => eliminar(elemento);
    buttonRemove$$.innerText = "Eliminar"
    edit$$.appendChild(buttonRemove$$);
}

const guardar = (elemento) =>{
    const value$$ = document.querySelector(`.id-${elemento} > input`)
    listadoGlobal[elemento].tarea = value$$.value;
    pintarToDo();
}

const eliminar = (posicion) =>{
    listadoGlobal.splice(posicion,1);
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
    insert$$.value=""
}

const agregar = () =>{
    aniadir();
    pintarToDo();
}
