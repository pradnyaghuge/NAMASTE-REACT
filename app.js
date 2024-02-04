const heading1 = React.createElement(
  "h1",
  { id: "title", className: "class" },
  "heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", className: "class"},
  "heading 2"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
//console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root
root.render(container);


const obj={
  firstname:"pradnya",
  PrintName:()=>{
    console.log(this.firstname);
  },
  PrintName2:function(){
    console.log(this.firstname);
  }

}
const obj2={
  firstname:"lee",
}
obj.PrintName();
obj.PrintName2();


obj.PrintName.call();
obj.PrintName2.call();

