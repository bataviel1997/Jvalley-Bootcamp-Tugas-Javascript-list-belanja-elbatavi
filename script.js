// tnagkap elemen html

let modal = document.getElementById('modal')
let floating_button = document.getElementById('floating_button')
let addlist_form = document.getElementById('addlist_form')
let modal_bg = document.getElementById('modal_bg')
let root = document.getElementById('root')
let subtitle = document.getElementById('subtitle')


// 10tambahkan date ke subtitle
 subtitle.innerHTML = new Date().toLocaleDateString()
// data list belanja 
let data_belanja = [];

// 1 menambhakan evenlistener fe floating button
floating_button.addEventListener('click', ()=>{
  
  // munculkan modal
 if(modal.style.display == 'none'){
  show_modal();
   return
 }
// sembunyikan modal
  hide_modal();
})

//2 menambahkan evenlistener pada modal bg
modal_bg.addEventListener('click', ()=>{
  // sembunyikan
  hide_modal();
})
// 3 tambhakan even listener submit ke addlist form
addlist_form.addEventListener('submit', (event)=>{

  // 4 stop form dari reload
  event.preventDefault();

  //   5 tangkap value dari masing2 input field
  let barang = event.target.barang.value
  let harga = event.target.harga.value

  // 7. push data belanja
data_belanja.push({
  nama_barang : barang,
  harga_barang : harga,
  tanggal : new Date().toLocaleDateString()
})
// console.info(data_belanja)

//6  clear input filed
event.target.barang.value = "";
event.target.harga.value = "";

  hide_modal();
  render_to_html();
})


// 7function render array to html
function render_to_html(){
// clear elemen div
root.innerHTML = '';
// 8perulangan
data_belanja.forEach((elemen, index)=>{

  root.innerHTML += `
  <div class="card">
  <small>${elemen.tanggal}</small>
    <div>
      ${elemen.nama_barang} <span> Rp. ${elemen.harga_barang} </span>
    </div>
    <button onclick="handle_delete(${index})">Selesai</button>
  </div>
  `

})
}



// 9function delete array
function handle_delete(index){
  data_belanja.splice(index, 1);
  
  render_to_html();

}

//1 fucntion show modal
function show_modal(){
  modal.style.display = 'flex';
   floating_button.style.backgroundColor = 'gray';
   floating_button.style.transform = 'rotate(45deg)';
}
// 2 hide modal
function hide_modal(){
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#f280b6';
  floating_button.style.transform = 'rotate(0deg)';
};

