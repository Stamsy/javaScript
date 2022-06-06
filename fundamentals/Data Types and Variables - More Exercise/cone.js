function cone(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let baseSurface = Math.PI * Math.pow(radius, 2);
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let lateralSurface = Math.PI * radius * slantHeight
    let totalArea = lateralSurface + baseSurface;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3, 5)