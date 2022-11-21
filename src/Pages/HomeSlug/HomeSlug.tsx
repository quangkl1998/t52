import FormServices from "Components/FormServices/FormServices";
import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMenu } from "Slices/menu";
import { getDetailSubMenu } from "Slices/submenu";

const HomeSlug = () => {
  const { menuslug, subslug } = useParams();
  const { detail: detailMenu } = useSelector((state: RootState) => state.menu);
  const { detail: detailSubMenu } = useSelector(
    (state: RootState) => state.submenu,
  );
  console.log(detailSubMenu);

  const [status, setStatus] = useState<any>(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (subslug) {
      dispatch(getDetailSubMenu({ slugSubMenu: subslug }));
      setStatus(1);
    } else {
      if (menuslug) {
        dispatch(getDetailMenu({ slugMenu: menuslug }));
        setStatus(2);
      }
    }
  }, [menuslug]);
  if (detailMenu || detailSubMenu) {
  } else {
    return <></>;
  }

  return (
    <div className="bg-gray-100">
      <div className="lg:h-36 h-28"></div>
      <div className="container mx-auto px-10">
        <div className="flex gap-10">
          <div className="w-full lg:w-3/4">
            {status == 1 && (
              <div
                dangerouslySetInnerHTML={{
                  __html: detailSubMenu?.content,
                }}
              />
            )}
            {status == 2 && (
              <div
                dangerouslySetInnerHTML={{
                  __html: detailMenu?.content,
                }}
              />
            )}
          </div>
          <div className="hidden lg:block lg:w-1/4">
            <FormServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlug;
