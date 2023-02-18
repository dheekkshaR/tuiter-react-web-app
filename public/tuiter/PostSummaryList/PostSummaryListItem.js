const PostSummaryItem = (post) => {
    return(`
                <li class="list-group-item">
                    <div class="row align-top">
                        <div class="col-9">
                            <div class="text-secondary">${post.topic}</div>
                            <div ><span class="fw-bolder">${post.userName} </span>  <i class="fas fa-check-circle float-left"></i> <span class="text-secondary"> - ${post.time} </span> </div>
                            <div class="fw-bolder">${post.title}</div>
                        </div>
                        <div class="col-3">
                            <img class="float-end rounded img-fluid"src=${post.image} width="100px">
                        </div>
                    </div>
                </li>   
`);
}

export default PostSummaryItem;