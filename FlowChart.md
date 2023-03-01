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

**movieReducer ve FavReducer combine ile rootReducer yapılarak App'e bağlandı.

-FavReducer içinde favorites dizisi tutan bir initial state var
-Bu aksiyon olarak hem listeme dizi ekliyor hem de çıkar işlevini yaptırıyor.
-App.js içinde favorites değişkeninde useSelector ile storelamak istediğim state'i bağladım.
-Favorites içinden listeme ekle butonu ile film ekliyorum.
-Bu actionda da some metodu ile favorites arrayindeki elementle eklemek istediğim id kıyaslanıyor. Eşleşme varsa filmi eklemeden şu anki state'i döner yoksa filmi ekler ve statei günceller.
- /listem route'unda FavMovie bileşenine göstermek istediğim filmin bilgilerini belirtiyorum.
-FavMovie içinde title ve genres gösteriliyor.
- Çıkar butonunda removeMovie aksiyonu ile aksiyon case'imde yani REMOVE_MOVIE'de movie'nin id'si ile action.payload değeri eşitse false dönülür ve filter fonksiyonu movieyi atar.