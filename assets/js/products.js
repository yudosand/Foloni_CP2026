window.FOLONI_PRODUCTS = {
  "bawang-putih-kating": {
    id: "bawang-putih-kating",
    name: "Bawang Putih Kating",
    pack: "1 Kg - 60 Kg / pack",
    image: "assets/img/products/BP-KATING.jpg",
    desc: "Bawang Putih Kating Foloni dipilih dari bahan berkualitas dengan standar sortir yang ketat agar ukuran, aroma, dan rasa tetap konsisten. Cocok untuk kebutuhan dapur rumahan maupun operasional UKM F&B yang membutuhkan bumbu dengan karakter kuat dan hasil masakan yang stabil. Produk dikemas rapi untuk menjaga kesegaran selama pengiriman, sehingga sampai di lokasi tetap dalam kondisi prima. Ideal digunakan untuk berbagai olahan seperti tumisan, marinasi, kuah, dan sambal, dengan rasa gurih yang keluar alami saat dimasak..",
  },

  "bawang-putih-honam": {
    id: "bawang-putih-honam",
    name: "Bawang Putih Honam",
    pack: "1 Kg - 60 Kg / pack",
    image: "assets/img/products/BP-HONAM.jpg",
    desc: "Bawang Putih Honam Foloni dikenal dengan rasa dan aroma khas yang kuat sehingga membantu memperkaya cita rasa masakan. Kami menjaga kualitas melalui proses seleksi dan penanganan yang baik agar bawang tidak mudah lembek serta tetap segar saat diterima. Sangat cocok untuk restoran, katering, dan UMKM yang membutuhkan pasokan stabil dengan kualitas seragam. Dikemas aman untuk mengurangi risiko rusak saat pengiriman, sehingga kamu bisa fokus pada produksi tanpa khawatir bahan baku.",
 
  },

  "bawang-merah": {
    id: "bawang-merah",
    name: "Bawang Merah",
    pack: "1 Kg - 60 Kg / pack",
    image: "assets/img/products/BM.png",
    desc: "Bawang merah segar pilihan, aroma kuat, cocok untuk kebBawang Merah Foloni adalah pilihan tepat untuk kebutuhan harian maupun usaha kuliner karena aromanya kuat dan hasil masakan lebih “keluar”. Melalui proses sortir, kami memastikan kualitas lebih konsisten—mulai dari kondisi kulit hingga tingkat kesegaran. Cocok untuk berbagai olahan seperti bumbu dasar, sambal, gorengan, hingga campuran tumisan. Dengan pengemasan yang rapi dan pengiriman terjaga, bawang merah tetap segar saat sampai sehingga mengurangi potensi susut dan menjaga efisiensi operasional.utuhan rumah tangga maupun usaha kuliner.",
   
  },

  "bawang-putih-kating-kupas": {
    id: "bawang-putih-kating-kupas",
    name: "Bawang Putih Kating Kupas",
    pack: "1 Kg - 60 Kg / pack",
    image: "assets/img/products/BP-KATING-KUPAS.jpg",
    desc: "Bawang Putih Kating Kupas Foloni dibuat untuk kamu yang ingin proses memasak lebih cepat dan praktis—tanpa perlu buang waktu mengupas. Produk diproses secara higienis dan dikemas dengan baik untuk menjaga kebersihan serta kesegarannya. Sangat cocok untuk dapur produksi, resto, katering, hingga UMKM yang memiliki volume masak tinggi. Dengan bawang yang sudah siap olah, workflow dapur jadi lebih efisien, waktu persiapan lebih singkat, dan kualitas rasa tetap terjaga karena bawang masih segar saat digunakan.",

  },

  "bawang-putih-honam-kupas": {
    id: "bawang-putih-honam-kupas",
    name: "Bawang Putih Honam Kupas",
    pack: "1 Kg - 60 Kg / pack",
    image: "assets/img/products/BP-HONAM-KUPAS.jpg",
    desc: "Bawang Putih Honam Kupas Foloni memberikan solusi praktis bagi dapur yang menuntut kecepatan tanpa mengorbankan kualitas. Dengan proses kupas yang higienis dan kemasan yang rapi, produk ini membantu mempercepat persiapan bahan sekaligus menjaga kebersihan area produksi. Cocok untuk restoran, katering, dan UMKM F&B yang ingin mengurangi beban kerja prep kitchen. Aroma bawang tetap terasa kuat saat dimasak, sehingga masakan tetap konsisten dari segi rasa dan kualitas.",

  },

  "bawang-merah-kupas": {
    id: "bawang-merah-kupas",
    name: "Bawang Merah Kupas",
    pack: "1 Kg - 60 Kg / pack",
    image: "assets/img/products/BM-KUPAS.png",
    desc: "Bawang Merah Kupas Foloni adalah solusi tepat untuk operasional dapur yang membutuhkan efisiensi tinggi. Dengan bawang yang sudah dikupas, kamu bisa mempercepat proses persiapan bumbu dan memangkas waktu kerja harian. Diproses secara higienis dan dikemas rapi agar tetap segar saat diterima. Sangat cocok untuk kebutuhan katering, resto, dan UMKM F&B yang ingin menjaga ritme produksi tetap cepat, sekaligus meminimalkan susut karena pengupasan dilakukan lebih terkontrol.",

  }
};

window.getProductById = function(id){
  return (window.FOLONI_PRODUCTS && window.FOLONI_PRODUCTS[id]) ? window.FOLONI_PRODUCTS[id] : null;
};
