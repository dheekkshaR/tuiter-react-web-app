const PostListItem = (posts) => {
    let link_added='';
    if (posts.link!==''){
        link_added= '<div class="mt-1 w-100 ps-3 pb-2 pe-2 align-items-center"><i class="fa fa-link"></i> ' + posts.link +'</div>'
    }
    return(`
        
          <div class="row">
           <div class="col-1 ps-0 ">
                <img class="float-left float-start rounded-circle" src=${posts.avatarIcon} height = 45px width="45px">
           </div>
           <div class="col-11">
              <div class="text-white "><span class="fw-bold">${posts.userName} </span><i class="fa-solid fa-circle-check"></i> <span class="text-muted"> @${posts.handle} &#x2022; ${posts.time} </span> </div>
              <div class="text-white">${posts.post}</div>
                    
                    <div class="mt-2 border border-secondary rounded">
                
                    <img class=" w-100 border-bottom border-secondary rounded " src=${posts.image}  height = "340px">
                    <div class="w-100 ps-3 pt-2  fw-bolder align-items-center text-white ">
                    ${posts.title}
                    </div>
                    <div class="mt-1 w-100 ps-3 pe-2 align-items-center">
                    ${posts.message}
                    </div>
                    ${link_added}
                    
                    </div>
              
                
                <ul class="nav   align-items-center nav-justified">
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="far fa-comment"></i> &nbsp ${posts.comments}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="fas fa-retweet"></i> &nbsp ${posts.retuits}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#"><i class="far fa-heart"></i> &nbsp${posts.likes}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted " href="#"><i class="fas fa-share-square"></i>&nbsp </a>
                </li>
                 </ul> 

                <hr style="margin-top: 0px;">
                
       
           </div>
          </div>
          
`);
}
export default PostListItem;