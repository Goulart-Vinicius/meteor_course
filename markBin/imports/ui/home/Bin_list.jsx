import React from "react";
import { useSubscribe, useTracker } from "meteor/react-meteor-data";
import { Bins } from "../../api/bins";
import Bin_detail from "./Bin_detail";

export default function Bin_list() {
  const isLoading = useSubscribe("bins");
  const isLoadingShared = useSubscribe("sharedBins");

  const binRecords = useTracker(() => {
    return Bins.find({}).fetch();
  });

  if (isLoading() && isLoadingShared()) {
    return <div>Loading...</div>;
  } else {
    const binList = binRecords.map((bin) => {
      return <Bin_detail key={bin._id} bin={bin} />;
    });

    return <ul className="w-3/4">{binList}</ul>;
  }
}
