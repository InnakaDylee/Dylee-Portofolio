import logo from './dylee.jpeg';
import './App.css';
import upLogo from './logo.svg';
import ubuntu from './img/ubuntu.png';
import virtualbox from './img/virtual-box.png';
import stepInstall1 from './img/stepInstall1.png';
import stepInstall2 from './img/stepInstall2.png';
import stepInstall3 from './img/stepInstall3.png';
import stepInstall4 from './img/stepInstall4.png';
import stepInstall5 from './img/stepInstall5.png';
import stepInstall6 from './img/stepInstall6.png';
import stepInstall7 from './img/stepInstall7.png';
import stepInstall8 from './img/stepInstall8.png';
import setubuntu1 from './img/setubuntu1.png';
import setubuntu2 from './img/setubuntu2.png';
import setubuntu3 from './img/setubuntu3.png';
import setubuntu4 from './img/setubuntu4.png';
import setubuntu5 from './img/setubuntu5.png';
import setubuntu6 from './img/setubuntu6.png';
import setubuntu7 from './img/setubuntu7.png';
import setubuntu8 from './img/setubuntu8.png';
import setubuntu9 from './img/setubuntu9.png';
import setubuntu10 from './img/setubuntu10.png';
import setubuntu11 from './img/setubuntu11.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p className="App-name">Innaka Dylee</p>
        <p className="App-bio">Hi, mate! My name is Innaka Dylee. Currently, I am studying Software Engineering in college. As a student as well as a software engineer I would like to help readers by providing a step by step guide on how to install Ubuntu Server In VirtualBox. For more details, please see the review on the side.</p>
      </header>
      <body className="App-body">
        <a  href="#" className="up-button" draggable="false"><img src={upLogo} draggable="false"/></a>
        <h1>Panduan untuk Menginstal Server Ubuntu di Virtual Box</h1>
        <p>Dalam tutorial ini, Anda akan belajar cara menginstal Server Ubuntu di mesin virtual menggunakan VirtualBox. VirtualBox adalah perangkat lunak virtualisasi yang kuat dan gratis yang memungkinkan Anda menjalankan beberapa sistem operasi pada satu mesin fisik. Ubuntu Server adalah sistem operasi populer dan open-source yang banyak digunakan untuk aplikasi server.</p>
        <p>Berikut adalah langkah-langkah untuk menginstal Ubuntu di VirtualBox:</p>
        <h3>1. Pertama, langkah yang perlu dilakukan adalah mendownload dan install Ubuntu Server dan VirtualBox dari link berikut:</h3>
        <ul className="link">
          <a  href="https://ubuntu.com/download/server#downloads">
            <li>https://ubuntu.com/download/server#downloads</li>
            <img className="content-imgli ubuntu" src={ubuntu}/>
          </a>
          <a  href="https://www.virtualbox.org/wiki/Downloads">
            <li>https://www.virtualbox.org/wiki/Downloads</li>
            <img className="content-imgli virtualbox" src={virtualbox}/>
          </a>
          <img className="content-imgli stepinstal1" src={stepInstall1}/>
          <img className="content-imgli stepinstal2" src={stepInstall2}/>
        </ul>
        <h3>2. Setelah proses selesai, langkah selanjutnya buka VirtualBox dan klik “Add” untuk membuat dan mengsetup virtual machine baru.</h3>
        <img className="content-img stepinstal3" src={stepInstall3}/>
        <p>Masukkan nama dan pilih lokasi file. Masukkan ISO Ubuntu yang sudah didownload tadi, lalu klik "Next" : </p>
        <img className="content-img stepinstal4" src={stepInstall4}/>
        <p>Buat Username dan password beserta nama hostname dan domainnya, lalu klik "Next" :</p>
        <img className="content-img stepinstal5" src={stepInstall5}/>
        <p>Tentukan besaran RAM dan Processor yang akan digunakan pada Virtual Box, lalu klik "Next" :</p>
        <img className="content-img stepinstal6" src={stepInstall6}/>
        <p>Tentukan besaran Hard Disk yang akan digunakan pada Virtual Box, lalu klik "Next" :</p>
        <img className="content-img stepinstal7" src={stepInstall7}/>
        <p>Berikut merupakan hasil summary dalam pembuatan virtual machine, terakhir klik "finish" :</p>
        <img className="content-img stepinstal8" src={stepInstall8}/>
        <h3>3. Selanjutnya, masuk ke virtual machine dan lakukan setup.</h3>
        <p>1. Pilih bahasa yang ingin digunakan :</p>
        <img className="content-img setubuntu 1" src={setubuntu1}/>
        <p>2. Pilih ingin menggunakan versi yang sekarang atau versi terbaru :</p>
        <img className="content-img setubuntu 2" src={setubuntu2}/>
        <p>3. Melakukan konfigurasi layout keyboard :</p>
        <img className="content-img setubuntu 3" src={setubuntu3}/>
        <p>4. Tetapkan koneksi jaringan untuk lingkup instalasi :</p>
        <img className="content-img setubuntu 4" src={setubuntu4}/>
        <p>5. Isi jika mempunyai alamat proxy (Optional) :</p>
        <img className="content-img setubuntu 5" src={setubuntu5}/>
        <p>6. Pilih konfigurasi storage atau buat custom storage layout (Optional) :</p>
        <img className="content-img setubuntu 6" src={setubuntu6}/>
        <p>7. Konfigurasi profil setting :</p>
        <img className="content-img setubuntu 7" src={setubuntu7}/>
        <p>8. Isi jika ingin membuat SSH untuk melakukan akses remote (Optional) :</p>
        <img className="content-img setubuntu 8" src={setubuntu8}/>
        <p>9. Pilih dan instal snap populer yang ingin dimiliki pada server :</p>
        <img className="content-img setubuntu 9" src={setubuntu9}/>
        <p>10. Tunggu beberapa saat untuk server siap melakukan instalasi dan reboot jika selesai :</p>
        <img className="content-img setubuntu 10" src={setubuntu10}/>
        <img className="content-img setubuntu 11" src={setubuntu11}/>
        <p2 className="gap"> Terima Kasih</p2>
      </body>
    </div>
  );
}

export default App;
