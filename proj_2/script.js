import {prevBtn} from "./modules/sliderControl.js"
import {nextBtn} from "./modules/sliderControl.js"
import {moveSliderLeft} from "./modules/sliderControl.js"
import {moveSliderRight} from "./modules/sliderControl.js"



prevBtn.addEventListener ('click', moveSliderLeft)
nextBtn.addEventListener ('click', moveSliderRight)
