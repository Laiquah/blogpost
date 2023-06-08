let posts = [
    {
        id: "1",
        title: "Mayo Clinic",
        imageUrl: "https://i.postimg.cc/m2vWXyVp/solen-feyissa-j-Gm-BZypo-FPc-unsplash.jpg",
        description: "Mayo Clinic is a prestigious medical organization in the United States that is highly regarded for its comprehensive healthcare services, medical research, and educational offerings.",
        content: "https://www.mayoclinic.org/",
        date: new Date( )
    },
    {
        id: "2",
        title: "WebMD",
        imageUrl: "https://i.postimg.cc/zfXjr9Gd/online-marketing-h-Igeo-Qj-S-i-E-unsplash.jpg",
        description: "WebMD is a trusted online platform offering comprehensive health information and resources to help individuals make informed decisions about their well-being.",
        content: "https://www.webmd.com/",
        date: new Date( )
    },
    {
        id: "3",
        title: "Healthline",
        imageUrl: "https://i.postimg.cc/MKpK15HC/Screenshot-2023-06-08-121409.png",
        description: "Healthline is a leading online platform that provides comprehensive health information and resources to support individuals in their pursuit of a healthy lifestyle.",
        content: "https://www.healthline.com/",
        date: new Date( )
    },
    {
        id: "4",
        title: "American Cancer Society",
        imageUrl: "https://i.postimg.cc/rwSVkPPt/Screenshot-2023-06-08-121833.png",
        description: "The American Cancer Society (ACS) is a prominent nonprofit organization dedicated to cancer research, prevention, advocacy, and patient support. Founded in 1913, their mission is to eliminate cancer as a major health problem.",
        content: "https://www.cancer.org/",
        date: new Date( ),
    }
  ];

  let divPosts = document.querySelector("#posts");
  posts.forEach((data) => {
    divPosts.innerHTML += `
    <div class="col-2" id="card">
      <div class="card">
      <div class="card-body">
      <p class="text-black">
      ${data.title}
      </p>
      <p class="text-black">
      <img src="${data.imageUrl}" class = "img-fluid">
      </p>
      <p class="text-black">${data.description}</p>
      <a href=${data.content} target="_blank">See more...</a>
      <p class="text-black">${data.date}</p>
      </div>
      </div>
    </div>
      `;
  });