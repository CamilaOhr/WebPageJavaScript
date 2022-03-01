
const proyects = [
    {
      id:1,
      name:"Myosotis",
      img:"./ProyectImg/InGame.png",
      proyecType:"VideoGame",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/brush-02.png",
      img2: "./ProyectImg/brush-03.png",
      img3: "./ProyectImg/brush_Mesa de trabajo 1.png",
      img4: "./PyschopompGif.gif",
      url: "./index.html"

    },
    {
      id:2,
      name:"Youtube Re-Design",
      img:"./ProyectImg/InGame.png",
      proyecType:"Web/App",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    },
    {
      id:3,
      name:"Joula",
      img:"./ProyectImg/InGame.png",
      proyecType:"Web/App",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    },
    {
      id:4,
      name:"My Portfolio",
      img:"./ProyectImg/InGame.png",
      proyecType:"Web/App",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    },
    {
      id:5,
      name:"Xian Quest",
      img:"./ProyectImg/InGame.png",
      proyecType:"VideoGame",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    },
    {
      id:6,
      name:"Psychopomp",
      img:"./ProyectImg/InGame.png",
      proyecType:"VideoGame",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    },
    {
      id:7,
      name:"Elba & Llenita",
      img:"./ProyectImg/InGame.png",
      proyecType:"VideoGame",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    },
    {
      id:8,
      name:"Environment House",
      img:"./ProyectImg/InGame.png",
      proyecType:"3D Model",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    },
    {
      id:9,
      name:"Creature Model",
      img:"./ProyectImg/InGame.png",
      proyecType:"3D Model",
      description:"aquí iría una descripción corta de lo que serióa el proyecto,  herramientas entre otras cosas",
      tools: "./ProyectImg/InGame.png",
      img1: "./ProyectImg/InGame.png",
      img2: "./ProyectImg/InGame.png",
      img3: "./ProyectImg/InGame.png",
      img4: "./ProyectImg/InGame.png",
      url: "./index.html"
    }
    ]


  const URL="./project.json"

  fetch(URL)
  .then(respuesta=> respuesta.json())
  .then(datosdesafio=>{  

    datosdesafio.products.forEach(desafio=>{
      const li= document.createElement("li");

      li.innerHTML= `<h4>${desafio.name}</h4><p>${desafio.id}</p>`
      console.log(li);
    });
  })

       
    const proyectsContainer = document.querySelector(".Proyect__Container");
    const proyectFilter = document.querySelector(".Proyect__Filter");
    const proyectselected= document.querySelector(".proyect__selected");
    const favoriteArray =[];
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function(){
      this.classList.toggle("is-active");
    })
    
    
    
    const btnFilterVideoGame =document.createElement("button");
    btnFilterVideoGame.classList.add("btn-filter");
    btnFilterVideoGame.textContent ="Video Games";
    btnFilterVideoGame.onclick = () => {filterProyects("VideoGame")};
    const btnFilterUXUI =document.createElement("button");
    btnFilterUXUI.classList.add("btn-filter");
    btnFilterUXUI.textContent ="Web/App";
    btnFilterUXUI.onclick = () => {filterProyects("Web/App")};
    const btnFilterProduct =document.createElement("button");
    const btnFilter3d =document.createElement("button");
    btnFilter3d.classList.add("btn-filter");
    btnFilter3d.textContent ="3D Model";
    btnFilter3d.onclick = () => { filterProyects("3D Model")};
    const btnFilterAll =document.createElement("button");
    btnFilterAll.classList.add("btn-filter");
    btnFilterAll.textContent ="All";
    btnFilterAll.onclick = () => { mostrarProyectos(proyects)};

    
    btnFilterProduct.classList.add("btn-filter");
    btnFilterProduct.textContent ="Favorites";
    btnFilterProduct.onclick = () => { filterFavorites(favoriteArray)};
    
     
    proyectFilter.append(btnFilterAll)
    proyectFilter.append(btnFilterProduct)
    proyectFilter.append(btnFilterVideoGame)
    proyectFilter.append(btnFilterUXUI)
    proyectFilter.append(btnFilter3d)
    
    
    recoverFavorites();
    mostrarProyectos(proyects);
    
    
    
    function mostrarProyectos(proyectos){
      proyectsContainer.innerHTML="";
      
      //Scripting
        proyectos.forEach(function(proyect){
            const divProyect = document.createElement("div");
            divProyect.classList.add("card");
            divProyect.onclick = () => {selectProyect(proyect.id)};
          
            const titleProyect = document.createElement("h3");
            titleProyect.textContent = proyect.name;
    
           
           divProyect.appendChild(titleProyect);
          
             
            proyectsContainer.appendChild(divProyect);
        })
    }
    
    function selectProyect(id){
      const proyectToShow = proyects.find(proyect => proyect.id === id);
       showProyectSide(proyectToShow);
    }

    function createDiv(className){
      const divProyectfull = document.createElement("div");
      divProyectfull.classList.add(className);
      return divProyectfull;
    }

    function createImg(url){
      const projectCarrouselImage = document.createElement("img");
      projectCarrouselImage.classList.add("carrouselImages");
      projectCarrouselImage.src= url;
      projectCarrouselImage.onclick = () => {mostrarIMGDisplay(url)};
      return projectCarrouselImage;
    }

    function mostrarIMGDisplay(url){
      const principalImg = document.querySelector(".displaylImages");
      principalImg.src = url;
    }

    function createImgDisplay(url){
      const projectCarrouselImage = document.createElement("img");
      projectCarrouselImage.classList.add("displaylImages");
      projectCarrouselImage.src= url;
      return projectCarrouselImage;
    }


    
    function showProyectSide (shown){
    
      proyectselected.innerHTML="";
        const divProyectFull = createDiv("cardFull");
        
        const divProjectInfo = createDiv("product__content");

        const divProjectimgs = createDiv("product__imgs");

        const divImgDisplay = createDiv("img__display");

        const divImgShowcase = createDiv("img__showcase");
       
   
        const titleProyect = document.createElement("h3");
        titleProyect.textContent = shown.name;

        const descriptionProject = document.createElement("p");
        descriptionProject.textContent= shown.description;
        descriptionProject.classList.add("project__detail");

        const projectTools = document.createElement("img");
        projectTools.classList.add("toolImage");
        projectTools.src=shown.tools;

        const btnFullPage = document.createElement("button");
        btnFullPage.classList.add("btn-fullPage");
        btnFullPage.textContent = "Tell Me More";
        btnFullPage.addEventListener("click",() =>{
          window.location.href=shown.url;

        });
        

        const btnFavorito = document.createElement("button");
        btnFavorito.classList.add("btn-favorito");
        btnFavorito.textContent = "Agregar a Favoritos";
        btnFavorito.onclick = () => {agregarFavorito (shown.id)};
        btnFavorito.addEventListener("click",()=>{
          Toastify({
            text: "Added to favorites",
            duration: 4000,
            newWindow: false,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: " #202020",
            },
            offset: {
              x: 50, 
              y: 50 
            },
            
            onClick: function(){ filterFavorites(favoriteArray)} 
          }).showToast();
        })

        //Carrousel

        const divCarrousel = createDiv("carrousel");

        const projectReferenceImages = createImg (shown.img1);
        
        const projectReferenceImages2 = createImg(shown.img2);
        
        const projectReferenceImages3 = createImg(shown.img3);
        
        const projectReferenceImages4 = createImg(shown.img4);

        //Display

        const projectReferenceImagesDisplay = createImgDisplay(shown.img);
        
       
       

        divProjectInfo.appendChild(titleProyect);
        divProjectInfo.appendChild(descriptionProject);
        divProjectInfo.appendChild(btnFullPage);
        divProjectInfo.appendChild(btnFavorito);
        
        
        
         
        divProjectimgs.appendChild(divImgDisplay);
        divImgDisplay.appendChild(divImgShowcase);
        divImgDisplay.appendChild(divCarrousel);
        
        divImgShowcase.appendChild(projectReferenceImagesDisplay);
        

        divCarrousel.appendChild(projectReferenceImages);
        divCarrousel.appendChild(projectReferenceImages2);
        divCarrousel.appendChild(projectReferenceImages3);
        divCarrousel.appendChild(projectReferenceImages4);

        
        divProyectFull.appendChild(divProjectInfo);
        divProyectFull.appendChild(divProjectimgs);
        
                   
        proyectselected.appendChild(divProyectFull);
     }
    
    
    function filterProyects(proyectTypes){
      console.log("hola desde botón");
      const filterForProyect = proyects.filter(proyects => proyects.proyecType === proyectTypes);
      console.log(filterForProyect);
      mostrarProyectos(filterForProyect);
    
    }

    function agregarFavorito(id){
      const favoriteproject = proyects.find(shown => shown.id === id);
            
      favoriteArray.includes(favoriteproject) === false ?  favoriteArray.push(favoriteproject) : 
        
      filterFavorites(favoriteArray);

      localStorage.setItem("favoritos", JSON.stringify(favoriteArray));
      
    }

    function filterFavorites(favorites){
      proyectsContainer.innerHTML="";
      
      //Scripting
        favorites.forEach(function(favorite){
            const divProyect = document.createElement("div");
            divProyect.classList.add("card");
            divProyect.onclick = () => {selectProyect(favorite.id)};
            
          
            const titleProyect = document.createElement("h3");
            titleProyect.textContent = favorite.name;
    
           
            divProyect.appendChild(titleProyect);
           
             
            proyectsContainer.appendChild(divProyect);
        })

    }

    function recoverFavorites(){
      let recover = JSON.parse(localStorage.getItem("favoritos"));
      console.log(recover);

      if(recover){
        recover.forEach(element =>{
          agregarFavorito(element.id)
        });
      }
    }
    
    