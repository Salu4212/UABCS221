let url="https://www.googleapis.com/books/v1/volumes?q=";
let search=document.querySelector("#search");
let bookShelf=document.querySelector(".bookShelf");
let searchFor=document.querySelector("#searchFor");
let history=JSON.parse(localStorage.getItem("bookHistory"))||[];


function searchFun(){
    fetch(`${url}+${search.value}`)
    .then((res)=>res.json())
    .then((data)=>displayBooks(data.items))
    .catch((err)=>console.log(err.message))
}

function displayBooks(items){
    bookShelf.innerHTML="";
    let currSearch={
        search: search.value,
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString('en-US',{
            hour: '2-digit',
            minute: '2-digit',
            })
    }
    history.push(currSearch);
    searchFor.textContent=`Book Results For '${search.value}'`;
    searchFor.style.display="block";
    items.map((item)=>{
        let book=item.volumeInfo;
        let bookBox=document.createElement("div");
        bookBox.setAttribute("class","bookBox");
        let bookImgDiv=document.createElement("div");
        bookImgDiv.setAttribute("class","bookImgDiv");
        let bookCover=document.createElement("img");
        bookCover.src=book.imageLinks.thumbnail;
        bookImgDiv.append(bookCover);
        let desc=document.createElement("div");
        desc.setAttribute("class","bookDesc");
        let title=document.createElement("p");
        title.setAttribute("class","title");
        title.textContent=book.title;
        let author=document.createElement("p");
        author.innerHTML=`<strong>Author:</strong> ${book.authors}`;
        let pageCount=document.createElement("p");
        pageCount.innerHTML=`<strong>Page Count:</strong> ${book.pageCount}`;
        let publisher=document.createElement("p");
        publisher.innerHTML=`<strong>Publisher:</strong> ${book.publisher}`;
        desc.append(title,author,pageCount,publisher);
        // Prompt - how to add click function to open book from google api in js//
            // window.open(book.previewLink, '_blank');
        bookBox.addEventListener("click", () => {
            window.open(book.previewLink, '_blank');
        })
        bookBox.append(bookImgDiv,desc);
        bookShelf.append(bookBox);
    })
    localStorage.setItem("bookHistory",JSON.stringify(history));
    search.value="";
    let searchButton = document.querySelector("#searchButton");
    searchButton.addEventListener("click", searchFun);
}

