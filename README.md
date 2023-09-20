# Cordova Webview

[![Cordova](https://img.shields.io/badge/version-9.0.3-brightgreen)](https://cordova.apache.org/)
[![Gradle](https://img.shields.io/badge/version-7.1.1-blue)](https://gradle.org/install/)
[![Java](https://img.shields.io/badge/version-11.0.20-red)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
[![Android Tools](https://img.shields.io/badge/API%20Level-33-important)](https://developer.android.com/studio/command-line/sdkmanager)

## Daftar Isi

1. [Pengenalan](#pengenalan)
   - [Tentang Android](#tentang-android)
   - [Tentang Codemagic](#tentang-codemagic)
   - [Tentang Cordova](#tentang-cordova)
   - [Tentang Github](#tentang-github)

- [Instalasi dan Setup Pada Komputer](#instalasi-dan-setup-pada-komputer)
- [Registrasi,Instalasi dan Setup Pada Codemagic](#registrasi-instalasi-dan-setup-pada-codemagic)
- [Penggunaan Aplikasi](#penggunaan-aplikasi)
- [Mengubah Configurasi Pada Codemagic dan Komputer](#mengubah-configurasi-pada-codemagic-dan-komputer)
- [Tentang Developer](#tentang-developer)

## Pengenalan

---

Project ini menggunakan Codemagic sebagai CI/CD untuk melakukan proses build dan distribusi aplikasi Android secara otomatis. Skrip build disediakan dalam format file `.yaml`.

### Tentang Android

Android adalah sistem operasi berbasis Linux yang dirancang untuk perangkat bergerak layar sentuh seperti telepon pintar dan komputer tablet. Android awalnya dikembangkan oleh Android, Inc., dengan dukungan finansial dari Google, yang kemudian membelinya pada tahun 2005.

### Tentang Codemagic

Codemagic adalah alat CI/CD yang menjadi pilihan yang baik bagi pengembang Flutter. Tidak hanya mengurangi waktu konfigurasi CI/CD untuk Flutter, tetapi juga memberikan host berfitur lengkap untuk aplikasi Anda. Codemagic memiliki kemampuan untuk menguji, membangun, dan meluncurkan aplikasi Flutter dengan satu klik atau satu perintah dari baris perintah Anda.

### Tentang Cordova

Cordova adalah platform untuk membangun aplikasi mobile native menggunakan HTML, CSS dan JavaScript. Ini adalah platform yang melibatkan aplikasi web yang telah dikemas untuk distribusi lokal dan memiliki akses ke API perangkat asli.

### Tentang Github

Github adalah layanan hosting web berbasis Git untuk proyek pengembangan perangkat lunak yang menggunakan sistem pengawasan revisi Git. Github menawarkan semua distribusi manajemen revisi dan sumber kode fungsi Git serta fitur tambahannya sendiri.

## Instalasi dan Setup Pada Komputer

---

Untuk menggunakan project ini, lakukan langkah-langkah berikut ini:

- Clone repository ini.
  ```
  git clone https://github.com/lgarin211/CORDOVA-CORE-FOR-WEBVIEW
  ```
- Pastikan Anda menggunakan versi terbaru dari `node`, `java`, dan `android`. Selanjutnya, instal dependensi menggunakan npm.
  ```
  npm install
  npm ci
  ```
- Instalasi SDKMAN, Java dan Gradle
  ```
  curl -s "https://get.sdkman.io" | bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  sdk install java 11.0.20-amzn
  sdk install gradle 7.1.1
  ```
- [Instalasi Android Studio](https://developer.android.com/studio) dan Android Tools API level 33.

## Registrasi,Instalasi dan Setup Pada Codemagic

---

- [Registrasi dan masuk ke Codemagic](https://codemagic.io/start/)
- Pilih project Anda di Github dan pilih opsi untuk setup `.yaml` secara manual.
- Salin dan tempek codemagic.yaml dari repository Anda ke editor konfigurasi dari project di Codemagic.
- Pada bagian environment variabels, tambahkan variabel baru dengan nama `CM_API_TOKEN` dan isi dengan token API Codemagic Anda.

## Penggunaan Aplikasi

---

- Menambahkan platform android untuk aplikasi dengan perintah `cordova platform add android`.
- Membuat keystore dengan perintah berikut, ganti `CUSTEM` dengan nama alias key Anda dan `@CUSTEM211` dengan password yang Anda inginkan.
  ```
  keytool -genkeypair -v -keystore CUSTEM.keystore -storepass @CUSTEM211 -keyalg RSA -keysize 2048 -validity 10001 -alias Dcustem -storetype PKCS12 -dname "CN=Custem, OU=Custem2, O=Custem3, L=Custem3, ST=java, C=id"
  ```
- Build Bundle dan APK
  ```
  cordova build android --release -- --keystore=./CUSTEM.keystore --storePassword=@CUSTEM211 --alias=Dcustem --password=@CUSTEM211 --packageType=bundle
  ```
  ```
  cordova build android --release -- --keystore=./CUSTEM.keystore --storePassword=@CUSTEM211 --alias=Dcustem --password=@CUSTEM211 --packageType=apk
  ```

## Mengubah Configurasi Pada Codemagic dan Komputer

---

Anda bisa mengubah konfigurasi build dengan mengubah workflow pada `codemagic.yaml`, atau langsung di UI pengaturan Codemagic.

## Tentang Developer

---

![Profil Picture](https://lgarin211.github.io/assets/img/profile-img.jpg)

Nama : Agustinus Pardamean Lumban Tobing <br>
Pendidikan : Computer Saince Binus Univercity <br>
Hasil Karya : [Lihat di sini](https://lgarin211.github.io) <br>
Akun Github : [akun github](https://github.com/lgarin211)<br>
Hormat saya,
Agustinus Pardamean Lumban Tobing
