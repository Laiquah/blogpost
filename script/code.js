
const table = document.querySelector("tbody");

const deleteBtn = document.querySelector("#dltButton");
const add = document.querySelector("#addButton");
let tableRow = document.querySelector("#trow");

const saveBtn = document.getElementById("saveBtn");

let featuredPosts = [
  {
    id: "",
    title: "",
    author: "",
    imageURL: "",
    description: "",
    content: "",
    date: new Date(),
  },
];
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let description = document.querySelector(".desc");
let content = document.querySelector(".content");
let date = document.querySelector(".date");
let image = document.querySelector(".image");

let modal = document.querySelectorAll("#modalContainer");
const editButton = document.getElementById("edit");

editButton.addEventListener("click", () => {
  console.log("REACHED");
  modal.style.display = "block";
});

// const blog = document.querySelectorAll('#blog')
let blog = [
  {
    id: 1,
    title: "Healthy Lifestyle Choices",
    image: "https://i.postimg.cc/kD3d8YK3/healthy-lifestyle.jpg",
    author: "Healthy lifestyle choices in our everyday lives can benefit us both physically and mentally. Choosing healthier habits will lead to a longer, happier life along. Plus it will lower the risk of chronic illness. But making healthier choices isn’t easy. There are many temptations and distractions that can steer you away from positive and healthy daily habits. This is where we can help. ",
    description: " Author: MyClinic",
    date: "February 12, 2019",
    modal1: "https://www.myclinicgroup.com.au/healthy-lifestyle-choices/#",
  },
  {
    id:2,
    title: " Lifestyle Choices",
    image: "https://i.postimg.cc/XvsqF5LN/Screenshot-2023-06-08-120710.png",
    author: "For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.These factors may seem like a part of the common-sense advice you've heard many times, but there's a reason for that. They're all backed by data, and new medical research continues to point in the same healthy direction.",
    description: " Author: Very Well Health",
    date: "September 02, 2022",
    modal2: "https://www.verywellhealth.com/lifestyle-factors-health-longevity-prevent-death-1132391",
  },
  {
    id:3,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/x8GKz2jV/Screenshot-2023-06-08-123511.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips. ",
    description: " Author: Lovneet",
    date: "August 11, 2021",
    modal3: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:4,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal4: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:5,
    title: "Mayo Clinic",
    image: "https://i.postimg.cc/m2vWXyVp/solen-feyissa-j-Gm-BZypo-FPc-unsplash.jpg",
    author: "WebMD is a trusted online platform offering comprehensive health information and resources to help individuals make informed decisions about their well-being.",
    description: " Author: Lovneet",
    date: "August 11, 2021",
    modal5: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:6,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal6: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:7,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal7: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:8,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal8: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:9,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal9: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:10,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal10: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:11,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal11: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
  {
    id:12,
    title: "10 Effective ways on How to Reduce Weight Naturally",
    image: "https://i.postimg.cc/dVS7hX9N/6114f3fc950e007d489ef0c6-Untitled-design-19.png",
    author: "Weight loss brings to mind images of tonics, plates of wilted salad leaves and magic “slimming pills.” But that couldn’t be further from the truth! The science behind weight loss is helping your body adjust to a new metabolic rate with the right combination of foods. You need to learn how to reduce weight naturally, without chemical stimulants or starvation. Here are some natural weight loss tips and 10 ways to lose weight naturally without depriving yourself or eating the wrong foods. ",
    description: " Author: Very Well Health",
    date: "August 11, 2021",
    modal12: "https://www.nutritionbylovneet.com/blog/10-effective-ways-on-how-to-reduce-weight-naturally",
  },
];
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
let divBlog = document.querySelector(".blog");
blog.forEach((data) => {
  divBlog.innerHTML += `<div class="col column">
    <div class="card" margin:0;">
    <div class="card-body">
    <p class="text-black">
    ${data.title}
    </p>
    <p class="text-black">
    <img src= "${data.image}" class = "img-fluid">
    </p>
    <p class="text-black">${data.description}</p>
    <p class="text-black">${data.author}</p>
    <p class="text-black">${data.date}</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Read More
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <a href="${data.modal1}">Read More</a>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal2}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal3}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal4}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal5}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal6}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal7}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal8}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal9}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal10}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal11}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//   divBlog.innerHTML += `<div class="col column">
//     <div class="card" margin:0;">
//     <div class="card-body">
//     <p class="text-black">
//     ${data.title}
//     </p>
//     <p class="text-black">
//     <img src= "${data.image}" class = "img-fluid">
//     </p>
//     <p class="text-black">${data.description}</p>
//     <p class="text-black">${data.author}</p>
//     <p class="text-black">${data.date}</p>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Read More
//     </button>
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModal2Label">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">

//       <a href="${data.modal12}">Read More</a>
        
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;

});
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
