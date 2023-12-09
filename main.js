// const comment = document.querySelector(".msg-show")
// const button = document.querySelector(".place-comment")

// button.addEventlistener('click', function () {
//     msg.classlist.toggle("msg-show");
// });

// onclick = document.getElementById("button");
// msg.classlist.toggle("msg-show");

let add = () => {
    let text = document.querySelector('.newmsg #text');

    if (text.value !== "" && comment.value != "") {
        let list_item = document.createElement ("l1");
        p.innerHTML = 
        list_item.innerHTML = '
            <span>
            <p>${text.value} ${now}</p> 
            </span>
            <p>${comment.value}</p>
            ';
            list.append(list_item); 
            }
}




