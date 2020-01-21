import React, { useContext } from "react";
import formatDate from "date-fns/format";
import Button from "../Button";
import { FirebaseContext, db } from "../auth/config";
import { LoadingContext, TPost } from "./List";

type TProps = {
  onClick: (post: TPost) => void;
};

// ダミーローディング
const sleep = (msec: number) =>
  new Promise(resolve => setTimeout(resolve, msec));

const Add: React.FC<TProps> = ({ onClick }) => {
  const { userId } = useContext(FirebaseContext);
  const { setLoading } = useContext(LoadingContext);

  const handleClick = async () => {
    setLoading(true);
    await sleep(500);
    const date = new Date();
    const formatSeconds = formatDate(date, "t");
    await db.collection("records").add({
      user: db.collection("users").doc(userId || undefined),
      createdAt: date
    });
    onClick({
      createdAt: {
        seconds: formatSeconds
      }
    });
    setLoading(false);
  };
  return <Button text="かけたよ" onClick={handleClick} theme="main" />;
};

export default Add;
