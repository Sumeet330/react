//const heading = React.createElement("h1",{id:"heading"},"Hello World from React");

//React createElement returns the object and while rendering using DOM this becomes HTML tag 
//ReactElement(Object)=>HTML (Browser understands)
//const parent = React.createElement("div",{id:"parent"},(React.createElement("div",{id:"child"},(React.createElement("h1",{},"Hello from H1 child")))))
//create Sibling tags then we need to pass as Array of childern
const parent = React.createElement("div",{id:"parent"},(React.createElement("div",{id:"child"},
[
[(React.createElement("h1",{},"Hello from H1 child")),(React.createElement("h2",{},"Hello from H2 sibling"))],
[(React.createElement("h1",{},"Hello from H1 child")),(React.createElement("h2",{},"Hello from H2 sibling"))]]
)))

//JSX helps to create tags
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);