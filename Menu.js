const ordenes = document.querySelectorAll('.orden');

ordenes.forEach(orden => {
    orden.addEventListener('click', function() {
        Swal.fire({
            title: "Demo",
            text: "Esto es solo un demo",
            icon: "info"
        });
    });
});

const mofongo = document.getElementById('mofongo');
mofongo.addEventListener('click',function(){
window.location.href = 'mofong.htm';
});