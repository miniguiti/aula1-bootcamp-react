// var container = document.getElementById("app");

// var titulo = document.createElement("h2");
// titulo.innerHTML = "Esse titulo foi criado com JS!";

// container.appendChild(titulo);

// var subtitulo = document.createElement("h4");
// subtitulo.innerHTML = "Esse subtitulo também!";
// container.appendChild(subtitulo);


var container = document.getElementById("app");

function ComponenteContador(props) {
    const [numero, setNumero] = React.useState(0);

    function soma() {

            setNumero(numero + 1);
        
    }

    function subtrair() {
        setNumero(numero - 1);
    }

    return (
        <React.Fragment>
            <h2>{props.titulo}</h2>
            <h4>{numero}</h4>
            <button onClick={soma}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h2>Escolha o mais legal: </h2>
            <ComponenteContador titulo="React <3" />
            <ComponenteContador titulo="Angular"/>
            <ComponenteContador titulo="Vue"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);


//Para criar componentes utilizamos PascalCase no nome da função
//Um componente retorna somente 1 elemento JSX
//Um componente pode ter propriedades
//Podemos manipular o estado dos componentes React