**Provider-createStore-istediğim reducerlar ---->index.js'e importlandı ve storeda hangi reducerı tutmak istiyosam tanımlandı. 
**Belgeler içerisinde storela gerekli statei seçebilmek için useSelector importlandı.
**dispatch için useDispatch() unutma!!.
**aksiyon dosyasından reducer dosyama geçerli aksiyonları importladın mı ? 

-movies filmlerden oluşan bir array.
-App.js dosyasında sıradaki filmi çalıştıran bir fonksiyon ve numarayı yani dizi indexini useState'den alan bir argüman var.
-Movie.js'e bu sıra stateini props olarak atmış ve ordan indexi güncelliyor.
-Bu yüzden movieIndex diye bir initialState ve bunu değiştiren bir aksiyonu movieReducer'a işledim.
-movieActions'a fonksiyonu tanımladım. (NextMovie--- NEXT_MOVIE)
-App.js'de sonraki film event listenerını kaldırıp yerine html içerisinde gerekli yere dispatch edilen aksiyonumu koydum.
-Şu an movies arrayi kısa ve aslında props yani useState işimi görüyodu fakat ilerde moviesin index sayısı değişebilir diye böyle bir initstate tanımladım. (Fakat yine de gerekli miydi? Hocaya sorabilirsin!!!).

