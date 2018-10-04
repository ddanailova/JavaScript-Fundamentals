function calcArea(w, h, W, H) {
    let bigArea = Math.max(w,W) * Math.max(h,H);
    let extraArea = (w-W)*(h-H);
    let totalArea =0;
    if (extraArea<0){
        totalArea = bigArea + extraArea;
    } else{
        totalArea = bigArea;
    }
    console.log(totalArea);
}

calcArea(13, 2, 5, 8);