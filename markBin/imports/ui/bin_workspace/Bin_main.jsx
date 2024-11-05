import React from "react";
import { useParams } from "react-router";
import { useSubscribe, useTracker } from "meteor/react-meteor-data";

//collections
import { Bins } from "../../api/bins";

//components
import Bin_editor from "./Bin_editor";
import Bin_viwer from "./Bin_viwer.jsx";
import Bin_share from "./Bin_share";

export default function BinMain() {
  const { binId } = useParams();
  const isLoading = useSubscribe("bins");
  const isLoadingShared = useSubscribe("sharedBins");

  const bin = useTracker(() => {
    return Bins.findOne({ _id: binId });
  }, [binId]);

  if (isLoading() && isLoadingShared()) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="w-full">
        <div className="flex justify-between mx-8 max-w-full h-3/6 snap-y box-border overscroll-y-contain">
          <Bin_editor bin={bin} />
          <Bin_viwer content={bin.content} />
        </div>
        <Bin_share bin={bin} />
      </div>
    );
  }
}
