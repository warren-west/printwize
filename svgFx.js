
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("svg-logo")
    const light = document.getElementById("light")
    
    logo.addEventListener("mousemove", (event) => {
        console.log("trigger mousemove");

        const rect = logo.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        light.setAttribute("cx", x)
        light.setAttribute("cy", y)
    })
    
    logo.addEventListener("mouseleave", function () {
        console.log("trigger mouseleave");
        
        light.setAttribute("cx", "-50") // Move it out of view
        light.setAttribute("cy", "-50")
    })

})