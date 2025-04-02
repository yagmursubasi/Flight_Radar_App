import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  //parametreleri belirle
  const params = {
    bl_lat: "34.64943",
    bl_lng: "24.65734",
    tr_lat: "43.42391",
    tr_lng: "46.118554",
    speed: "1,999999",
  };
  //api isteği at
  const res = await api.get("/flights/list-in-boundary", { params });

  //gelen veri dizi içerisinde dizi olduğundan kullanımı daha kolay olması için diznin içerisindeki diziyi nesneye çeviriyoruz
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));
  //slice`a aktarılacak payload`ı belirle
  return formatted;
});
export const getDetails = createAsyncThunk("detail/getDetail", async (id) => {
  const params = {
    flight: id,
  };
  //api isteği at
  const res = await api.get(`/flights/detail`, { params });
  //slice`a aktarılacak payload`ı belirle
  // console.log(res.data);
  return res.data;
});
