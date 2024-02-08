document.addEventListener("mousemove",effect);
const layers = document.querySelectorAll(".layer");

function effect(e){
    layers.forEach((layer)=>{
        const mouvement = layer.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * mouvement) /50;
        let y = (window.innerWidth - e.pageX * mouvement) /50;

        layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
    })
}