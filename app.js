const loadCategories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const  data = await res.json();
//(data.data.news_category);
console.log(data.data.news_category);
disPlayCategories(data.data.news_category)



}
 const disPlayCategories = Categories=>{
    console.log(Categories);
    const newsCategories = document.getElementById('news-Categories');
    Categories.forEach(Categorie =>{
        //console.log(Categorie)
        const span = document.createElement("span")
      span.classList.add("nav-item");
     span.innerHTML = `
   <button onclick ="loadCategoriesPost('${Categorie.category_id}')"<a class="nav-link btn btn-primary text-white" href="#">${Categorie.category_name}</a></button>

            `;
        newsCategories.appendChild(span);
        //console.log(Categorie.category_id)




 });
 toggleSpinner(true);
 
 
 }
 
 
 const toggleSpinner = isLoading => {
  const loadeSection = document.getElementById('loader')
  if(isLoading){
      loadeSection.classList.remove('d-none')
  }
  else{
      loadeSection.classList.add('d-none') 
  }
}

// 





 loadCategories();
  const loadCategoriesPost  = async(post) =>{
    const url =`https://openapi.programming-hero.com/api/news/category/${post}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
    disPlayCategoriesPost(data.data)

  }

  loadCategoriesPost();
  const disPlayCategoriesPost = posts =>{
     console.log(posts);
     document.getElementById('total-post').innerText = posts.length;
     const categoriesPost = document.getElementById('categoriesPost');
    posts.forEach(post=>{
      const colDiv = document.createElement('div');
      colDiv.classList.add('col')
      colDiv.innerHTML=`
      <div class="card">
      <img src="${post.image_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h1 class="card-text">The best fashion influencers to follow for sartorial inspiration</h1>
        <p>From our favourite Uk influencers to the best missives from Milan and the coodlest new yourk read on some of the best fashion blog out thene and for event more inspiration do need to our separetor black fashion influencers round</p>
        <div class="d-flex">
          <img src="img/Avatar (1).png">
          <p class=>Jone copper</p>
          <br>
          <p class=>Jan 10,2022</p>
          <img src="img/Group 11.png">
          <button onclick="loadCategoriesDeatails('${post._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#categoriesDetailModal">
       selecte 
  </button>
        </div>
      </div>
    </div>
      `;
      categoriesPost.appendChild(colDiv);
      console.log(post)


    });
    toggleSpinner(false);
   
    
  }
  
 
    
 const loadCategoriesDeatails = async id=>{
   const url=`https://openapi.programming-hero.com/api/news/${id}`;  
   console.log(url);    
   const res = await fetch(url);
     const data = await res.json();
     displayCategoriesDeatails (data.data[0]);
     console.log(data.data[0])
  }
  
    const displayCategoriesDeatails =posts=>{
      console.log(posts);
  
       const modalTitle = document.getElementById('categoriesDetailModal');
       toggleSpinner(true);
   
      
        modalTitle.innerText = posts.name;
       const categoriesDeatails = document.getElementById('news-container');
       categoriesDeatails . innerHTML =`
       <img src="${posts.image_url}" class="card-img-top" alt="">
       <p> details${posts. details}</p>
       <div>totalview${posts.total_view}<div>
       <div> title ${posts.title}</div>
       <div> thumbnailurl${posts.thumbnail_url}</div>
       <div>othersinfo${posts.others_info } </div>
      
       
      
       
        `;
        
      
    
    }

      
      
  
  
  loadCategoriesDeatails();

  
  


  