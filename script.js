

const tv=document.getElementById('tv')
const title=document.getElementById('title')
const title_content=document.getElementById('title_content')
const circle_p=document.getElementById('circle_p')
const light=document.getElementById('light')


let animated_bgs=document.querySelectorAll('.animated-bg')
let animated_bg_texts=document.querySelectorAll('.animated-bg-text')

setTimeout(getdata,2500)

function getdata(){
    tv.innerHTML='<img id="baka" src="./4b99d0e39a2ffc346abe8eae5d2c321b.jpg" alt=""></img>'
    title.innerHTML='<h2 id="title_css">One Of The Best Anime</h2>          <p id="title_content_css"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid veritatis dicta dolorem odio dignissimos iste animi non alias! Consequatur?</p> '
    title_content.innerHTML=' <img id="op_pic" src="./8d131bc6e06e15d21fb97c27f97b8e30.jpg" alt=""> '
   light.innerHTML=' <h4>EREN.XX8._   </h4> <small id="small">08/04/2004</small>'



    animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))

    animated_bg_texts.forEach(bg=>bg.classList.remove('animated-bg-text'))
}   
