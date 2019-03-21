window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const parent = nav.parentElement;
  if (this.scrollY <= 10) {
    parent.className = 'fixed-top container-fluid'; 
  } else {
    parent.className = 'fixed-top container-fluid scroll'
  }
};