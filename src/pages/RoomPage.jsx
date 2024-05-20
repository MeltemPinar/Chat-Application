const RoomPage = ({ setRoom, setIsAuth }) => {
  //form gönderilince etetiklenecek
  const handleSubmit = (e) => {
    e.preventDefault();
    //imputtaki değeri al
    const room = e.target[0].value;
    //kullanıcın seçtiği odayı state e aktar
    setRoom(room.toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>

      <p>Hangi Odaya Gireceksiniz</p>

      <input type="text" placeholder="ör:Haftaiçi" required />

      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          // yetki state'ini false'a çekerek oda logine yönlendir
          setIsAuth(false);
          // local'deki kaydı kaldır
          localStorage.removeItem("token");
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
