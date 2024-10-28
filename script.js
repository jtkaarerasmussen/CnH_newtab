async function getRandomImageNum() {
    try {
        const response  = await fetch("s.txt");
        const text = await response.text();
        const nums = text.trim().split("\n");

        const random_index = Math.floor(Math.random() * nums.length);
        return nums[random_index].trim();
    } catch (error) {
        console.error("Failed to get img number", error);
        return null;
    }
    
}

getRandomImageNum().then( (img_num) => {
    if (img_num) {
        document.getElementById("dyn_img").src ="https://picayune.uclick.com/comics/ch/19" +img_num.slice(2,4)+"/ch" + img_num.slice(2)+".gif"
    }
}
);


