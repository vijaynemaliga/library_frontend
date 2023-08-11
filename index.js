let book=document.getElementsByClassName("textbox");
let button=document.getElementById("submit-button");
let form=document.getElementsByClassName("info");
let main_page=document.getElementById("main-page");
let addbook=document.getElementById("add");
let display=document.getElementById("display");
let readbooks=document.getElementById("readbooks");
let unread=document.getElementById("unread");
let main_section=document.getElementsByClassName("main-section");
let options=document.getElementsByClassName("options");
const slef=[];
function row(booktitle,author,pagescount,stausofbook)
{
    this.booktitle=booktitle,
    this.author=author,
    this.pagescount=pagescount,
    this.stausofbook=stausofbook
}
button.addEventListener("click",(event)=>{
    event.preventDefault();
    var booktitle=book[0].value;
    var author=book[1].value;
    var pagescount=book[2].value;
    var stausofbook=book[3].value;
   const obj=new row(booktitle,author,pagescount,stausofbook);
    slef.push(obj);
    form[0].reset();
})
let end_page=document.createElement("div");
end_page.setAttribute("id","content");
var div=document.createElement("div");
display.addEventListener('click',()=>{
    for(let i=0;i<slef.length;i++)
    {
       let divclone=div.cloneNode(true);
        divclone.setAttribute("class","book");
        var p=document.createElement('p');
        for(let value in slef[i])
        {
            let clone=p.cloneNode(true);
            clone.textContent= value+"  "+ ":"+"  "+slef[i][value];
            divclone.appendChild(clone);
        }
        end_page.appendChild(divclone);
    }
    main_page.appendChild(end_page);
    setTimeout(()=>{
       main_section[0].style.display="none";
       options[0].style.display="none";
    },500)

    console.log(end_page);
})
readbooks.addEventListener('click',()=>{
    for(let i=0;i<slef.length;i++)
    {
       let divclone=div.cloneNode(true);
        divclone.setAttribute("class","book");
        var p=document.createElement('p');
        for(let value in slef[i])
        {
            let clone=p.cloneNode(true);
            clone.textContent= value+"  "+ ":"+"  "+slef[i][value];
            divclone.appendChild(clone);
        }
        end_page.appendChild(divclone);
    }
    main_page.appendChild(end_page);
    setTimeout(()=>{
       main_section[0].style.display="none";
       options[0].style.display="none";
    },500)
})
unread.addEventListener('click',()=>{

    for(let i=0;i<slef.length;i++)
    {
       let divclone=div.cloneNode(true);
        divclone.setAttribute("class","book");
        var p=document.createElement('p');
        for(let value in slef[i])
        {
            let clone=p.cloneNode(true);
            clone.textContent= value+"  "+ ":"+"  "+slef[i][value];
            divclone.appendChild(clone);
        }
        end_page.appendChild(divclone);
    }
    main_page.appendChild(end_page);
    setTimeout(()=>{
       main_section[0].style.display="none";
       options[0].style.display="none";
    },500)
})

