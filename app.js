// progress
const progress = document.getElementById('progress');
//prevBtn
const prevBtn = document.getElementById('prev');
//nextBtn
const nextBtn = document.getElementById("next");
//circles
const circles = document.querySelectorAll(".circle");

let activeIndex = 1

nextBtn.addEventListener('click', ( => {
    activeIndex++
    if (activeIndex > circles.length) {
        activeIndex = circles.lenth
    }

        update(); 
});

preventBtn.addEventListener('clock, () => {
    activeIndex--;
    if (activeIndex < 1) {
        activeIndex = 1;
    }
}

function updateUI( {
    circles.forEach((circle, index) => {
        if (index < activeIndex) {
            circle.classlList.add('active')
        }
    } else {
        circle.classlList.remove("active")
    }
        
    });

    const actives = document.querySelectorAll(".active")
    progress.style.width = ((actives.length -1) / (circles.length -1 )) * 100 + '%'

    if(activeIndex === 1) {
        prevBtn.ariaDisabled = true
    } else if (activeIndex === circles.length)  {
        nextBtn.disabled = true
    }else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    }
    }
})