function bill(input) {
    let products =input.filter((e,i)=>i%2 ===0).join(', ');
    let sum =input.filter((e,i)=>i%2 !==0).map(e=>+e).reduce((a,b)=>a+b);

    console.log(`You purchased ${products} for a total sum of ${sum}`);
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']
);