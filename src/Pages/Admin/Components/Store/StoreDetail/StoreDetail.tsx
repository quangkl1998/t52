import { AppDispatch, RootState } from "configStore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailStore } from "Slices/StoreAdmin";
import Detail from "./Detail";

const StoreDetail = () => {
  const [data, setData] = useState<any>([]);

  const { storesDetail } = useSelector((state: RootState) => state.storeAdmin);
  useEffect(() => {
    if (storesDetail) {
      setData(storesDetail);
    }
  }, [storesDetail]);
  const { idStore } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDetailStore(idStore!));
  }, [dispatch, idStore]);

  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        {storesDetail?.name}
      </h1>

      <div className="container mx-auto p-5">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <iframe
              src={storesDetail?.idMap}
              className="w-full h-96 rounded-lg"
              title="map"
            ></iframe>
          </div>
          <Detail idStore={idStore} data={data} />
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
