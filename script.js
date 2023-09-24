var arr = [
    { dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     story: "https://media.istockphoto.com/id/1424987933/photo/coworkers-with-stacked-hands-at-the-office.jpg?s=2048x2048&w=is&k=20&c=o0v_lhQ4MktVo8O44JBHtX6I4SQfvvaYm5o-_s_sOxY=" },
     {dp:"https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     story:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
   {dp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",story:"https://plus.unsplash.com/premium_photo-1680790392289-e8ccd9a0bf5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},
   {dp:"https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",story:"https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
   {dp:"https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}

]
var Storiyan = document.querySelector("#Storiyan")
var clutter ="" ;
arr.forEach(function(elem, idx){
    clutter += `<div class="story" >
    <img id= "${idx}" src="${elem.dp}" alt="" >
    </div>`;
});
Storiyan.innerHTML=clutter;
Storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-Screen").style.display="block"
    document.querySelector("#full-Screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    // console.log("hello")
    setTimeout (function(){
        document.querySelector("#full-Screen").style.display="none"


    },2000)


});
var con= document.querySelector("#bottom")
var love=document.querySelector("#heart")

con.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%) scale(1)";
    love.style.opacity=0.8;
   
    setTimeout(function(){
        love.style.transform='translate(-50%,-50%) scale(0)';
    },2000)
    setTimeout(function(){
        love.style.opacity=0;
    },1000)
})