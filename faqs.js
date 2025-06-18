document.getElementById("content").style.display="none";
        var flag =1;
        function faqsquiz() {
        if(flag==1)
        {
        document.getElementById("content").style.display="block"; 
        flag=0;
        }
        else{
        document.getElementById("content").style.display="none"; 
        flag=1;
  }
};

const wrapper = document.getElementById('testimonialWrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let scrollAmount = 0;
nextBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: 270, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: -270, behavior: 'smooth' });
});
