let open_and_close_nav = false;
let sidenav_var = document.querySelectorAll('#nav div ul')[0];
let overlay = document.getElementById('overlay');
let copy_var = document.getElementById('copy');

document.onclick = function(e) {
    console.log(open_and_close_nav)
    if (e.target == overlay && open_and_close_nav == true) {
        sidenav_var.style.left = -100 + '%';
        overlay.style.display = 'none';
        open_and_close_nav = false;
    }
}

function sidenav() {
    if (open_and_close_nav == false) {
        open_and_close_nav = true;
        sidenav_var.style.left = 0 + 'px';
        overlay.style.display = 'block';
    }
}

function copy(e) {
    navigator.clipboard.writeText(e);
    copy_var.style.bottom = 80 + 'px';
    setTimeout(() => {
        copy_var.style.visibility = 'hidden';
        copy_var.style.bottom = -80 + 'px';
        copy_var.style.visibility = 'unset';
    }, 1000);
}