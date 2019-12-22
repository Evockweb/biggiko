function masonry(){
    if(window.innerWidth >= 768){
        const masCon = document.querySelector('.news-grid');
        const masElem = masCon.querySelectorAll('.news-grid__card');
        const howMuchElems = masElem.length;
        let sumHeightLeft = [];
        let sumHeightright = [];
        masElem.forEach(function(item, i){
            if(i < howMuchElems/2){
                sumHeightLeft.push(item.offsetHeight);
                item.style.marginRight = "4%";
            }else{
                sumHeightright.push(item.offsetHeight);
            }
        });
        let allLeft = sumHeightLeft.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        let allRight = sumHeightright.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        if( allLeft > allRight ){
            masCon.style.height = allLeft + 35 + 'px';
        }else{
            masCon.style.height = allRight + 35 + 'px';
        }
    }else{
        document.querySelector('.news-grid').style.height = 'auto';
    }
}
document.addEventListener("DOMContentLoaded", () => {
    masonry();
    window.addEventListener('resize', masonry);
});