console.log("exo-7");

console.log(jsonDatas);

// 1
jsonDatas.forEach(element => {
    console.log(element);
});

// 2
const traductor = {
    car: "voiture",
    house: "maison",
    game: "jeux",
    videoGame: "Jeux Videos",
    show: "spectacle"
};

// 3
jsonDatas.forEach(element => {
    element.typeFR = traductor[element.type];
    console.log(element);
});

// 4
let displayedDatas = new Object();
const container = document.querySelector(".container");

function displayDatas(datas){
    const articles = document.createElement("div");
    articles.setAttribute("id","articles");
    container.append(articles);
    datas.forEach(element => {
        let newArticle = document.createElement("div");
        newArticle.setAttribute("id",element.name.replaceAll(" ","_"));
        for(info in element){
            if(info == "name"){
                let newTitre = document.createElement("h3");
                newTitre.textContent = element[info];
                newArticle.append(newTitre);
            }else{
                let newInfo = document.createElement("ul");
                newInfo.textContent = info+" : "+element[info];
                newArticle.append(newInfo);
            };
        };
        articles.append(newArticle);
    });
    displayedDatas = datas;
};
displayDatas(jsonDatas);

// 5
const titre = document.querySelector("h1");
const searchForm = document.createElement("form");
const searchInput = document.createElement("input");
const searchButton = document.createElement("input");

searchInput.setAttribute("id","search");

searchButton.value = "chercher";
searchButton.setAttribute("type","submit");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    displayedDatas = jsonDatas.filter(search => search.typeFR === searchInput.value || search.type === searchInput.value);
    document.querySelector("#articles").remove();
    displayDatas(displayedDatas);
});
  
titre.insertAdjacentElement("afterend", searchForm);
searchForm.append(searchInput, searchButton);

// 6
const stock = document.createElement("input");
stock.setAttribute("type","checkbox");
stock.setAttribute("name","stock");
stock.addEventListener("click",function(){
    if(stock.checked){
        displayedDatas.forEach(article => {
            if(article.quantity == 0){
                document.querySelector("#"+article.name.replaceAll(" ","_")).remove();
            };
        });
    }else{
        document.querySelector("#articles").remove();
        displayDatas(displayedDatas);
    }
});

const stockLabel = document.createElement("label");
stockLabel.setAttribute("for","stock");
stockLabel.textContent = "en stock";

searchForm.append(stock,stockLabel);

// 7
let sortNameAsc = false;

const sortName = document.createElement("button");
sortName.setAttribute("type","button");
sortName.textContent = "trier par nom";
sortName.addEventListener("click",function(){
    if(!sortNameAsc){
        sortNameAsc = true;
        displayedDatas = displayedDatas.sort((a,b) =>{
            if(a.name > b.name){
                return 1;
            }
            return -1;
        });
        document.querySelector("#articles").remove();
        displayDatas(displayedDatas);
    }else{
        sortNameAsc = false;
        displayedDatas = displayedDatas.sort((a,b) =>{
            if(a.name < b.name){
                return 1;
            }
            return -1;
        });
        document.querySelector("#articles").remove();
        displayDatas(displayedDatas);
    }
});

searchForm.append(sortName);