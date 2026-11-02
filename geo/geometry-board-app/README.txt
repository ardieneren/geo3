GEOMETRY BOARD - EXE YAPMA REHBERI

YONTEM 1 - Bilgisayarina hicbir sey kurmadan (GitHub ile, ucretsiz)
1. github.com'da hesap ac, yeni bir repository olustur (Public olabilir).
2. Bu klasorun icindeki TUM dosyalari (.github klasoru dahil) repository'ye yukle.
3. Ustte "Actions" sekmesine gir, "Build app" calismasini bekle (3-5 dk).
4. Bitince calismaya tikla, en altta "Artifacts" bolumunden
   geometry-board-windows-latest dosyasini indir. Icinden cikan .exe tek basina calisir.

YONTEM 2 - Kendi bilgisayarinda (Node.js kurulu olmali, bir kerelik)
1. nodejs.org'dan Node.js (LTS) kur.
2. Bu klasorde komut satirini ac:  npm install   sonra   npm run build
3. dist klasorunde .exe (Windows), .dmg (Mac) veya .AppImage (Linux) olusur.

Test icin:  npm install   sonra   npm start
Not: Imzasiz oldugu icin Windows ilk acilista "Daha fazla bilgi > Yine de calistir" diyebilir.
