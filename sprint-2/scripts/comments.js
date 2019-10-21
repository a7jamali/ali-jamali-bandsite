//
//
////Could not get the avatars to work; 
///spoke with Noor who advised I should get try to get it by Sprint-3
//
//
//
//
//
//
//date fetcher:
let d = new Date();
let dateNow = d.getDate() + "/" + d.getMonth() + 1+ "/" + d.getFullYear();

//data log:
let commentsDataLog = [
    { avatar: "", name: "Micheal Lyons", 
    comment: "They blew the roof off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.", 
    date: "12/18/2018" },

	{ avatar: "", name: "Gary Wong",
	comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I could ride like him one day so I can really enjoy myself!", 
    date: "12/12/2018" },

    { avatar: "", name: "Theodore Duncan", 
    comment: "How can someone be soo good!!! You can tell he lives for this and loves to do it everyday. Every time I see him I get instantly happy! He's definitely my favorite ever!", 
    date: "11/15/2018" }
];

//comment & forum generator
function createComment(commentsDataLog) {
    let commentSection = document.querySelector(".comments__forum");
  
    for (let i = 0; i < commentsDataLog.length; i++) {
      let newComment = document.createElement("div");
      newComment.classList.add("comments__post");
      commentSection.appendChild(newComment);
  
      let commentName = document.createElement("h2");
      newComment.appendChild(commentName);
      commentName.innerText = commentsDataLog[i].name;
      commentName.classList.add("comments__post-name");
  
      let commentDate = document.createElement("h3");
      newComment.appendChild(commentDate);
      commentDate.innerText = commentsDataLog[i].date;
      commentDate.classList.add("comments__post-date");
  
      let commentBody = document.createElement("p");
      newComment.appendChild(commentBody);
      commentBody.innerText = commentsDataLog[i].comment;
      commentBody.classList.add("comments__post-body");
    }
  }
  
  createComment(commentsDataLog);

  

  let form = document.querySelector(".comments__form");
  form.addEventListener("submit", submitEvent => {
    submitEvent.preventDefault();

    document.querySelector(".comments__forum").innerHTML = "";
  
    let generateNewComments = {  name: "", comment: "", date: dateNow };
    generateNewComments.name = submitEvent.target.name.value;
    generateNewComments.comment = submitEvent.target.commentInput.value;
    commentsDataLog.unshift(generateNewComments);

    createComment(commentsDataLog);



    submitEvent.target.reset();
  });


  /*
  let submitAvatar = document.createElement('div');
  submitAvatar.className = "comments__finished--avatar";
  let submitAvatarImage = document.createElement('img');
  submitAvatarImage.src = './assets/avatars/user-1.svg';
  submitAvatar.appendChild(submitAvatarImage);
  commentsCell.appendChild(submitAvatar);
  */