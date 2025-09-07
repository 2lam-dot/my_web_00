    let like = 0;
    function increaseLike (){
        like = like + 1;
        
        document.getElementById("like-count").innerText = "좋아요:" + like;
    }