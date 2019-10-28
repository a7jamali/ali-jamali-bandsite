let d = new Date();
let dateNow = d.getDate() + "/" + d.getMonth() + 1+ "/" + d.getFullYear();


axios.get("https://project-1-api.herokuapp.com/comments?api_key=aj1374").then(result =>{
  console.log(result.data);
  const commentsDataLog = result.data;
  createComment(commentsDataLog);

 });


 function createComment(commentsDataLog) {
    let commentSection = document.querySelector(".comments__forum");
  
    for (let i = 0; i < commentsDataLog.length; i++) {
      let newComment = document.createElement("div");
      newComment.classList.add("comments__post");
      commentSection.appendChild(newComment);
  
      let commentAvatar = document.createElement("img");
      newComment.appendChild(commentAvatar);
      commentAvatar.src = "assets/avatars/Mohan-muruge.jpg";
      commentAvatar.classList.add("comments__post-avatar");

      let commentName = document.createElement("h2");
      newComment.appendChild(commentName);
      commentName.innerText = commentsDataLog[i].name;
      commentName.classList.add("comments__post-name");
  
      let commentDate = document.createElement("h3");
      newComment.appendChild(commentDate);
      commentDate.innerText = commentsDataLog[i].timestamp;
      commentDate.classList.add("comments__post-date");
      
      let commentBreak = document.createElement("box");
      newComment.appendChild(commentBreak);
      commentBreak.classList.add("comments__post-break");


      let commentBody = document.createElement("p");
      newComment.appendChild(commentBody);
      commentBody.innerText = commentsDataLog[i].comment;
      commentBody.classList.add("comments__post-body");
    }
  }
  



  let form = document.querySelector(".comments__form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let commentInput = event.target.commentInput.value;
  
    let axiosObject = {
      name: name,
      comment: commentInput,
    };
  
    axios.post(
        "https://project-1-api.herokuapp.com/comments?api_key=aj1374",
        axiosObject
      )
      .then(function(response) {
        console.log(response);
      })

    });

    function timeCon(num){
      let days = 1000 * 60 * 60 * 24;
      let time = new Date();
      let today = time.getTime();
      let timeStamp = Math.ceil((today - data)/days);
      return timeStamp === 1 ? `${timeStamp} Day ago`: `${timeStamp} Days ago`
    }
    
    timeCon(data.timestamp)
