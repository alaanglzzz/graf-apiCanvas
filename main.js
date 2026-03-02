function draw() {
    const canvas = document.getElementById("canvas");
    if (!canvas.getContext) return;

    const ctx = canvas.getContext("2d");

    ctx.fillRect(25,25,100,100);
}